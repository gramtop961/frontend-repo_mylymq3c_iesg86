import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-600 text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="font-semibold text-slate-900">Karnataka Academic Suite</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#modules" className="hover:text-slate-900">Modules</a>
            <a href="#workflows" className="hover:text-slate-900">Workflows</a>
            <a href="#security" className="hover:text-slate-900">Security</a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              <a href="#modules" className="px-3 py-2 rounded hover:bg-slate-100">Modules</a>
              <a href="#workflows" className="px-3 py-2 rounded hover:bg-slate-100">Workflows</a>
              <a href="#security" className="px-3 py-2 rounded hover:bg-slate-100">Security</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
