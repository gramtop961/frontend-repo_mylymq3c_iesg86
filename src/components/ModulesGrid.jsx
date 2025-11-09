import { Notebook, Calendar, Users, FileText, BarChart3, MessageSquare } from "lucide-react";

const modules = [
  {
    icon: Notebook,
    title: "Classes & Subjects",
    desc: "Syllabus, timetable, lesson plans, and term structures for school & college streams.",
  },
  {
    icon: Users,
    title: "Attendance",
    desc: "Daily and period-wise tracking, bulk upload, and compliance-ready reports.",
  },
  {
    icon: FileText,
    title: "Assignments & Exams",
    desc: "Create, submit, evaluate; internal assessment and end-term exam workflows.",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    desc: "Events, holidays, exam schedules, and reminders synced to classes.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Announcements, notices, and class discussions with attachments.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Progress dashboards for students and classes with exportable insights.",
  },
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Core Modules</h2>
        <p className="mt-2 text-slate-600">A comprehensive set designed for Karnataka academic workflows.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/10 text-indigo-700 grid place-items-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
