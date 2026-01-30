"use client";

export default function Footer () {
    return(
        <footer className="flex flex-col items-center gap-3 py-12 px-6 text-center border-t border-slate-200">
            <h1 
                suppressHydrationWarning 
                className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">CondoConnect</span> © 2026 Todos os direitos reservados.
            </h1>
        </footer>
    );
}