import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo / Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
            <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-7 0h14" />
            </svg>
          </div>
          <div>
            <h1 className="text-white font-bold tracking-tight text-sm">
              CGPA Portal
            </h1>
            <p className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
              Academic Dashboard
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-mono transition-all duration-200 ${
                isActive
                  ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/student"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-mono transition-all duration-200 ${
                isActive
                  ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`
            }
          >
            Student
          </NavLink>

        </nav>
      </div>
    </header>
  );
}