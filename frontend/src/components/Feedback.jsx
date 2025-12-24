export default function Feedback({ score }) {
  let level = "";
  let message = "";

  if (score >= 8) {
    level = "Excellent Performance";
    message = "Excellent performance with strong control over fluency, pronunciation, and grammar.";
  } else if (score >= 6) {
    level = "Good Performance";
    message = "Good performance with minor inaccuracies that do not affect overall communication.";
  } else {
    level = "Needs Improvement";
    message = "Needs improvement. Focus on clarity, sentence structure, and fluency.";
  }

  return (
    <section className="feedback card">
      <h2 className="section-title">Performance Insight</h2>
      <p className="feedback-level">{level}</p>
      <p className="feedback-text">{message}</p>
    </section>
  );
}
