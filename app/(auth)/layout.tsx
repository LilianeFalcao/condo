import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Página de Login/ Register",
};

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="w-full auth-wrapper">
        {children}
        </div>
    );
}