export default function ScoreCard({ score }) {
  return (
    <section className="score-card">
      <p className="label">Overall Band Score</p>
      <div className="score-circle">
        <span className="score">{score}</span>
        <span className="out-of">/ 9</span>
      </div>
    </section>
  );
}
