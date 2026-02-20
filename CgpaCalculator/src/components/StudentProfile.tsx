
import { NavLink } from "react-router-dom";
import { semester1, semester2, semester3,semester4,semester5,semester6,semester7,semester8, students } from "../data";
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
  const subjects4 = semester4.find((s) => String(s.rollno) === rollno)?.subjects
  const subjects5 = semester5.find((s) => String(s.rollno) === rollno)?.subjects
  const subjects6 = semester6.find((s) => String(s.rollno) === rollno)?.subjects
  const subjects7 = semester7.find((s) => String(s.rollno) === rollno)?.subjects
  const subjects8 = semester8.find((s) => String(s.rollno) === rollno)?.subjects

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

  
  const totalCredits4 = subjects4 ? subjects4.reduce((s, sub) => s + sub.credits, 0): 0;
  const earnedPoints4 = subjects4 ? subjects4.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
  const cgpa4 = parseFloat((earnedPoints4 / totalCredits4).toFixed(2));
  const { text: cgpaText4 } = getCgpaColor(cgpa4);  

  
  const totalCredits5 = subjects5 ? subjects5.reduce((s, sub) => s + sub.credits, 0): 0;
  const earnedPoints5 = subjects5 ? subjects5.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
  const cgpa5 = parseFloat((earnedPoints5 / totalCredits5).toFixed(2));
  const { text: cgpaText5 } = getCgpaColor(cgpa5);

  
  const totalCredits6 = subjects6 ? subjects6.reduce((s, sub) => s + sub.credits, 0): 0;
  const earnedPoints6 = subjects6 ? subjects6.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
  const cgpa6 = parseFloat((earnedPoints6 / totalCredits6).toFixed(2));
  const { text: cgpaText6 } = getCgpaColor(cgpa6);

  
  const totalCredits7 = subjects7 ? subjects7.reduce((s, sub) => s + sub.credits, 0): 0;
  const earnedPoints7 = subjects7 ? subjects7.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
  const cgpa7 = parseFloat((earnedPoints7 / totalCredits7).toFixed(2));
  const { text: cgpaText7 } = getCgpaColor(cgpa7);

  
  const totalCredits8 = subjects8 ? subjects8.reduce((s, sub) => s + sub.credits, 0): 0;
  const earnedPoints8 = subjects8 ? subjects8.reduce((s, sub) => s + sub.credits * sub.gradePoint, 0): 0;
  const cgpa8 = parseFloat((earnedPoints8 / totalCredits8).toFixed(2));
  const { text: cgpaText8 } = getCgpaColor(cgpa8);


  const subject1lenght = subjects1 ? subjects1.length : 0;
  const subject2lenght = subjects2 ? subjects2.length : 0;
  const subject3lenght = subjects3 ? subjects3.length : 0;
  const subject4lenght = subjects4 ? subjects4.length : 0;
  const subject5lenght = subjects5 ? subjects5.length : 0;
  const subject6lenght = subjects6 ? subjects6.length : 0;
  const subject7lenght = subjects7 ? subjects7.length : 0;
  const subject8lenght = subjects8 ? subjects8.length : 0;

  const totalCredits = totalCredits1 + totalCredits2 + totalCredits3 + totalCredits4 + totalCredits5 + totalCredits6 + totalCredits7 + totalCredits8;
  const earnedPoints = earnedPoints1 + earnedPoints2 + earnedPoints3 + earnedPoints4 + earnedPoints5 + earnedPoints6 + earnedPoints7 + earnedPoints8;
  const cgpa = parseFloat((earnedPoints / totalCredits).toFixed(2));
  const subjectlength = subject1lenght + subject2lenght + subject3lenght + subject4lenght + subject5lenght + subject6lenght + subject7lenght + subject8lenght;
  const { text: cgpaText } = getCgpaColor(cgpa);
    
  
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
     className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

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

  {/* semester 4 */}

  {subjects4 && <NavLink to = {`/student/${rollno}/semester4`}
     className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

    {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 4".toUpperCase()}
      </h2>

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>

    </div>
    <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits4), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints4), suffix: "pts" },
                { label: "Subjects",      value: String(subjects4.length), suffix: "" },
                { label: "CGPA",          value: cgpa4.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText4 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div>

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa4} />

    </NavLink>
}

    {/* semester 5  */}

    {subjects5 && <NavLink to = {`/student/${rollno}/semester5`}
     className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

    {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 5".toUpperCase()}
      </h2>

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>    

    </div>
    <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits5), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints5), suffix: "pts" },
                { label: "Subjects",      value: String(subjects5.length), suffix: "" },
                { label: "CGPA",          value: cgpa5.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText5 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div> 

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa5} />

    </NavLink>
}

    {/* semester 6 */}

    {subjects6 && <NavLink to = {`/student/${rollno}/semester6`}
     className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

    {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 6".toUpperCase()}
      </h2>

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>    

    </div>
    <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits6), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints6), suffix: "pts" },
                { label: "Subjects",      value: String(subjects6.length), suffix: "" },
                { label: "CGPA",          value: cgpa6.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText6 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div> 

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa6} />

    </NavLink>
}

    {/* semester 7 */}

    {subjects7 && <NavLink to = {`/student/${rollno}/semester7`}
     className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

    {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 7".toUpperCase()}
      </h2>

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>    

    </div>
    <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits7), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints7), suffix: "pts" },
                { label: "Subjects",      value: String(subjects7.length), suffix: "" },
                { label: "CGPA",          value: cgpa7.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText7 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div> 

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa7} />

    </NavLink>
} 

    {/* semester 8 */}

    {subjects8 && <NavLink to = {`/student/${rollno}/semester8`}
     className="px-6 py-6 mt-8 border-2 flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-slate-800">

    {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Semester Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"semester 8".toUpperCase()}
      </h2> 

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>    

    </div>
    <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits8), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints8), suffix: "pts" },
                { label: "Subjects",      value: String(subjects8.length), suffix: "" },
                { label: "CGPA",          value: cgpa8.toFixed(2),      suffix: ""    },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-xl font-bold font-mono ${label === "CGPA" ? cgpaText8 : "text-white"}`}>
                    {value}
                    {suffix && <span className="text-xs text-slate-500 font-normal ml-1">{suffix}</span>}
                  </p>
                </div>
              ))}
            </div> 

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa8} />

    </NavLink>
}

    {/* scgpa */}

     <div
     className="px-6 py-6 mt-8 border-2 border-amber-500 flex flex-col sm:flex-row items-center justify-between gap-8 border-b rouonded-md">

    {/* Left Side - Semester Info */}
    <div className="text-center sm:text-left">

      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-3">
        Total Report
      </div>

      <h2 className="text-white text-xl font-bold tracking-tight">
        {"Final".toUpperCase()}
      </h2> 

      <p className="text-slate-500 text-sm mt-1">
        Academic Performance Summary
      </p>    

    </div>
    <div className="flex-1 grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Total Credits", value: String(totalCredits), suffix: "Cr"  },
                { label: "Grade Points",  value: String(earnedPoints), suffix: "pts" },
                { label: "Subjects",      value: String(subjectlength), suffix: "" },
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

    {/* Right Side - CGPA Ring */}
      <CgpaRing cgpa={cgpa} />

    </div>
    

    </>
  )
}

export default StudentProfile