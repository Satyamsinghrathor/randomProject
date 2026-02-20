import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Semester = "semester1" | "semester2" | "semester3" | "semester4" | "semester5" | "semester6" | "semester7" | "semester8";

const SEMESTER_LABELS: Record<Semester, string> = {
  semester1: "Semester 1",
  semester2: "Semester 2",
  semester3: "Semester 3",
  semester4: "Semester 4",
  semester5: "Semester 5",
  semester6: "Semester 6",
  semester7: "Semester 7",
  semester8: "Semester 8",
};

export default function SearchBar() {
  const [rollNo, setRollNo] = useState("");
  const [semester, setSemester] = useState<Semester | "">("");
  const [focused, setFocused] = useState(false);
  const [semOpen, setSemOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!rollNo.trim() || !semester) return;
    setLoading(true);
    
    setTimeout(() => setLoading(false), 1500);
    navigate(`/student/${rollNo}/${semester}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const isReady = rollNo.trim() && semester && !loading;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 mb-4">
            <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
          </div>
          <h1 className="text-white text-2xl font-bold tracking-tight">CGPA Result Lookup</h1>
          <p className="text-slate-500 text-sm mt-1">Enter your roll number to view your result</p>
        </div>

        {/* Search Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-black/50">

          {/* Roll Number */}
          <label className="block text-slate-400 text-xs uppercase tracking-widest font-mono mb-3">
            Roll Number
          </label>
          <div className={`flex items-center gap-3 bg-slate-800/60 border rounded-xl px-4 py-3 transition-all duration-200 ${
            focused ? "border-sky-500 shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" : "border-slate-700"
          }`}>
            <svg className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${focused ? "text-sky-400" : "text-slate-600"}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. 2401107001"
              maxLength={10}
              className="flex-1 bg-transparent text-white placeholder-slate-600 text-sm font-mono outline-none tracking-wider"
            />
            {rollNo && (
              <button onClick={() => setRollNo("")} className="text-slate-600 hover:text-slate-400 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <p className="text-slate-600 text-[11px] font-mono mt-2 ml-1">
            Format: 2401107001 &nbsp;·&nbsp; e.g. 2401107001
          </p>

          {/* Semester Selector */}
          <label className="block text-slate-400 text-xs uppercase tracking-widest font-mono mt-5 mb-3">
            Semester
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setSemOpen((p) => !p)}
              className={`w-full flex items-center justify-between gap-3 bg-slate-800/60 border rounded-xl px-4 py-3 transition-all duration-200 text-sm font-mono ${
                semOpen ? "border-sky-500 shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" : "border-slate-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <svg className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${semOpen ? "text-sky-400" : "text-slate-600"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className={semester ? "text-white" : "text-slate-600"}>
                  {semester ? SEMESTER_LABELS[semester] : "Select semester"}
                </span>
              </div>
              <svg className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${semOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            {semOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden z-10 shadow-xl shadow-black/40">
                {(Object.keys(SEMESTER_LABELS) as Semester[]).map((sem, i) => (
                  <button
                    key={sem}
                    type="button"
                    onClick={() => { setSemester(sem); setSemOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-mono transition-colors duration-150
                      ${semester === sem ? "bg-sky-500/15 text-sky-400" : "text-slate-300 hover:bg-slate-700/60"}
                      ${i !== 0 ? "border-t border-slate-700/50" : ""}
                    `}
                  >
                    <span>{SEMESTER_LABELS[sem]}</span>
                    {semester === sem && (
                      <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={!isReady}
            className={`mt-6 w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold tracking-wide transition-all duration-200
              ${isReady
                ? "bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 active:scale-[0.98]"
                : "bg-slate-800 text-slate-600 cursor-not-allowed"
              }`}
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                </svg>
                Fetching Result...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                Search Result
              </>
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-slate-700 text-[10px] uppercase tracking-widest">or press Enter</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

        </div>

        {/* Footer */}
        <p className="text-center flex align-middle justify-center items-center text-slate-700 text-xs mt-5 font-mono">
          <label className="text-xl text-red-500">NOTE: </label>
          <label className="text-red-500">
            this is not official result, it might have ,ERROR(s)
          </label>
        </p>

      </div>
    </div>
  );
}