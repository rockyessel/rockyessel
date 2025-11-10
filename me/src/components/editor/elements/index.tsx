import EditorHTMLContainers from './editor-container';
import RenderHTMLContainers from './render-container';

const Elements = () => {
  const editorContainer = EditorHTMLContainers();
  const renderContainer = RenderHTMLContainers();
  const props = { eHtml: editorContainer, rHtml: renderContainer };
  return props;
};

export default Elements;
