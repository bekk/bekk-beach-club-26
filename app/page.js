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
    <div className="scene">
      <div className="balloon b1">🎈</div>
      <div className="balloon b2">🎈</div>
      <div className="balloon b3">🎈</div>
      <div className="balloon b4">🎈</div>
      <div className="parasol p1">⛱️</div>
      <div className="parasol p2">⛱️</div>

      <div className="wrap">
        <header className="hero">
          <div className="tittel">{data.tittel}</div>
          <div className="banner">{data.banner}</div>
          <div className="alarm">{data.alarm}</div>
          <div className="hint">{data.bandHint}</div>
        </header>

        <div className="layout">
          <aside className="meny">
            <b>MENY</b>
            <nav>
              {data.meny.map((m, i) => (
                <a key={i} href={m == "bar" ? "/bar" : m == "kontakt" ? "/kontakt" : "#"}>{m}</a>
              ))}
            </nav>
            <div className="palme-wrap">
              <img src={data.bilder.palme} width="150" height="200" alt="palme" />
              <span className="liten">palme</span>
            </div>
          </aside>

          <main className="innhold">
            <div className="boks stor">
              <h3>NÅR OG HVOR</h3>
              <h1>Hver dag</h1>
              <p>Tid: {data.tid} &nbsp;&nbsp; Sted: {data.sted} &nbsp;&nbsp; {data.antallAbakulere} abakulere</p>
              <p>Linjeforening: {data.linjeforening}</p>
              <p>{data.dresscode}</p>
            </div>

            <div className="boks">
              <h4>NYHETER</h4>
              <h3>{data.nyhetTittel}</h3>
              <p>{data.nyhetTekst}</p>
            </div>

            <div className="boks">
              <h4>VIP INVITASJONSKORT</h4>
              <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
              <div className="knapp" onClick={() => alert("kommer snart")}>
                Se kortet
              </div>
            </div>

            <div className="boks">
              <h2>TIKI BAR</h2>
              <span className="liten">{data.barNotis}</span>
              <table>
                <tbody>
                  {data.drinker.map((d, i) => (
                    <tr key={i}><td>{d.navn}</td><td>{d.innhold}</td></tr>
                  ))}
                </tbody>
              </table>
              <span className="liten gul">alle drinker serveres med paraply</span>
            </div>

            <div className="boks">
              <h4>VOLLEYBALL</h4>
              <p>{data.volleyballTekst}</p>
            </div>

            <div className="boks">
              <h3>BLOMSTERKRANSER</h3>
              <p>{data.kransTekst}</p>
              <img src={data.bilder.krans} alt="krans" />
            </div>

            <div className="boks">
              <h4>MELD DEG PÅ</h4>
              <table className="skjema">
                <tbody>
                  <tr><td>Navn</td><td><input type="text" id="felt" /></td></tr>
                  <tr><td>Epost</td><td><input type="text" id="felt" /></td></tr>
                  <tr><td>Allergier</td><td><input type="text" id="felt2" /></td></tr>
                  <tr><td>Kommer du?</td><td><input type="checkbox" /> ja</td></tr>
                </tbody>
              </table>
              <div className="knapp">Send</div>
            </div>
          </main>
        </div>

        <footer className="footer">
          <img src={data.bilder.bygging} width="400" height="60" alt="bygg" />
          <hr />
          <span className="liten">
            Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;
            <a href="#">klikk her</a> for spørsmål
            <br />
            Best viewed in 1024x768
            <br />
            Du er besøkende nummer {data.besokende}
          </span>
        </footer>
      </div>

      <style jsx>{`
        .scene {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: radial-gradient(ellipse at top, #2a0e3d 0%, #180825 45%, #0a0414 100%);
          color: #f5e6ff;
          font-family: "Trebuchet MS", "Segoe UI", sans-serif;
        }

        .wrap {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 24px 60px;
        }

        .hero {
          text-align: center;
          margin-bottom: 36px;
        }

        .tittel {
          font-size: 52px;
          font-weight: 800;
          letter-spacing: 2px;
          background: linear-gradient(90deg, #ff6ec7, #ffd36e, #45f0d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 40px rgba(255, 110, 199, 0.35);
        }

        .banner {
          margin-top: 10px;
          font-size: 20px;
          color: #ffe9ff;
          letter-spacing: 1px;
        }

        .alarm {
          margin-top: 14px;
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(255, 60, 120, 0.15);
          border: 1px solid rgba(255, 60, 120, 0.5);
          color: #ff8fb3;
          font-weight: bold;
          box-shadow: 0 0 20px rgba(255, 60, 120, 0.25);
        }

        .hint {
          margin-top: 12px;
          color: #b9a6d9;
          font-size: 14px;
        }

        .layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 28px;
          align-items: start;
        }

        .meny {
          position: sticky;
          top: 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 20px;
          backdrop-filter: blur(10px);
        }

        .meny nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 16px 0 24px;
        }

        .meny a {
          color: #45f0d0;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .meny a:hover {
          color: #ffd36e;
        }

        .palme-wrap {
          text-align: center;
        }

        .palme-wrap img {
          border-radius: 12px;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.5));
        }

        .innhold {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .boks {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px 28px;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .boks.stor {
          background: linear-gradient(135deg, rgba(255, 110, 199, 0.15), rgba(69, 240, 208, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .boks h1, .boks h2, .boks h3, .boks h4 {
          margin: 0 0 10px;
          color: #ffd36e;
        }

        .boks table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
        }

        .boks table td {
          padding: 8px 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .skjema input {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 6px 10px;
          color: #f5e6ff;
        }

        .knapp {
          display: inline-block;
          margin-top: 16px;
          padding: 12px 28px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ff6ec7, #ffd36e);
          color: #180825;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(255, 110, 199, 0.4);
          transition: transform 0.15s ease;
        }

        .knapp:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .liten {
          font-size: 12px;
          color: #b9a6d9;
        }

        .gul {
          color: #ffd36e;
        }

        .footer {
          text-align: center;
          margin-top: 40px;
        }

        .footer img {
          border-radius: 10px;
          opacity: 0.9;
        }

        .footer hr {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin: 16px 0;
        }

        .footer a {
          color: #45f0d0;
        }

        .balloon {
          position: absolute;
          font-size: 48px;
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.4));
          animation: float 7s ease-in-out infinite;
          z-index: 1;
        }

        .b1 { left: 6%; top: 10%; animation-delay: 0s; }
        .b2 { right: 8%; top: 18%; animation-delay: 1.5s; }
        .b3 { left: 12%; bottom: 12%; animation-delay: 3s; }
        .b4 { right: 14%; bottom: 20%; animation-delay: 4.5s; }

        .parasol {
          position: absolute;
          font-size: 60px;
          opacity: 0.85;
          z-index: 1;
        }

        .p1 { left: 2%; bottom: 4%; }
        .p2 { right: 3%; top: 4%; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-24px) rotate(3deg); }
        }

        @media (max-width: 760px) {
          .layout {
            grid-template-columns: 1fr;
          }
          .meny {
            position: static;
          }
          .balloon, .parasol {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
