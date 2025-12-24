import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SkillBarChart({ skills }) {
  const data = Object.entries(skills).map(([key, value]) => ({
    skill: key.charAt(0).toUpperCase() + key.slice(1),
    score: value
  }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="skill" />
        <YAxis domain={[0, 9]} />
        <Tooltip />
        <Bar dataKey="score" fill="#2563eb" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
