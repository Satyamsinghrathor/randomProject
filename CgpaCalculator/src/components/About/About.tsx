import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-black/50">

        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 mb-4">
            <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01" />
            </svg>
          </div>

          <h1 className="text-white text-2xl font-bold tracking-tight">
            About CGPA Portal
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Academic performance tracking system
          </p>
        </div>

        {/* Content */}
        <div className="space-y-5 text-slate-300 text-sm leading-relaxed">

          <p>
            The <span className="text-sky-400 font-semibold">CGPA Portal</span> is a
            student academic result management system designed to help students
            quickly access their semester-wise performance.
          </p>

          <p>
            Students can search using their roll number and semester to view:
          </p>

          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>Subject-wise marks and grades</li>
            <li>Total credits earned</li>
            <li>Grade points calculation</li>
            <li>Semester CGPA classification</li>
            <li>Downloadable PDF result sheet</li>
            <li className=" text-red-600">NOTE: it is only for CSE A and B </li>
          </ul>

          <p>
            OPEN SOURCE LINK:   <Link to= "https://github.com/Satyamsinghrathor/randomProject/tree/main/CgpaCalculator"
            className="text-green-500 hover:text-red-600 "
            > GITHUB </Link>
          </p>

          <p>
            This system is built using:
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-white font-semibold">React + TypeScript</p>
              <p className="text-slate-500 text-xs mt-1">Frontend Framework</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-white font-semibold">Tailwind CSS</p>
              <p className="text-slate-500 text-xs mt-1">UI Styling</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-slate-800 pt-4 text-center text-slate-600 text-xs font-mono">
          Developed for Academic Use · © 2024-2028 CSE
        </div>

      </div>
    </div>
  );
}