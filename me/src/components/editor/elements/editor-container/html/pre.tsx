"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeBlockType, RenderProps } from "@/components/editor/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { codeThemes } from "@/components/editor/lib/constants";

const HtmlPreCodeElement = (props: RenderProps<CodeBlockType>) => {
  const { attributes, children, element } = props;

  console.log("code-block-props: ", props);

  const { props: props_ } = element;
  const { code, language, theme, isShowLins } = props_;

  return (
    <pre
      data-language={language}
      data-theme={theme}
      {...attributes}
      // showInlineLineNumbers={isShowLins}
      className="relative w-full overflow-x-auto bg-zinc-500 h-full rounded-lg p-2"
    >
      <div className="absolute right-0">
        <div contentEditable={false} className="flex items-center gap-2">
          <Select>
            <SelectTrigger
              contentEditable={false}
              className="w-[100px] p-1 text-sm"
            >
              <SelectValue contentEditable={false} placeholder="Change theme" />
            </SelectTrigger>
            <SelectContent contentEditable={false}>
              <SelectGroup>
                <SelectLabel>Themes</SelectLabel>
                {codeThemes.map((theme, index) => (
                  <SelectItem key={index} value={theme}>
                    {theme}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[100px] p-1 text-sm">
              <SelectValue placeholder={language ?? "Select language"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                {SyntaxHighlighter.supportedLanguages.map((lang, index) => (
                  <SelectItem key={index} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <code>{children}</code>
    </pre>
  );
};

export default HtmlPreCodeElement;
{
  /* <SyntaxHighlighter
        wrapLongLines={true}
        wrapLines={true}
        language={language}
        style={codeThemes[theme]}
      >
        {code}
      </SyntaxHighlighter> */
}
