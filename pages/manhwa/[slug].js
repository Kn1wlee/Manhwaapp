import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Örnek veri (ileride backend'den gelecek)
const chapters = [
  { number: 1, title: "1. Bölüm" },
  { number: 2, title: "2. Bölüm" }
];

export default function ManhwaDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Örnek kapak
  const cover = `/covers/${slug}.jpg` || "/covers/example.jpg";
  const title = (slug || "Manhwa").replace("-", " ");

  return (
    <main style={{ maxWidth: 700, margin: "40px auto" }}>
      <h1>{title}</h1>
      <Image src={cover} width={300} height={420} alt={title} style={{ borderRadius: 8 }} />
      <h2>Bölümler</h2>
      <ul>
        {chapters.map((ch) => (
          <li key={ch.number} style={{ marginBottom: 8 }}>
            <Link href={`/manhwa/${slug}/${ch.number}`}>{ch.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
