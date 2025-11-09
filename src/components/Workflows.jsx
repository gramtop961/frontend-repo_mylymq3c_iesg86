import { ListChecks, ClipboardCheck, GraduationCap, Shield } from "lucide-react";

export default function Workflows() {
  return (
    <section id="workflows" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ListChecks className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Teacher Workflow</h3>
            </div>
            <ol className="mt-4 space-y-3 text-slate-700 list-decimal list-inside">
              <li>Plan lessons aligned to syllabus and term structure</li>
              <li>Take daily/period attendance with quick actions</li>
              <li>Create assignments and IA tests; publish due dates</li>
              <li>Evaluate submissions; record marks and feedback</li>
              <li>Share study materials and announcements</li>
              <li>View class analytics and intervene early</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-semibold text-slate-900">Student Workflow</h3>
            </div>
            <ol className="mt-4 space-y-3 text-slate-700 list-decimal list-inside">
              <li>Follow timetable and lesson plans</li>
              <li>Submit assignments and attempt IA tests</li>
              <li>Track attendance, marks, and feedback</li>
              <li>Access study materials and class notices</li>
              <li>Engage in teacher-led academic discussions</li>
              <li>Review progress dashboards and goals</li>
            </ol>
          </div>
        </div>
        <div id="security" className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <Shield className="w-6 h-6 text-slate-700" />
            <h4 className="mt-3 font-semibold text-slate-900">Secure Access</h4>
            <p className="mt-1 text-sm text-slate-600">Role-based permissions: Admin, Teacher, Student with granular scopes.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <GraduationCap className="w-6 h-6 text-slate-700" />
            <h4 className="mt-3 font-semibold text-slate-900">Karnataka Patterns</h4>
            <p className="mt-1 text-sm text-slate-600">Supports PU/UG streams, period-wise attendance and IA schemes.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <Shield className="w-6 h-6 text-slate-700" />
            <h4 className="mt-3 font-semibold text-slate-900">Compliance</h4>
            <p className="mt-1 text-sm text-slate-600">Exportable reports for audits and statutory formats.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
