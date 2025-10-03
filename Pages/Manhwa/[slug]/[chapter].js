import { useRouter } from "next/router";

// Örnek: Her bölümde 5 sayfa olduğunu varsayalım
const PAGE_COUNT = 5;

export default function ChapterReader() {
  const router = useRouter();
  const { slug, chapter } = router.query;

  // Örnek sayfa adresleri
  const images = Array.from({ length: PAGE_COUNT }, (_, i) =>
    `/manhwa/${slug}/${chapter}/${i + 1}.jpg`
  );

  return (
    <main style={{ maxWidth: 800, margin: "40px auto" }}>
      <h1>{slug} - {chapter}. Bölüm</h1>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Sayfa ${idx + 1}`}
          style={{ width: "100%", marginBottom: 16, borderRadius: 8 }}
        />
      ))}
    </main>
  );
}
