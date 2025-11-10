"use client";

import { createContext, ReactNode, useContext } from "react";

interface EditorProps {
  children: ReactNode;
}

interface Props {}

const EditorContext = createContext<Props>({});

export const EditorProvider = ({ children }: EditorProps) => {
  const values: Props = {};

  return (
    <EditorContext.Provider value={values}>
      
      
      {children}
    
    
    
    
    </EditorContext.Provider>
  );
};

export const useEditor = (): Props => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error("{{useEditor}} must be used within a {{EditorProvider}}");
  }

  return context;
};
