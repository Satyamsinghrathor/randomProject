import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { semester1, semester2, semester3, students } from "../data";
import { useReactToPrint } from "react-to-print";

const gradeStyles: Record<string, string> = {
  "O":  "text-orange-400 bg-orange-400/10 ring-orange-400/30",
  "A+": "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30",
  "A":  "text-green-400  bg-green-400/10  ring-green-400/30",
  "B+": "text-sky-400    bg-sky-400/10    ring-sky-400/30",
  "B":  "text-blue-400   bg-blue-400/10   ring-blue-400/30",
  "C":  "text-yellow-400 bg-yellow-400/10 ring-yellow-400/30",
  "F":  "text-red-400    bg-red-400/10    ring-red-400/30",
};

function getCgpaColor(cgpa: number) {
  if (cgpa >= 9.0) return { glow: "#34d399", text: "text-emerald-400" };
  if (cgpa >= 8.0) return { glow: "#38bdf8", text: "text-sky-400" };
  if (cgpa >= 6.5) return { glow: "#60a5fa", text: "text-blue-400" };
  return { glow: "#facc15", text: "text-yellow-400" };
}

function getClassification(cgpa: number) {
  if (cgpa >= 9.0) return "Outstanding";
  if (cgpa >= 8.0) return "Distinction";
  if (cgpa >= 6.5) return "First Class";
  if (cgpa >= 5.5) return "Second Class";
  return "Pass";
}

function CgpaRing({ cgpa }: { cgpa: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progress = (cgpa / 10) * circumference;
  const { glow, text } = getCgpaColor(cgpa);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-36 h-36 flex items-center justify-center">
        <svg className="absolute inset-0 -rotate-90" width="144" height="144" viewBox="0 0 144 144">
          <circle cx="72" cy="72" r={radius} fill="none" stroke="#1e293b" strokeWidth="10" />
          <circle
            cx="72" cy="72" r={radius}
            fill="none"
            stroke={glow}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            style={{ filter: `drop-shadow(0 0 8px ${glow}99)` }}
          />
        </svg>
        <div className="flex flex-col items-center z-10">
          <span className={`text-3xl font-bold tracking-tight ${text}`}>{cgpa.toFixed(2)}</span>
          <span className="text-slate-500 text-[10px] tracking-widest uppercase">/ 10.00</span>
        </div>
      </div>
      <span className={`text-xs font-semibold tracking-widest uppercase ${text}`}>
        {getClassification(cgpa)}
      </span>
    </div>
  );
}

export default function ResultCard() {
  const { rollno, semester } = useParams<{ rollno: string; semester: string }>();

  // ✅ ref wraps ONLY the printable content (not the button)
  const resultRef = useRef<HTMLDivElement | null>(null);

  const [student, setStudent] = useState<any>(null);
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    if (!rollno) return;

    const foundStudent = students.filter((s) => s.rollNo === rollno);

    let sem;
    if (semester === "semester3") {
      sem = semester3.find((item) => item.rollno === rollno);
    } else if (semester === "semester2") {
      sem = semester2.find((item) => item.rollno === rollno);
    } else if (semester === "semester1") {
      sem = semester1.find((item) => item.rollno === rollno);
    }

    setStudent(foundStudent[0] || null);
    setSubjects(sem?.subjects || []);
  }, [rollno, semester]);

  const totalCredits = subjects.reduce((s, sub) => s + sub.credits, 0);
  const earnedPoints = subjects.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0);
  const cgpa = parseFloat((earnedPoints / totalCredits).toFixed(2));
  const { text: cgpaText } = getCgpaColor(cgpa);

  const handlePrint = useReactToPrint({
    contentRef: resultRef,
    documentTitle: `${student?.rollNo}_${semester}`,
    // ✅ inject print styles so dark background colors render in print
    pageStyle: `
      @media print {
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      }
    `,
  });

  if (!student) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">

        {/* ✅ Print button OUTSIDE the ref — won't appear in print */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-full px-4 py-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-xs tracking-[0.2em] uppercase font-mono">Result Published</span>
          </div>
          <h1 className="text-white text-xl font-bold tracking-tight">Academic Performance Report</h1>
          <p className="text-slate-500 text-sm mt-1">{student.department}</p>

          <button
            onClick={() => handlePrint()}
            className="mt-4 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 shadow-lg shadow-emerald-500/20"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download PDF
          </button>
        </div>

        {/* ✅ resultRef wraps the FULL card — this is what gets printed */}
        <div ref={resultRef} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">

          {/* Student Info */}
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/40 border-b border-slate-800 px-6 py-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">Student Name</p>
                <h2 className="text-white text-lg font-bold">{student.name}</h2>
                <div className="flex flex-wrap gap-4 mt-2">
                  {[
                    { label: "Roll No", value: student.rollNo },
                    { label: "Sem",     value: semester },
                    { label: "Year",    value: student.year },
                  ].map(({ label, value }) => (
                    <span key={label} className="flex items-center gap-1.5 text-xs">
                      <span className="text-slate-500">{label}:</span>
                      <span className="font-mono text-white">{value}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-7 0h14" />
                </svg>
              </div>
            </div>
          </div>

          {/* CGPA Ring + Stats */}
          <div className="px-6 py-6 flex flex-col sm:flex-row items-center gap-8 border-b border-slate-800">
            <CgpaRing cgpa={cgpa} />
            <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints), suffix: "pts" },
                { label: "Subjects",      value: String(subjects.length), suffix: "" },
                { label: "CGPA",          value: cgpa.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects Table */}
          <div className="px-6 py-5">
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-4">Subject Breakdown</p>
            <div className="grid grid-cols-12 gap-2 px-3 mb-2">
              {["Code", "Subject", "Credits", "Pts", "Grade"].map((h, i) => (
                <span
                  key={h}
                  className={`text-[10px] text-slate-600 uppercase tracking-wider ${
                    i === 0 ? "col-span-2" :
                    i === 1 ? "col-span-5" :
                    i === 2 ? "col-span-2 text-center" :
                    i === 3 ? "col-span-1 text-center" :
                              "col-span-2 text-center"
                  }`}
                >{h}</span>
              ))}
            </div>
            <div className="space-y-2">
              {subjects.map((sub) => (
                <div
                  key={sub.code}
                  className="grid grid-cols-12 gap-2 items-center bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl px-3 py-3 transition-all duration-150"
                >
                  <span className="col-span-2 text-slate-500 text-xs font-mono">{sub.code}</span>
                  <span className="col-span-5 text-slate-300 text-xs leading-tight">{sub.name}</span>
                  <span className="col-span-2 text-slate-400 text-xs font-mono text-center">{sub.credits}</span>
                  <span className="col-span-1 text-slate-400 text-xs font-mono text-center">{sub.gradePoint}</span>
                  <div className="col-span-2 flex justify-center">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ring-1 font-mono ${gradeStyles[sub.grade] ?? gradeStyles["B"]}`}>
                      {sub.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-800 px-6 py-4 flex items-center justify-between bg-slate-800/20">
            <p className="text-slate-600 text-[10px] font-mono">
              Generated: {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-slate-600 text-[10px] uppercase tracking-widest">Final CGPA</span>
              <span className={`text-sm font-bold font-mono ${cgpaText}`}>{cgpa.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}