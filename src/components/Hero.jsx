import { Rocket, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
              <Rocket className="w-4 h-4" />
              Academic Management for Karnataka
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Streamline daily academics for schools and colleges
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              A modern portal for teachers and students — attendance, assessments, content sharing, and analytics aligned to Karnataka academic patterns.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Class & subject management",
                "Period-wise attendance & reports",
                "Assignments, IA & exam workflows",
                "Role-based secure access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-slate-600">
              <span className="text-center px-8">
                Beautiful, responsive UI ready to map all academic workflows.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
