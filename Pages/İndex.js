import Link from "next/link";
import Image from "next/image";

// Örnek manhwa listesi (backend ile dinamik olacak)
const exampleManhwa = [
  {
    slug: "example",
    title: "Örnek Manhwa",
    cover: "/covers/example.jpg",
    status: "Güncel",
  },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Manhwa Yayın Platformu</h1>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {exampleManhwa.map((m) => (
          <div key={m.slug} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 20, width: 250 }}>
            <Image src={m.cover} width={210} height={300} alt={m.title} style={{ borderRadius: 8 }} />
            <h2>{m.title}</h2>
            <span style={{
              background: m.status === "Güncel" ? "#1fa463" : "#aaa",
              color: "#fff",
              borderRadius: 16,
              padding: "2px 10px",
              fontSize: 13,
              marginRight: 6
            }}>{m.status}</span>
            <br />
            <Link href={`/manhwa/${m.slug}`} style={{ color: "#0070f3" }}>Oku</Link>
          </div>
        ))}
      </div>
    </main>
  );
                           }
