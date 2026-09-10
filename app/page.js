"use client";

import { useState } from "react";
import data from "./data.json";

export default function Home() {
  const [apen, setApen] = useState(false);
  var aar = 2026;

  return (
    <div className="beach-page">
      <style jsx global>{`
        body {
          margin: 0;
          background: linear-gradient(180deg, #ffdd88 0%, #ffb84d 25%, #ff8c5a 45%, #4fc3d9 55%, #1e9bb5 100%);
          font-family: "Trebuchet MS", "Segoe UI", sans-serif;
        }
        a {
          text-decoration: none !important;
          color: inherit;
        }
        hr {
          display: none;
        }
      `}</style>

      <div className="hero">
        <div className="sun">☀️</div>
        <div className="deco palme-left">🌴</div>
        <div className="deco palme-right">🌴</div>
        <div className="deco glasses">😎</div>
        <h1 className="tittel">{data.tittel}</h1>
        <div className="banner">🎉 {data.banner} 🎉</div>
        <div className="alarm">🔥 {data.alarm} 🔥</div>
        <div className="hint">🎶 {data.bandHint}</div>
        <div className="sand" />
      </div>

      <nav className="meny">
        {data.meny.map((m, i) => (
          <a
            key={i}
            className="meny-link"
            href={m == "bar" ? "/bar" : m == "kontakt" ? "/kontakt" : "#"}
          >
            {m}
          </a>
        ))}
      </nav>

      <div className="innhold">
        <aside className="sidebar">
          <div className="parasol">⛱️</div>
          <div className="cocktail">🍹</div>
          <div className="sunglasses-side">🕶️</div>
          <p className="liten">Klar for sommerens beste fest</p>
        </aside>

        <main className="hoved">
          <div className="boks stor">
            <h3>NÅR OG HVOR</h3>
            <h1>Hver dag</h1>
            <p>
              Tid: {data.tid} &nbsp;&nbsp; Sted: {data.sted} &nbsp;&nbsp; {data.antallAbakulere} abakulere
              venter på deg
            </p>
            <p>Linjeforening: {data.linjeforening}</p>
            <p>{data.dresscode}</p>
          </div>

          <div className="boks">
            <h4>🗞️ NYHETER</h4>
            <h3>{data.nyhetTittel}</h3>
            <p>{data.nyhetTekst}</p>
          </div>

          <div className="boks">
            <h4>💌 VIP INVITASJONSKORT</h4>
            <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
            <div className="knapp" onClick={() => alert("kommer snart")}>
              Se kortet
            </div>
          </div>

          <div className="boks">
            <h2>🍹 TIKI BAR</h2>
            <span className="liten">Alt du trenger for en perfekt strandkveld</span>
            <table className="drinke-tabell">
              <tbody>
                {data.drinker.map((d, i) => (
                  <tr key={i}>
                    <td>🍸 {d.navn}</td>
                    <td>{d.innhold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <span className="liten gul">alle drinker serveres med paraply ☂️</span>
          </div>

          <div className="boks">
            <h4>🏐 VOLLEYBALL</h4>
            <p>Bli med på strandvolleyball hele dagen – alle nivåer er velkomne!</p>
          </div>

          <div className="boks">
            <h3>🌺 BLOMSTERKRANSER</h3>
            <p>{data.kransTekst}</p>
            <img src={data.bilder.krans} />
          </div>

          <div className="boks">
            <h4>📝 MELD DEG PÅ</h4>
            <table className="skjema-tabell">
              <tbody>
                <tr>
                  <td>Navn</td>
                  <td><input type="text" id="felt" /></td>
                </tr>
                <tr>
                  <td>Epost</td>
                  <td><input type="text" id="felt" /></td>
                </tr>
                <tr>
                  <td>Allergier</td>
                  <td><input type="text" id="felt2" /></td>
                </tr>
                <tr>
                  <td>Kommer du?</td>
                  <td><input type="checkbox" /> ja, jeg er med!</td>
                </tr>
              </tbody>
            </table>
            <br />
            <div className="knapp">Send</div>
          </div>
        </main>
      </div>

      <footer className="footer">
        <span>
          🏖️ Bekk Beach Club {aar} &nbsp;|&nbsp; laget med kjærlighet av festkomiteen &nbsp;|&nbsp;
          <a href="#">klikk her</a> for spørsmål
          <br />
          Du er gjest nummer {data.besokende} – velkommen til festen! 🎊
        </span>
      </footer>

      <style jsx>{`
        .hero {
          position: relative;
          text-align: center;
          padding: 40px 20px 60px;
          overflow: hidden;
        }
        .sun {
          position: absolute;
          top: 10px;
          right: 30px;
          font-size: 60px;
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .deco {
          position: absolute;
          font-size: 70px;
          top: 20px;
        }
        .palme-left { left: 10px; }
        .palme-right { right: 10px; transform: scaleX(-1); }
        .glasses {
          font-size: 40px;
          margin-bottom: 10px;
        }
        .tittel {
          font-size: 3rem;
          color: #ffffff;
          text-shadow: 2px 2px 0 #ff6b6b, 4px 4px 0 #2c98a0;
          margin: 10px 0;
        }
        .banner {
          font-size: 1.4rem;
          font-weight: bold;
          color: #fff9e6;
        }
        .alarm {
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff36b;
          margin-top: 8px;
        }
        .hint {
          color: #ffffff;
          margin-top: 6px;
        }
        .sand {
          height: 20px;
          background: repeating-linear-gradient(90deg, #f7e29b, #f7e29b 10px, #f0d67a 10px, #f0d67a 20px);
          margin-top: 20px;
          border-radius: 0 0 12px 12px;
        }

        .meny {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(4px);
          margin: 0 20px;
          border-radius: 16px;
        }
        .meny-link {
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
          padding: 10px 22px;
          border-radius: 30px;
          background: linear-gradient(135deg, #ff8a5c, #ff5e8e);
          box-shadow: 0 3px 8px rgba(0,0,0,0.2);
          transition: transform 0.15s ease;
        }
        .meny-link:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .innhold {
          display: flex;
          gap: 24px;
          max-width: 1100px;
          margin: 24px auto;
          padding: 0 20px;
        }
        .sidebar {
          width: 160px;
          flex-shrink: 0;
          text-align: center;
          background: rgba(255,255,255,0.3);
          border-radius: 16px;
          padding: 20px 10px;
          height: fit-content;
        }
        .sidebar .parasol,
        .sidebar .cocktail,
        .sidebar .sunglasses-side {
          font-size: 60px;
          margin-bottom: 10px;
        }

        .hoved {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .boks {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          padding: 20px 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .boks.stor {
          background: linear-gradient(135deg, #fff6d9, #ffe0b3);
        }
        .boks h1, .boks h2, .boks h3, .boks h4 {
          color: #d6336c;
          margin-top: 0;
        }

        .drinke-tabell, .skjema-tabell {
          width: 100%;
          border-collapse: collapse;
        }
        .drinke-tabell td, .skjema-tabell td {
          padding: 6px 10px;
          border-bottom: 1px dashed #ffb84d;
        }

        .knapp {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 26px;
          background: linear-gradient(135deg, #ff6b6b, #ffb84d);
          color: white;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 3px 8px rgba(0,0,0,0.2);
          transition: transform 0.15s ease;
        }
        .knapp:hover {
          transform: scale(1.06);
        }

        .liten {
          font-size: 0.85rem;
          color: #555;
        }
        .gul {
          color: #b8860b;
        }

        .footer {
          text-align: center;
          padding: 30px 20px 50px;
          color: #fff;
          font-size: 0.9rem;
        }
        .footer a {
          text-decoration: underline !important;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
