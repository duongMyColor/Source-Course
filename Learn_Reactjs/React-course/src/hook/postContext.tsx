import React, { useState, createContext } from "react";

interface PostProps {
  children: React.ReactNode;
}
interface ContextType {
  state: string;
}

export const PostContext = createContext<ContextType>({ state: "" });

const PostProvider = ({ children }: PostProps) => {
  const [state, setState] = useState<string>("test");

  const context = {
    state: state,
  };

  return (
    <PostContext.Provider value={context}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
