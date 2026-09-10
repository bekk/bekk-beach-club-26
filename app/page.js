"use client";

import { useState } from "react";
import data from "./data.json";

export default function Home() {
  const [apen, setApen] = useState(false);
  var aar = 2026;

  // TODO: fikse dette senere, rakk det ikke
  // const [navn, setNavn] = useState("")
  // function sendSkjema() {
  //   fetch("/api/paamelding", { method: "POST", body: navn })
  // }

  return (
    <div className="side">
      <header className="hero">
        <div className="hero-inner">
          <p className="banner">{data.banner}</p>
          <h1 className="tittel">{data.tittel}</h1>
          <p className="alarm">{data.alarm}</p>
          <p className="hint">{data.bandHint}</p>
        </div>
        <div className="bolge" aria-hidden="true" />
      </header>

      <div className="layout">
        <nav className="meny">
          <span className="meny-tittel">Meny</span>
          <ul>
            {data.meny.map((m, i) => (
              <li key={i}>
                <a href={m == "bar" ? "/bar" : m == "kontakt" ? "/kontakt" : "#"}>{m}</a>
              </li>
            ))}
          </ul>
          <div className="palme-wrap">
            <img src={data.bilder.palme} width="150" height="200" alt="palme" />
            <span className="liten">palme</span>
          </div>
        </nav>

        <main className="innhold">
          <section className="boks stor">
            <h3 className="eyebrow">Når og hvor</h3>
            <h2>Hver dag</h2>
            <p>
              Tid: <strong>{data.tid}</strong> &nbsp;·&nbsp; Sted: <strong>{data.sted}</strong>
              &nbsp;·&nbsp; {data.antallAbakulere} abakulere
            </p>
            <p>Linjeforening: {data.linjeforening}</p>
            <p className="dresscode">{data.dresscode}</p>
          </section>

          <section className="boks">
            <h3 className="eyebrow">Nyheter</h3>
            <h2>{data.nyhetTittel}</h2>
            <p>{data.nyhetTekst}</p>
          </section>

          <section className="boks vip">
            <h3 className="eyebrow">VIP</h3>
            <h2>Invitasjonskort</h2>
            <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
            <button className="knapp" onClick={() => alert("kommer snart")}>
              Se kortet
            </button>
          </section>

          <section className="boks tiki">
            <h3 className="eyebrow">Tiki Bar</h3>
            <h2>Drinkmeny</h2>
            <p className="liten">{data.barNotis}</p>
            <div className="drink-liste">
              {data.drinker.map((d, i) => (
                <div className="drink-rad" key={i}>
                  <span className="drink-navn">{d.navn}</span>
                  <span className="drink-innhold">{d.innhold}</span>
                </div>
              ))}
            </div>
            <span className="liten gul">alle drinker serveres med paraply 🌂</span>
          </section>

          <section className="boks">
            <h3 className="eyebrow">Aktivitet</h3>
            <h2>Volleyball</h2>
            <p>{data.volleyballTekst}</p>
          </section>

          <section className="boks">
            <h3 className="eyebrow">Pynt</h3>
            <h2>Blomsterkranser</h2>
            <p>{data.kransTekst}</p>
            <img className="krans-bilde" src={data.bilder.krans} alt="blomsterkrans" />
          </section>

          <section className="boks paamelding">
            <h3 className="eyebrow">Bli med</h3>
            <h2>Meld deg på</h2>
            <div className="felt-rad">
              <label>Navn</label>
              <input type="text" id="felt" />
            </div>
            <div className="felt-rad">
              <label>Epost</label>
              <input type="text" id="felt" />
            </div>
            <div className="felt-rad">
              <label>Allergier</label>
              <input type="text" id="felt2" />
            </div>
            <div className="felt-rad checkbox-rad">
              <label>Kommer du?</label>
              <input type="checkbox" /> ja
            </div>
            <button className="knapp">Send</button>
          </section>
        </main>
      </div>

      <footer className="footer">
        <img src={data.bilder.bygging} width="400" height="60" alt="bygging" />
        <p className="liten">
          Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;
          <a href="#"> klikk her</a> for spørsmål
          <br />
          Du er besøkende nummer {data.besokende}
        </p>
      </footer>

      <style jsx>{`
        .side {
          min-height: 100vh;
          background: #fbf7f0;
          color: #1c2b33;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        }

        .hero {
          position: relative;
          background: linear-gradient(135deg, #0f766e 0%, #14b8a6 55%, #f2b134 140%);
          color: #fff;
          padding: 3.5rem 1.5rem 5rem;
          text-align: center;
          overflow: hidden;
        }
        .hero-inner {
          max-width: 720px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .banner {
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 0.8rem;
          font-weight: 600;
          opacity: 0.9;
          margin: 0 0 0.75rem;
        }
        .tittel {
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 800;
          margin: 0 0 0.75rem;
          letter-spacing: -0.02em;
        }
        .alarm {
          font-weight: 700;
          color: #fff3c4;
          background: rgba(0, 0, 0, 0.15);
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          margin: 0 0 0.75rem;
        }
        .hint {
          font-size: 0.95rem;
          opacity: 0.9;
        }
        .bolge {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 60px;
          background: #fbf7f0;
          clip-path: polygon(0 60%, 5% 55%, 15% 65%, 25% 50%, 35% 65%, 45% 50%, 55% 65%, 65% 50%, 75% 65%, 85% 50%, 95% 65%, 100% 55%, 100% 100%, 0 100%);
        }

        .layout {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem 1rem;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 2rem;
          align-items: start;
        }

        .meny {
          background: #fff;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(15, 118, 110, 0.08);
          position: sticky;
          top: 1.5rem;
        }
        .meny-tittel {
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0f766e;
        }
        .meny ul {
          list-style: none;
          margin: 1rem 0 1.5rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .meny a {
          display: block;
          text-decoration: none;
          color: #1c2b33;
          font-weight: 600;
          text-transform: capitalize;
          padding: 0.5rem 0.7rem;
          border-radius: 8px;
          transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .meny a:hover,
        .meny a:focus-visible {
          background: #ccfbf1;
          color: #0f766e;
          transform: translateX(3px);
          outline: none;
        }
        .palme-wrap {
          text-align: center;
        }
        .palme-wrap img {
          border-radius: 12px;
          max-width: 100%;
          height: auto;
        }

        .innhold {
          display: grid;
          gap: 1.5rem;
        }

        .boks {
          background: #fff;
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 4px 20px rgba(15, 118, 110, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .boks:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(15, 118, 110, 0.14);
        }
        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.75rem;
          font-weight: 700;
          color: #f2b134;
          margin: 0 0 0.4rem;
        }
        .boks h2 {
          margin: 0 0 0.6rem;
          font-size: 1.5rem;
          color: #0f766e;
        }
        .boks p {
          line-height: 1.6;
          margin: 0.4rem 0;
        }
        .stor {
          background: linear-gradient(135deg, #ecfeff, #fff);
          border: 1px solid #99f6e4;
        }
        .dresscode {
          font-style: italic;
          color: #b45309;
        }

        .vip {
          background: linear-gradient(135deg, #fff7ed, #fff);
          border: 1px solid #fed7aa;
        }

        .tiki {
          background: linear-gradient(135deg, #fdf4ff, #fff);
          border: 1px solid #f0abfc;
        }
        .drink-liste {
          display: grid;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        .drink-rad {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.6rem 0.9rem;
          background: #fdf4ff;
          border-radius: 10px;
          transition: background 0.15s ease;
        }
        .drink-rad:hover {
          background: #fae8ff;
        }
        .drink-navn {
          font-weight: 700;
          color: #86198f;
        }
        .drink-innhold {
          color: #6b7280;
          text-align: right;
        }

        .krans-bilde {
          margin-top: 0.75rem;
          max-width: 100%;
          border-radius: 12px;
        }

        .paamelding {
          background: linear-gradient(135deg, #f0fdfa, #fff);
          border: 1px solid #99f6e4;
        }
        .felt-rad {
          display: grid;
          grid-template-columns: 110px 1fr;
          align-items: center;
          gap: 0.75rem;
          margin: 0.75rem 0;
        }
        .felt-rad label {
          font-weight: 600;
          color: #334155;
        }
        .checkbox-rad {
          grid-template-columns: 110px auto;
        }
        input[type="text"] {
          padding: 0.55rem 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        input[type="text"]:hover {
          border-color: #14b8a6;
        }
        input[type="text"]:focus-visible {
          outline: none;
          border-color: #0f766e;
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.25);
        }
        input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #0f766e;
        }

        .knapp {
          display: inline-block;
          margin-top: 0.75rem;
          background: #0f766e;
          color: #fff;
          border: none;
          padding: 0.75rem 1.75rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 4px 14px rgba(15, 118, 110, 0.3);
        }
        .knapp:hover {
          background: #0d9488;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(15, 118, 110, 0.4);
        }
        .knapp:focus-visible {
          outline: 3px solid #f2b134;
          outline-offset: 2px;
        }
        .knapp:active {
          transform: translateY(0);
        }

        .footer {
          text-align: center;
          padding: 2.5rem 1.5rem 3rem;
        }
        .footer img {
          border-radius: 10px;
          margin-bottom: 1rem;
          max-width: 100%;
          height: auto;
        }
        .liten {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.6;
        }
        .gul {
          color: #b45309;
          font-weight: 600;
        }
        .footer a {
          color: #0f766e;
          font-weight: 600;
        }

        @media (max-width: 800px) {
          .layout {
            grid-template-columns: 1fr;
          }
          .meny {
            position: static;
          }
        }
      `}</style>
    </div>
  );
}
