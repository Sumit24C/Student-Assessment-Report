import SkillBarChart from "./SkillBarChart";

export default function SkillOverview({ skills }) {
  return (
    <section className="card">
      <h2 className="section-title">Summary of Scores</h2>

      <div className="summary-layout">
        {/* LEFT: Graph */}
        <div className="summary-left">
          <SkillBarChart skills={skills} />
        </div>

      </div>
    </section>
  );
}
