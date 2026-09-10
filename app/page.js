"use client";

import { useState } from "react";
import data from "./data.json";

export default function Home() {
  const [menyApen, setMenyApen] = useState(false);
  const [kortApent, setKortApent] = useState(false);
  var aar = 2026;

  const navLenker = [
    { tekst: "Hjem", href: "#hero" },
    { tekst: "Når & hvor", href: "#nar-og-hvor" },
    { tekst: "Påmelding", href: "#pamelding" },
    { tekst: "Bar", href: "#bar" },
    { tekst: "Kontakt", href: "/kontakt" },
  ];

  return (
    <div className="side">
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        .side {
          font-family: -apple-system, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
          color: #0b3d3f;
          background: linear-gradient(180deg, #eef7f4 0%, #dff3f1 30%, #d3ecec 60%, #f4e9d0 100%);
          min-height: 100vh;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background: rgba(9, 76, 92, 0.92);
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .navbar .logo {
          color: #fdf6e3;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.5px;
        }
        .hamburger {
          width: 34px;
          height: 34px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
        }
        .hamburger span {
          display: block;
          height: 3px;
          border-radius: 2px;
          background: #fdf6e3;
        }
        .nav-dropdown {
          position: absolute;
          top: 62px;
          right: 24px;
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
          padding: 10px;
          display: flex;
          flex-direction: column;
          min-width: 200px;
          overflow: hidden;
          animation: slidedown 0.18s ease-out;
        }
        @keyframes slidedown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-dropdown a {
          color: #0b3d3f;
          text-decoration: none;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 10px;
        }
        .nav-dropdown a:hover {
          background: #e3f6f4;
        }

        .hero {
          text-align: center;
          padding: 70px 20px 50px;
        }
        .hero h1 {
          font-size: clamp(36px, 6vw, 64px);
          margin: 0;
          color: #08505f;
          text-shadow: 0 2px 0 rgba(255,255,255,0.5);
        }
        .hero .tagline {
          font-size: 20px;
          color: #0b6b74;
          margin-top: 10px;
        }
        .badge {
          display: inline-block;
          margin-top: 18px;
          padding: 8px 18px;
          background: linear-gradient(90deg, #ff9d6c, #ff7e5f);
          color: #fff;
          border-radius: 999px;
          font-weight: 700;
          box-shadow: 0 6px 16px rgba(255, 126, 95, 0.35);
        }

        .wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px 60px;
        }

        .card {
          background: rgba(255,255,255,0.75);
          border-radius: 20px;
          padding: 28px 30px;
          margin-bottom: 26px;
          box-shadow: 0 10px 30px rgba(9, 76, 92, 0.12);
        }
        .card h2 {
          margin-top: 0;
          color: #08505f;
        }

        .event-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 16px;
        }
        .event-pill {
          flex: 1 1 160px;
          background: linear-gradient(135deg, #67e8f9, #22b8c9);
          color: #04333c;
          border-radius: 16px;
          padding: 16px;
          font-weight: 600;
          box-shadow: 0 6px 16px rgba(34, 184, 201, 0.35);
        }
        .event-pill .label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.75;
          margin-bottom: 4px;
        }

        .cta {
          display: inline-block;
          margin-top: 18px;
          padding: 14px 30px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(90deg, #0891b2, #06b6d4);
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(8, 145, 178, 0.4);
        }
        .cta:hover { filter: brightness(1.05); }

        .form-grid {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 12px 16px;
          align-items: center;
          margin-top: 16px;
        }
        .form-grid input[type="text"] {
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #bfe3e0;
          font-size: 15px;
        }

        .vip-card {
          margin-top: 20px;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 1.6 / 1;
          border-radius: 20px;
          padding: 24px;
          background: linear-gradient(135deg, #0b3d3f, #0891b2 45%, #ffd39b 110%);
          color: #fdf6e3;
          box-shadow: 0 16px 40px rgba(0,0,0,0.35), inset 0 0 60px rgba(255,255,255,0.08);
          position: relative;
          overflow: hidden;
        }
        .vip-card::after {
          content: "";
          position: absolute;
          top: -60%;
          left: -20%;
          width: 60%;
          height: 220%;
          background: rgba(255,255,255,0.15);
          transform: rotate(20deg);
        }
        .vip-card .vip-label {
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 12px;
          opacity: 0.85;
        }
        .vip-card .vip-title {
          font-size: 26px;
          font-weight: 800;
          margin: 10px 0;
        }

        .drink-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
          margin-top: 16px;
        }
        .drink {
          background: linear-gradient(160deg, #ffffff, #eafcfb);
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 6px 18px rgba(9, 76, 92, 0.1);
          border: 1px solid #d7f1ef;
        }
        .drink .navn {
          font-weight: 700;
          color: #08505f;
          font-size: 16px;
        }
        .drink .innhold {
          color: #0b6b74;
          font-size: 14px;
          margin-top: 4px;
        }
        .umbrella-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding: 10px 16px;
          background: #fff3d6;
          border-radius: 999px;
          font-weight: 600;
          color: #7a5b12;
        }

        .nyheter-liten {
          text-align: center;
          font-size: 13px;
          color: #5c7d7f;
          margin: 30px 0;
        }
        .nyheter-liten summary {
          cursor: pointer;
          font-weight: 600;
        }

        footer {
          text-align: center;
          padding: 30px 20px 50px;
          color: #0b3d3f;
          font-size: 13px;
        }
        footer a { color: #0891b2; }
      `}</style>

      <nav className="navbar">
        <span className="logo">{data.tittel}</span>
        <button
          className="hamburger"
          aria-label="Åpne meny"
          onClick={() => setMenyApen(!menyApen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menyApen && (
          <div className="nav-dropdown">
            {navLenker.map((l, i) => (
              <a key={i} href={l.href} onClick={() => setMenyApen(false)}>
                {l.tekst}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="hero" id="hero">
        <h1>{data.tittel}</h1>
        <p className="tagline">{data.banner}</p>
        {data.alarm && <span className="badge">{data.alarm}</span>}
      </section>

      <div className="wrap">
        <div className="card" id="nar-og-hvor">
          <h2>Når og hvor</h2>
          <div className="event-grid">
            <div className="event-pill">
              <span className="label">Tid</span>
              {data.tid}
            </div>
            <div className="event-pill">
              <span className="label">Sted</span>
              {data.sted}
            </div>
            <div className="event-pill">
              <span className="label">Dresscode</span>
              {data.dresscode}
            </div>
          </div>
          <p style={{ marginTop: 18 }}>
            Arrangert av {data.linjeforening} &nbsp;·&nbsp; {data.antallAbakulere} abakulere på plass
          </p>
        </div>

        <div className="card" id="pamelding">
          <h2>Meld deg på</h2>
          <p>Sikre plassen din på stranda – det tar under et minutt.</p>
          <div className="form-grid">
            <label htmlFor="navn-felt">Navn</label>
            <input type="text" id="navn-felt" />
            <label htmlFor="epost-felt">Epost</label>
            <input type="text" id="epost-felt" />
            <label htmlFor="allergi-felt">Allergier</label>
            <input type="text" id="allergi-felt" />
            <label htmlFor="kommer-felt">Kommer du?</label>
            <input type="checkbox" id="kommer-felt" />
          </div>
          <button className="cta">Send påmelding</button>
        </div>

        <div className="card">
          <h2>VIP-invitasjonskort</h2>
          <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
          <button className="cta" onClick={() => setKortApent(!kortApent)}>
            {kortApent ? "Skjul kortet" : "Se kortet"}
          </button>
          {kortApent && (
            <div className="vip-card">
              <span className="vip-label">Bekk Beach Club · VIP</span>
              <div className="vip-title">{data.tittel}</div>
              <div>{data.tid}</div>
              <div>{data.sted}</div>
            </div>
          )}
        </div>

        <div className="card" id="bar">
          <h2>Tiki-baren</h2>
          <p>{data.barNotis}</p>
          <div className="drink-grid">
            {data.drinker.map((d, i) => (
              <div className="drink" key={i}>
                <div className="navn">{d.navn}</div>
                <div className="innhold">{d.innhold}</div>
              </div>
            ))}
          </div>
          <span className="umbrella-note">🏖️ Alle drinker serveres med paraply</span>
        </div>

        <div className="card">
          <h2>Volleyball</h2>
          <p>{data.volleyballTekst}</p>
        </div>

        <div className="card">
          <h2>Blomsterkranser</h2>
          <p>{data.kransTekst}</p>
          <img src={data.bilder.krans} style={{ borderRadius: 16, maxWidth: "100%" }} />
        </div>

        <details className="nyheter-liten">
          <summary>Nyheter</summary>
          <p>
            <strong>{data.nyhetTittel}</strong>
            <br />
            {data.nyhetTekst}
          </p>
        </details>
      </div>

      <footer>
        Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;
        <a href="/kontakt"> kontakt oss</a> for spørsmål
        <br />
        Du er besøkende nummer {data.besokende}
      </footer>
    </div>
  );
}
