import { HEADING_EL_MAP } from '@/components/editor/lib/constants';
import { HeadingTypes } from '@/components/editor/types';
import { createSlug } from '@/lib/utils/helpers';
import { RenderElementProps } from 'slate-react';
import { ReactNode, Children, isValidElement, useState } from 'react';

interface Props {
  type: HeadingTypes;
  props: RenderElementProps;
}

const HTMLHeadingsElements = ({ type, props }: Props) => {
  const { attributes, children } = props;
  const [showAnchor, setShowAnchor] = useState(false);

  const extractTextFromReactChildren = (children: ReactNode): string => {
    let text = '';
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

  const Heading = HEADING_EL_MAP[type] || 'p';

  return (
    <Heading
      title={headingText}
      id={headingId}
      {...attributes}
      onMouseEnter={() => setShowAnchor(true)}
      onMouseLeave={() => setShowAnchor(false)}
    >
      {children}
      {headingId && showAnchor && (
        <a
        contentEditable={false}
          href={`#${headingId}`}
          className='text-gray-400 ml-5 text-sm'
          title='heading-anchor'
          aria-hidden='true'
        >
          #
        </a>
      )}
    </Heading>
  );
};

export default HTMLHeadingsElements;
