import { HEADING_EL_MAP } from "@/components/editor/lib/constants";
import { HeadingTypes } from "@/components/editor/types";
import { createSlug } from "@/lib/utils/helpers";
import { RenderElementProps } from "slate-react";
import {
  ReactNode,
  Children,
  isValidElement,
  useState,
  useRef,
  useEffect,
} from "react";

interface Props {
  type: HeadingTypes;
  props: RenderElementProps;
}

const HTMLHeadingsElementsRender = ({ type, props }: Props) => {
  const { attributes, children } = props;
  const [showAnchor, setShowAnchor] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const extractTextFromReactChildren = (children: ReactNode): string => {
    let text = "";
    Children.forEach(children, (child) => {
      if (isValidElement(child)) {
        if (child.props.text) {
          text += child.props.text.text;
        } else {
          text += extractTextFromReactChildren(child.props.children);
        }
      }
    });
    return text;
  };

  const headingText = extractTextFromReactChildren(children);
  const headingId = createSlug(headingText);

  useEffect(() => {
    const currentHeading = headingRef.current;
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting)
          window.history.replaceState(null, "", `#${headingId}`);
      },
      // Trigger when 50% of the heading is visible
      { threshold: 0.5 }
    );

    if (currentHeading) observer.observe(currentHeading);
    return () => {
      if (currentHeading) observer.unobserve(currentHeading);
    };
  }, [headingId]);

  const Heading = HEADING_EL_MAP[type] || "p";

  return (
    <Heading
      title={headingText}
      id={headingId}
      {...attributes}
      className="group relative"
    >
      {showAnchor && (
        <a
          href={`#${headingId}`}
          className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-1 text-blue-500 hover:text-blue-700"
          aria-hidden="true"
        >
          #
        </a>
      )}
      {children}
    </Heading>
  );
};

export default HTMLHeadingsElementsRender;
