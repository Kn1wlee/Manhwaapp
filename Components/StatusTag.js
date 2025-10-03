export default function StatusTag({ status }) {
  const color = status === "Güncel" ? "#1fa463" : "#888";
  return (
    <span style={{
      background: color,
      color: "#fff",
      borderRadius: 16,
      padding: "2px 10px",
      fontSize: 13,
      marginRight: 6
    }}>{status}</span>
  );
}
