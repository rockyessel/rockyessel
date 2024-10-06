'use client';

import { cn } from '@/lib/utils/helpers';
import { useRef, useEffect, useState, KeyboardEvent } from 'react';
import { HTMLDivProps } from '@/types';

interface Props {
  defaultValue?: string;
  placeholder?: string;
  onChange?: (title: string) => void;
  className?: string;
}

const EditableTitle = (props: Props) => {
  const {
    defaultValue,
    onChange,
    placeholder = 'Enter title...',
    className,
  } = props;
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [content, setContent] = useState(defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.textContent = content;
    }
  }, [content]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    const currentRef = titleRef.current;
    if (currentRef) {
      const newContent = currentRef.textContent?.trim() || '';
      setContent(newContent);
      if (onChange) {
        onChange(newContent);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      titleRef.current?.blur();
    }
  };

  const onInput = () => {
    const newContent = titleRef?.current?.textContent;
    if (!newContent) return;
    if (onChange) {
      onChange(newContent);

      setContent(newContent);
    }
  };
  return (
    <div className='relative'>
      <div
        spellCheck={true}
        ref={titleRef}
        contentEditable={true}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onInput={onInput}
        className={cn(
          className,
          'font-extrabold p-2 border-none outline-none focus: focus: min-h-[1em] empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none'
        )}
        data-placeholder={placeholder}
      />
      {!content && !isFocused && (
        <div
          data-placeholder='editablePlaceholder'
          className={cn(
            className,
            'absolute top-0 left-0 font-extrabold p-2 text-gray-400 pointer-events-none'
          )}
        >
          {placeholder}
        </div>
      )}
    </div>
  );
};

export default EditableTitle;
