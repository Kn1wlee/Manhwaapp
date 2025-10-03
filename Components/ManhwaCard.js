import Link from "next/link";
import Image from "next/image";

export default function ManhwaCard({ manhwa }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 20, width: 250 }}>
      <Image src={manhwa.cover} width={210} height={300} alt={manhwa.title} style={{ borderRadius: 8 }} />
      <h2>{manhwa.title}</h2>
      <span style={{
        background: manhwa.status === "Güncel" ? "#1fa463" : "#aaa",
        color: "#fff",
        borderRadius: 16,
        padding: "2px 10px",
        fontSize: 13,
        marginRight: 6
      }}>{manhwa.status}</span>
      <br />
      <Link href={`/manhwa/${manhwa.slug}`} style={{ color: "#0070f3" }}>Oku</Link>
    </div>
  );
}
