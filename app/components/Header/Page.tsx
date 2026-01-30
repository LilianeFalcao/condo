"use client";
import Link from "next/link";

export default function Header() {
return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4">
    <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">
        <Link href="/" >Condo<span className="text-gray-800">Connect</span></Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <li>
            <Link href="/avisos" className="hover:text-blue-600 transition-colors">
            Avisos
            </Link>
        </li>
        <li>
            <Link href="/areascomuns" className="hover:text-blue-600 transition-colors">
            Áreas Comuns
            </Link>
        </li>
        <li>
            <Link href="/manutencoes" className="hover:text-blue-600 transition-colors">
            Manutenções
            </Link>
        </li>
        </ul>
        <div className="flex items-center gap-4">
        <Link 
            href="/login" 
            className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
            Login
        </Link>
        <Link 
            href="/register" 
            className="px-5 py-2 bg-[#455a64] text-white rounded-lg font-medium hover:bg-[#455a64]/80 transition-all shadow-md active:scale-95"
        >
            Register
        </Link>
        </div>
    </nav>
    </header>
);
}