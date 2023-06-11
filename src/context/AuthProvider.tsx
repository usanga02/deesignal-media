import React, { createContext, useState } from "react";
import { IBlog, BlogContextType, IWork } from "../@types/blog";

const AuthContext = createContext<BlogContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [work, setWork] = useState<IWork | null>(null);
  return (
    <AuthContext.Provider
      value={{
        work,
        setWork,
        blog,
        setBlog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
