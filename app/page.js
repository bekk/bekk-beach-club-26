"use client";

import { useState } from "react";
import data from "./data.json";

export default function Home() {
  const [tema, setTema] = useState("light");
  var aar = 2026;

  const heroBilde =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="wrapper" data-theme={tema}>
      <nav className="navbar">
        <span className="brand">{data.tittel}</span>
        <div className="navLinks">
          {data.meny.map((m, i) => (
            <a
              key={i}
              href={m === "bar" ? "/bar" : m === "kontakt" ? "/kontakt" : "#"}
            >
              {m}
            </a>
          ))}
          <button
            className="temaKnapp"
            onClick={() => setTema(tema === "light" ? "dark" : "light")}
            aria-label="Bytt mellom lyst og mørkt tema"
          >
            {tema === "light" ? "🌙" : "☀️"}
          </button>
          <a href="#pamelding" className="ctaKnapp">
            Book bord
          </a>
        </div>
      </nav>

      <header className="hero" style={{ backgroundImage: `url(${heroBilde})` }}>
        <div className="heroOverlay" />
        <div className="heroInnhold">
          <span className="heroBanner">{data.banner}</span>
          <h1>{data.tittel}</h1>
          <p className="heroAlarm">{data.alarm}</p>
          <p className="heroSub">{data.bandHint}</p>
          <a href="#pamelding" className="ctaKnapp stor">
            Meld deg på
          </a>
        </div>
      </header>

      <main>
        <section className="boks fremhevet">
          <h3 className="kicker">Når og hvor</h3>
          <h2>Hver dag</h2>
          <p>
            Tid: {data.tid} &nbsp;·&nbsp; Sted: {data.sted} &nbsp;·&nbsp;{" "}
            {data.antallAbakulere} abakulere
          </p>
          <p>Linjeforening: {data.linjeforening}</p>
          <p>{data.dresscode}</p>
        </section>

        <div className="grid">
          <section className="boks">
            <h4 className="kicker">Nyheter</h4>
            <h3>{data.nyhetTittel}</h3>
            <p>{data.nyhetTekst}</p>
          </section>

          <section className="boks">
            <h4 className="kicker">VIP-invitasjon</h4>
            <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
            <button className="knapp" onClick={() => alert("kommer snart")}>
              Se kortet
            </button>
          </section>

          <section className="boks">
            <h4 className="kicker">Tiki bar</h4>
            <span className="liten">{data.barNotis}</span>
            <table>
              <tbody>
                {data.drinker.map((d, i) => (
                  <tr key={i}>
                    <td>{d.navn}</td>
                    <td>{d.innhold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="liten">alle drinker serveres med paraply</span>
          </section>

          <section className="boks">
            <h4 className="kicker">Volleyball</h4>
            <p>{data.volleyballTekst}</p>
          </section>

          <section className="boks">
            <h4 className="kicker">Blomsterkranser</h4>
            <p>{data.kransTekst}</p>
            <img className="bilde" src={data.bilder.krans} alt="Blomsterkrans" />
          </section>

          <section className="boks">
            <img className="bilde" src={data.bilder.palme} alt="Palme" />
          </section>
        </div>

        <section id="pamelding" className="boks fremhevet">
          <h4 className="kicker">Meld deg på</h4>
          <div className="skjema">
            <label>
              Navn
              <input type="text" />
            </label>
            <label>
              Epost
              <input type="text" />
            </label>
            <label>
              Allergier
              <input type="text" />
            </label>
            <label className="checkboxRad">
              <input type="checkbox" /> Jeg kommer
            </label>
          </div>
          <button className="knapp stor">Send</button>
        </section>
      </main>

      <footer>
        <img className="bygging" src={data.bilder.bygging} alt="Bekk Beach Club" />
        <p className="liten">
          Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;{" "}
          <a href="#">klikk her</a> for spørsmål
          <br />
          Du er besøkende nummer {data.besokende}
        </p>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
      `}</style>

      <style jsx>{`
        .wrapper {
          --bg: #faf7f2;
          --bg-alt: #ffffff;
          --tekst: #2b2b2b;
          --tekst-dempet: #6b6b6b;
          --aksent: #c9a15a;
          --aksent-tekst: #1f2a2e;
          --kant: #e7e0d4;
          --skygge: 0 10px 30px rgba(0, 0, 0, 0.06);
          font-family: "Inter", -apple-system, sans-serif;
          background: var(--bg);
          color: var(--tekst);
          min-height: 100vh;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .wrapper[data-theme="dark"] {
          --bg: #14181a;
          --bg-alt: #1c2224;
          --tekst: #f1efe9;
          --tekst-dempet: #a8a8a8;
          --aksent: #d9b876;
          --aksent-tekst: #14181a;
          --kant: #2a3235;
          --skygge: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: var(--bg-alt);
          border-bottom: 1px solid var(--kant);
          backdrop-filter: blur(8px);
        }

        .brand {
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.02em;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .navLinks a {
          color: var(--tekst);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .navLinks a:hover {
          color: var(--aksent);
        }

        .temaKnapp {
          border: 1px solid var(--kant);
          background: transparent;
          border-radius: 999px;
          width: 2.2rem;
          height: 2.2rem;
          cursor: pointer;
          font-size: 1rem;
        }

        .ctaKnapp {
          background: var(--aksent);
          color: var(--aksent-tekst);
          padding: 0.6rem 1.3rem;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ctaKnapp:hover {
          transform: translateY(-2px);
          box-shadow: var(--skygge);
        }

        .ctaKnapp.stor {
          padding: 0.9rem 2rem;
          font-size: 1.05rem;
        }

        .hero {
          position: relative;
          height: 80vh;
          min-height: 480px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(20, 24, 26, 0.45) 0%,
            rgba(20, 24, 26, 0.65) 100%
          );
        }

        .heroInnhold {
          position: relative;
          z-index: 1;
          color: #fff;
          max-width: 640px;
          padding: 0 1.5rem;
          animation: fadeInOpp 0.9s ease both;
        }

        .heroBanner {
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          opacity: 0.85;
        }

        .heroInnhold h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin: 0.5rem 0;
        }

        .heroAlarm {
          font-weight: 600;
          margin: 0.25rem 0 0.75rem;
        }

        .heroSub {
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1.75rem;
        }

        @keyframes fadeInOpp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .boks {
          background: var(--bg-alt);
          border: 1px solid var(--kant);
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: var(--skygge);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .boks:hover {
          transform: translateY(-3px);
        }

        .boks.fremhevet {
          margin-top: -4.5rem;
          position: relative;
          z-index: 2;
        }

        .kicker {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          color: var(--aksent);
          margin-bottom: 0.5rem;
        }

        p {
          color: var(--tekst-dempet);
          line-height: 1.6;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 0.75rem 0;
        }

        td {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--kant);
          color: var(--tekst);
        }

        .liten {
          font-size: 0.8rem;
          color: var(--tekst-dempet);
        }

        .bilde {
          width: 100%;
          border-radius: 12px;
          margin-top: 0.75rem;
          object-fit: cover;
        }

        .knapp {
          background: var(--aksent);
          color: var(--aksent-tekst);
          border: none;
          padding: 0.7rem 1.4rem;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 0.75rem;
          transition: transform 0.2s ease;
        }

        .knapp:hover {
          transform: translateY(-2px);
        }

        .knapp.stor {
          padding: 0.9rem 2rem;
          font-size: 1.05rem;
        }

        .skjema {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }

        .skjema label {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--tekst-dempet);
        }

        .skjema input[type="text"] {
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          border: 1px solid var(--kant);
          background: var(--bg);
          color: var(--tekst);
          font-family: inherit;
        }

        .checkboxRad {
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
        }

        footer {
          text-align: center;
          padding: 2.5rem 1.5rem;
          border-top: 1px solid var(--kant);
        }

        .bygging {
          max-width: 320px;
          width: 100%;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        @media (max-width: 640px) {
          .navbar {
            flex-direction: column;
            gap: 0.75rem;
          }

          .boks.fremhevet {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
