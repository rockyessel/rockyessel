import { isValidURL } from "../lib/helpers";
import { LinkNode, ParagraphNode } from "../nodes";
import { Editor, Transforms, Range, Element } from "slate";

const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
  });
  return !!link;
};

const removeLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
  });
};

const addLink = (editor: Editor, href: string) => {
  if (isLinkActive(editor)) {
    removeLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const text = isCollapsed ? href : "";
  const linkProps = { href, target: "_blank", rel: "noopener noreferrer" };
  const link = LinkNode({ ...linkProps }, text);

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};

// Add custom behavior to handle Enter and Space key presses
export const withLinks = (editor: Editor) => {
  const { insertData, insertText, onKeyDown, isInline } = editor;

  editor.isInline = (element) =>
    element.type === "link" ? true : isInline(element);

  editor.insertText = (text) => {
    if (text && isValidURL(text)) {
      addLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");

    if (text && isValidURL(text)) {
      addLink(editor, text);
    } else {
      insertData(data);
    }
  };

  editor.onKeyDown = (event) => {
    if (isLinkActive(editor)) {
      if (event.key === "Enter") {
        // Handle Enter key: insert a new paragraph
        event.preventDefault();
        const { selection } = editor;
        if (selection && Range.isCollapsed(selection)) {
          // Insert a new paragraph after the current link node
          Transforms.splitNodes(editor, { at: selection.anchor });
          const paragraph = ParagraphNode();
          Transforms.insertNodes(editor, paragraph);
          Transforms.move(editor, { distance: 1, unit: "offset" }); // Move cursor to the new paragraph
        }
        return;
      }

      if (event.ctrlKey && event.key === " ") {
        // Handle Ctrl+Space bar: separate link and continue text in the same node
        event.preventDefault();
        const { selection } = editor;
        if (selection && Range.isCollapsed(selection)) {
          // If the selection is collapsed, insert a space after the link
          const [linkNode] = Editor.nodes(editor, {
            match: (n) =>
              !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
          });

          if (linkNode) {
            // Move cursor after the link
            Transforms.insertText(editor, " ");
            Transforms.move(editor, { distance: 1, unit: "offset" }); // Move cursor after the space
          }
        } else {
          // Handle case where the selection is not collapsed
          Transforms.unwrapNodes(editor, {
            match: (n) =>
              !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
          });
          Transforms.insertText(editor, " ");
        }
        return;
      }
    }

    // Call the original onKeyDown handler
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return editor;
};
