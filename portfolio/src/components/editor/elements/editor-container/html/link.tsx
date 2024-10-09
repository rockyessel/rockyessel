'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { useFocused, useSelected } from 'slate-react';
import { LinkType, RenderProps } from '@/components/editor/types';

const HtmlLinkElement = (props: RenderProps<LinkType>) => {
  const { attributes, children, element } = props;
  const { props: props_ } = element;
  const { href, rel, target } = props_;
  const selected = useSelected();
  const focused = useFocused();

  return (
    <Link
      target={target}
      rel={rel}
      {...attributes}
      href={href}
      className={cn('text-lime-500 underline', {
        'text-lime-600': selected && focused,
      })}
    >
      {children}
    </Link>
  );
};

export default HtmlLinkElement;
