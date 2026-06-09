export default function Card({ titulo, children }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      {children}
    </div>
  );
}