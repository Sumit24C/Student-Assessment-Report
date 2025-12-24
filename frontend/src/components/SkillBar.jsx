export default function SkillBar({ skill, score }) {
  const percentage = (score / 9) * 100;

  return (
    <div className="skill">
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-score">{score}/9</span>
      </div>

      <div className="bar">
        <div className="fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
