
import { NavLink } from "react-router-dom";
import { semester1, semester2, semester3, students } from "../data";
import { useParams } from "react-router-dom";
import { CgpaRing } from './ResultCard';


// const subjects = [
//       { code: "MAUC101", name: "Mathematics I", credits: 4, grade: "F", gradePoint: 0 },
//       { code: "HSUA101", name: "English for Communication", credits: 2, grade: "B+", gradePoint: 7 },
//       { code: "CYUC101", name: "Chemistry", credits: 3, grade: "F", gradePoint: 0 },
//       { code: "CSUC101", name: "Programming for Problem Solving", credits: 2, grade: "B+", gradePoint: 7 },
//       { code: "CSUC103", name: "Fundamentals of Computer Organization", credits: 4, grade: "B", gradePoint: 6 },
//       { code: "CYUC102", name: "Chemistry Laboratory", credits: 1, grade: "B+", gradePoint: 7 },
//       { code: "CSUC102", name: "Computer Programming Laboratory", credits: 1, grade: "B+", gradePoint: 7 },
//       { code: "GEUS102", name: "Basic Engineering Skills Laboratory - II", credits: 3, grade: "A+", gradePoint: 9 },
//       { code: "GEUV102", name: "Essence of Indian Traditional Knowledge", credits: 1, grade: "A", gradePoint: 8 },
//     ]
// const subjects2 = [
//       { code: "MAUC101", name: "Mathematics I", credits: 4, grade: "F", gradePoint: 10 },
//       { code: "HSUA101", name: "English for Communication", credits: 2, grade: "B+", gradePoint: 7 },
//       { code: "CYUC101", name: "Chemistry", credits: 3, grade: "F", gradePoint: 10 },
//       { code: "CSUC101", name: "Programming for Problem Solving", credits: 2, grade: "B+", gradePoint: 7 },
//       { code: "CSUC103", name: "Fundamentals of Computer Organization", credits: 4, grade: "B", gradePoint: 6 },
//       { code: "CYUC102", name: "Chemistry Laboratory", credits: 1, grade: "B+", gradePoint: 7 },
//       { code: "CSUC102", name: "Computer Programming Laboratory", credits: 1, grade: "B+", gradePoint: 7 },
//       { code: "GEUS102", name: "Basic Engineering Skills Laboratory - II", credits: 3, grade: "A+", gradePoint: 9 },
//       { code: "GEUV102", name: "Essence of Indian Traditional Knowledge", credits: 1, grade: "A", gradePoint: 8 },
//     ]
// const subjects3 = [
//       { code: "MAUC101", name: "Mathematics I", credits: 4, grade: "F", gradePoint: 8 },
//       { code: "HSUA101", name: "English for Communication", credits: 2, grade: "B+", gradePoint: 7 },
//       { code: "CYUC101", name: "Chemistry", credits: 3, grade: "F", gradePoint: 0 },
//       { code: "CSUC101", name: "Programming for Problem Solving", credits: 2, grade: "B+", gradePoint: 7 },
//       { code: "CSUC103", name: "Fundamentals of Computer Organization", credits: 4, grade: "B", gradePoint: 6 },
//       { code: "CYUC102", name: "Chemistry Laboratory", credits: 1, grade: "B+", gradePoint: 8 },
//       { code: "CSUC102", name: "Computer Programming Laboratory", credits: 1, grade: "B+", gradePoint: 10 },
//       { code: "GEUS102", name: "Basic Engineering Skills Laboratory - II", credits: 3, grade: "A+", gradePoint: 10 },
//       { code: "GEUV102", name: "Essence of Indian Traditional Knowledge", credits: 1, grade: "A", gradePoint: 10 },
//     ]


// function getClassification(cgpa: number) {
//   if (cgpa >= 9.0) return "Outstanding";
//   if (cgpa >= 8.0) return "Distinction";
//   if (cgpa >= 6.5) return "First Class";
//   if (cgpa >= 5.5) return "Second Class";
//   return "Pass";
// }

// const student = {
//     rollNo: "2301107002",
//     name: "ADITHYAN K (Repeater) ",
//     department: "Computer Science  and Engineering ",
//     year: "2024-2028"
//   }

function getCgpaColor(cgpa: number) {
  if (cgpa >= 9.0) return { glow: "#34d399", text: "text-emerald-400" };
  if (cgpa >= 8.0) return { glow: "#38bdf8", text: "text-sky-400" };
  if (cgpa >= 6.5) return { glow: "#60a5fa", text: "text-blue-400" };
  return { glow: "#facc15", text: "text-yellow-400" };
}

function StudentProfile() {
  const { rollno } = useParams<{rollno: string}>();
  // const [student, setStudent] = useState<any>(null);
  
  // console.log("🚀 ~ StudentProfile ~ rollNo:", rollno)

  
  const student = students.find((s) => String(s.rollNo) === String(rollno))
  // console.log("🚀 ~ StudentProfile ~ foundStudent:", student)
  

  const subjects1 = semester1.find((s) => String(s.rollno) === rollno)?.subjects
  const subjects2 = semester2.find((s) => String(s.rollno) === rollno)?.subjects
  const subjects3 = semester3.find((s) => String(s.rollno) === rollno)?.subjects
  // console.log("🚀 ~ StudentProfile ~ subjects3find:", subjects3)
 
  // console.log("🚀 ~ StudentProfile ~ subjects1:", subjects1)
  
  // const student = studentarr[0]

  const totalCredits1 = subjects1 ? subjects1.reduce((s, sub) => s + sub.credits, 0): 0;
  const earnedPoints1 = subjects1 ? subjects1.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
  const cgpa1 = parseFloat((earnedPoints1 / totalCredits1).toFixed(2));

  const { text: cgpaText1 } = getCgpaColor(cgpa1);

  const totalCredits2 = subjects2 ? subjects2.reduce((s, sub) => s + sub.credits, 0): 0;
  const earnedPoints2 = subjects2 ? subjects2.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
  const cgpa2 = parseFloat((earnedPoints2 / totalCredits2).toFixed(2));
  const { text: cgpaText2 } = getCgpaColor(cgpa2);

  
    const totalCredits3 = subjects3 ? subjects3.reduce((s, sub) => s + sub.credits, 0): 0;
    const earnedPoints3 = subjects3 ? subjects3.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
    const cgpa3 = parseFloat((earnedPoints3 / totalCredits3).toFixed(2));
    const { text: cgpaText3 } = getCgpaColor(cgpa3);
    
  
  return (
    <>

    {/* this is student prfile */}
    <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/40 border-b border-slate-800 px-6 py-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">Student Name</p>
                  <h2 className="text-white text-lg font-bold">{student? student.name: null}</h2>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {[
                      { label: "Roll No", value: student ? student.rollNo : null},
      
                      { label: "Year",    value: student ? student.year : null },
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

    {/* student semester wise result */}

    {/* semester 1 */}
    {subjects1 && <NavLink to = {`/student/${rollno}/semester1`}
    className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

  {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 1".toUpperCase()}
      </h2>

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>

    </div>

    {/* Right Side - CGPA Ring */}

      <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits1), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints1), suffix: "pts" },
                { label: "Subjects",      value: String(subjects1.length), suffix: "" },
                { label: "CGPA",          value: cgpa1.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText1 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div>
      <CgpaRing cgpa={cgpa1} />

    </NavLink>}

    {/* semester 2 */}
    {subjects2 && <NavLink to = {`/student/${rollno}/semester2`}
    className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

  {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 2".toUpperCase()}
      </h2>

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>

    </div>

    <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits2), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints2), suffix: "pts" },
                { label: "Subjects",      value: String(subjects2.length), suffix: "" },
                { label: "CGPA",          value: cgpa2.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText2 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div>

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa2} />

    </NavLink>}

    {/* semster 3 */}
    {subjects3 && <NavLink to = {`/student/${rollno}/semester3`}
     className="px-6 py-6 mt-8 border-2flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

    {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 3".toUpperCase()}
      </h2>

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>

    </div>
<div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits3), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints3), suffix: "pts" },
                { label: "Subjects",      value: String(subjects3.length), suffix: "" },
                { label: "CGPA",          value: cgpa3.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText3 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div>

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa3} />

    </NavLink>
}
    

    </>
  )
}

export default StudentProfile