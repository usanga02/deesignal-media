import React, { createContext, useState } from "react";
import { IBlog, BlogContextType } from "../@types/blog";

const AuthContext = createContext<BlogContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  return (
    <AuthContext.Provider
      value={{
        blog,
        setBlog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
