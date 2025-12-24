import { useEffect, useState } from "react";
import ScoreCard from "./components/ScoreCard";
import SkillBar from "./components/SkillBar";
import Feedback from "./components/Feedback";
import SkillBarChart from "./components/SkillBarChart";
import { BASE_URL } from "../constants";

export default function App() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/report`)
      .then((res) => res.json())
      .then((data) => setReport(data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading report...</p>;
  if (!report) return <p>Report not found</p>;

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1>Speaking Assessment Report</h1>
          <p className="subtitle">Student: {report.name}</p>
        </header>

        <ScoreCard score={report.overallScore} />

        {/* SUMMARY SECTION */}
        <section className="card">
          <h2 className="section-title">Summary of Scores</h2>

          <div className="summary-layout">
            {/* LEFT: GRAPH */}
            <div className="summary-left">
              <SkillBarChart skills={report.skills} />
            </div>

            {/* RIGHT: SKILL BARS */}
            <div className="summary-right">
              {Object.entries(report.skills).map(([skill, score]) => (
                <SkillBar key={skill} skill={skill} score={score} />
              ))}
            </div>
          </div>
        </section>

        <Feedback score={report.overallScore} />
      </div>
    </div>
  );
}
