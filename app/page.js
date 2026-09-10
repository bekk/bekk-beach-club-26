"use client";

import { useState } from "react";
import data from "./data.json";

const NAV = [
  { id: "hjem", label: "Hjem" },
  { id: "nar-og-hvor", label: "Når og hvor" },
  { id: "bar", label: "Bar" },
  { id: "aktiviteter", label: "Aktiviteter" },
  { id: "nyheter", label: "Nyheter" },
  { id: "pamelding", label: "Meld deg på" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Home() {
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [allergier, setAllergier] = useState("");
  const [kommer, setKommer] = useState(true);
  const [sendt, setSendt] = useState(false);
  const aar = 2026;

  function sendSkjema(e) {
    e.preventDefault();
    setSendt(true);
  }

  return (
    <main className="side">
      <header className="topplinje">
        <a className="logo" href="#hjem">{data.tittel}</a>
        <nav className="nav">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </nav>
      </header>

      <section id="hjem" className="hero">
        <p className="kicker">{data.banner}</p>
        <h1>{data.tittel}</h1>
        <p className="lead">{data.bandHint}</p>
        {data.alarm && <p className="varsel">{data.alarm}</p>}
        <a className="knapp" href="#pamelding">Meld deg på</a>
      </section>

      <section id="nar-og-hvor" className="seksjon">
        <h2>Når og hvor</h2>
        <div className="kort-rad">
          <div className="kort">
            <h3>Tidspunkt</h3>
            <p>{data.tid}</p>
          </div>
          <div className="kort">
            <h3>Sted</h3>
            <p>{data.sted}</p>
          </div>
          <div className="kort">
            <h3>Antall abakulere</h3>
            <p>{data.antallAbakulere}</p>
          </div>
          <div className="kort">
            <h3>Linjeforening</h3>
            <p>{data.linjeforening}</p>
          </div>
        </div>
        <p className="dresscode">{data.dresscode}</p>
      </section>

      <section id="bar" className="seksjon lys">
        <h2>Tiki bar</h2>
        <p className="lead-liten">{data.barNotis}</p>
        <div className="tabell-wrapper">
          <table className="drinker">
            <thead>
              <tr><th>Drink</th><th>Innhold</th></tr>
            </thead>
            <tbody>
              {data.drinker.map((d, i) => (
                <tr key={i}><td>{d.navn}</td><td>{d.innhold}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="notis">Alle drinker serveres med paraply.</p>
      </section>

      <section id="aktiviteter" className="seksjon">
        <h2>Aktiviteter</h2>
        <div className="kort-rad">
          <div className="kort">
            <h3>Volleyball</h3>
            <p>{data.volleyballTekst}</p>
          </div>
          <div className="kort">
            <h3>Blomsterkranser</h3>
            <p>{data.kransTekst}</p>
          </div>
          <div className="kort">
            <h3>VIP-invitasjonskort</h3>
            <p>{data.vipTekst.replace(/<[^>]+>/g, "")}</p>
          </div>
        </div>
      </section>

      <section id="nyheter" className="seksjon lys">
        <h2>Nyheter</h2>
        <article className="nyhet">
          <h3>{data.nyhetTittel}</h3>
          <p>{data.nyhetTekst}</p>
        </article>
      </section>

      <section id="pamelding" className="seksjon">
        <h2>Meld deg på</h2>
        {sendt ? (
          <p className="bekreftelse">Takk, {navn || "der"}! Vi har registrert påmeldingen din.</p>
        ) : (
          <form className="skjema" onSubmit={sendSkjema}>
            <label>
              Navn
              <input type="text" value={navn} onChange={(e) => setNavn(e.target.value)} required />
            </label>
            <label>
              Epost
              <input type="email" value={epost} onChange={(e) => setEpost(e.target.value)} required />
            </label>
            <label>
              Allergier
              <input type="text" value={allergier} onChange={(e) => setAllergier(e.target.value)} />
            </label>
            <label className="checkbox">
              <input type="checkbox" checked={kommer} onChange={(e) => setKommer(e.target.checked)} />
              Jeg kommer
            </label>
            <button className="knapp" type="submit">Send</button>
          </form>
        )}
      </section>

      <footer id="kontakt" className="bunntekst">
        <p>Bekk Beach Club {aar} · laget av festkomiteen</p>
        <p>Spørsmål? <a href="mailto:festkomiteen@bekk.no">festkomiteen@bekk.no</a></p>
        <p className="liten">Du er besøkende nummer {data.besokende}</p>
      </footer>

      <style jsx global>{`
        :root {
          color-scheme: light;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
      `}</style>

      <style jsx>{`
        .side {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #1d1d1f;
          background: #ffffff;
          line-height: 1.5;
        }

        .topplinje {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .logo {
          font-weight: 600;
          font-size: 18px;
          color: #0a84ff;
          text-decoration: none;
        }

        .nav {
          display: flex;
          gap: 24px;
        }

        .nav a {
          color: #1d1d1f;
          text-decoration: none;
          font-size: 14px;
        }

        .nav a:hover {
          color: #0a84ff;
        }

        .hero {
          text-align: center;
          padding: 120px 24px 96px;
          background: linear-gradient(180deg, #e8f6ff 0%, #ffffff 100%);
        }

        .kicker {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 13px;
          color: #0a84ff;
          font-weight: 600;
        }

        .hero h1 {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          margin: 12px 0;
          letter-spacing: -0.02em;
        }

        .lead {
          font-size: 20px;
          color: #4b4b4d;
          max-width: 560px;
          margin: 0 auto 32px;
        }

        .varsel {
          display: inline-block;
          margin-bottom: 24px;
          padding: 8px 16px;
          border-radius: 999px;
          background: #fff1f0;
          color: #d70015;
          font-size: 14px;
          font-weight: 600;
        }

        .knapp {
          display: inline-block;
          padding: 14px 32px;
          border: none;
          border-radius: 980px;
          background: #0a84ff;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .knapp:hover {
          background: #0071e3;
        }

        .seksjon {
          padding: 80px 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .seksjon.lys {
          max-width: 100%;
          background: #f5f5f7;
        }

        .seksjon.lys > * {
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .seksjon h2 {
          font-size: 32px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: -0.01em;
        }

        .kort-rad {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .kort {
          background: #fff;
          border-radius: 18px;
          padding: 28px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .kort h3 {
          margin: 0 0 8px;
          font-size: 17px;
        }

        .kort p {
          margin: 0;
          color: #4b4b4d;
        }

        .dresscode {
          text-align: center;
          margin-top: 32px;
          color: #4b4b4d;
        }

        .lead-liten {
          text-align: center;
          color: #4b4b4d;
          margin-bottom: 32px;
        }

        .tabell-wrapper {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .drinker {
          width: 100%;
          border-collapse: collapse;
        }

        .drinker th,
        .drinker td {
          text-align: left;
          padding: 14px 20px;
          border-bottom: 1px solid #ececec;
        }

        .drinker th {
          background: #fafafa;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #6e6e73;
        }

        .notis {
          text-align: center;
          margin-top: 20px;
          color: #6e6e73;
          font-size: 14px;
        }

        .nyhet {
          background: #fff;
          border-radius: 18px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .nyhet h3 {
          margin-top: 0;
        }

        .skjema {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 420px;
          margin: 0 auto;
        }

        .skjema label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: #1d1d1f;
        }

        .skjema label.checkbox {
          flex-direction: row;
          align-items: center;
          gap: 8px;
        }

        .skjema input[type="text"],
        .skjema input[type="email"] {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #d2d2d7;
          font-size: 16px;
        }

        .skjema button {
          margin-top: 8px;
        }

        .bekreftelse {
          text-align: center;
          font-size: 18px;
          color: #1d7a2f;
        }

        .bunntekst {
          text-align: center;
          padding: 48px 24px;
          background: #1d1d1f;
          color: #f5f5f7;
        }

        .bunntekst a {
          color: #6cb4ff;
        }

        .liten {
          font-size: 12px;
          color: #a1a1a6;
        }
      `}</style>
    </main>
  );
}
