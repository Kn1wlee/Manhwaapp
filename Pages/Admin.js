import { useState } from "react";

export default function AdminPanel() {
  // Sadece admin erişimi olmalı (gerçek koruma backend ile sağlanacak)
  const [msg, setMsg] = useState("");

  const handleManhwaAdd = (e) => {
    e.preventDefault();
    setMsg("Manhwa ekleme özelliği backend ile eklenecek.");
  };

  return (
    <main style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Admin Paneli</h1>
      <form onSubmit={handleManhwaAdd} style={{ marginBottom: 24 }}>
        <input
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
          type="text"
          placeholder="Manhwa Başlığı"
          required
        />
        <input
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
          type="text"
          placeholder="Manhwa Slug (ör: solo-leveling)"
          required
        />
        <input
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
          type="text"
          placeholder="Kapak Görseli URL"
          required
        />
        <select style={{ width: "100%", padding: 8, marginBottom: 8 }}>
          <option value="Güncel">Güncel</option>
          <option value="Final">Final</option>
        </select>
        <button type="submit" style={{ width: "100%", padding: 10 }}>Manhwa Ekle</button>
      </form>
      {msg && <p style={{ color: "blue" }}>{msg}</p>}
    </main>
  );
}
