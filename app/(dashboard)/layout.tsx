import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            Dashboard Navbar
            {children}
        </div>
    );
};

export default Layout;
