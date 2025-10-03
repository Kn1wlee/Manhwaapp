import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Giriş özelliği backend ile eklenecek.");
  };

  return (
    <main style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Giriş Yap</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>Giriş</button>
      </form>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </main>
  );
                                     }
