import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      Root Navbar
      {children}
    </div>
  );
};

export default Layout;