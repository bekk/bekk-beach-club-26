"use client";

import { useState, useEffect, useRef } from "react";
import data from "./data.json";

const CONFETTI_COLORS = ["#ffffff", "#0a2a4a", "#1e5f99", "#ffd166", "#f4f4f4"];

function ConfettiBurst({ tick }) {
  const pieces = Array.from({ length: 40 });
  return (
    <div className="confetti-layer" key={tick}>
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const duration = 2.5 + Math.random() * 1.5;
        const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        const size = 6 + Math.random() * 8;
        return (
          <span
            key={i}
            className="confetti-piece"
            style={{
              left: left + "%",
              backgroundColor: color,
              animationDelay: delay + "s",
              animationDuration: duration + "s",
              width: size + "px",
              height: size * 0.4 + "px",
            }}
          />
        );
      })}
    </div>
  );
}

function CrabGame() {
  const [score, setScore] = useState(0);
  const [holeIndex, setHoleIndex] = useState(0);
  const [running, setRunning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    timerRef.current = setInterval(() => {
      setHoleIndex(Math.floor(Math.random() * 9));
    }, 700);
    return () => clearInterval(timerRef.current);
  }, [running]);

  function whack(i) {
    if (i === holeIndex) {
      setScore((s) => s + 1);
      setHoleIndex(-1);
    }
  }

  return (
    <div className="game-box">
      <h4>🦀 KLASK-KRABBEN</h4>
      <p className="liten">Konsulentbudsjettet trenger flere billbare timer. Klask krabben!</p>
      <div className="game-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={"hole " + (i === holeIndex ? "hole-active" : "")}
            onClick={() => whack(i)}
          >
            {i === holeIndex ? "🦀" : ""}
          </div>
        ))}
      </div>
      <p>Poeng: <b>{score}</b> {score >= 10 ? "— Partner-nivå! 🏆" : ""}</p>
      <div className="knapp" onClick={() => setRunning((r) => !r)}>
        {running ? "Pause" : "Fortsett"}
      </div>
    </div>
  );
}

function Waterfall() {
  return (
    <div className="waterfall-wrap">
      <div className="waterfall">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="water-stream" style={{ left: i * 10 + "%", animationDelay: i * 0.15 + "s" }} />
        ))}
      </div>
      <div className="waterfall-pool">🌴 Bekk Falls 🌴</div>
    </div>
  );
}

export default function Home() {
  var aar = 2026;
  const [confettiTick, setConfettiTick] = useState(0);
  const [logoClicks, setLogoClicks] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const [vipOpen, setVipOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setConfettiTick((t) => t + 1), 5000);
    return () => clearInterval(id);
  }, []);

  function handleLogoClick() {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next === 7) {
      setEasterEgg(true);
    }
  }

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Segoe UI", Arial, sans-serif;
          background: linear-gradient(180deg, #ffffff 0%, #eaf3fb 100%);
          color: #0a2a4a;
        }
        .liten { font-size: 12px; color: #4a6b8a; }
        .gul { color: #b8860b; }
        .blink { animation: blink 1s step-start infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .knapp {
          display: inline-block;
          background: #0a2a4a;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: transform 0.15s ease, background 0.15s ease;
          box-shadow: 0 4px 10px rgba(10,42,74,0.25);
        }
        .knapp:hover { background: #143e6b; transform: translateY(-2px) scale(1.03); }
        .boks {
          background: #ffffff;
          border: 1px solid #d7e5f2;
          border-radius: 14px;
          padding: 18px 22px;
          box-shadow: 0 6px 18px rgba(10,42,74,0.08);
        }
        .boks h2, .boks h3, .boks h4 { color: #0a2a4a; margin-top: 0; }
        .stor { border: 2px solid #0a2a4a; }
        a { color: #143e6b; }
      `}</style>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #0a2a4a 0%, #143e6b 60%, #1e5f99 100%);
          color: white;
          padding: 40px 20px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 40px 40px;
          box-shadow: 0 10px 30px rgba(10,42,74,0.35);
        }
        .tittel {
          font-size: 52px;
          font-weight: 900;
          letter-spacing: 2px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.35);
        }
        .banner-text {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.4);
          padding: 8px 20px;
          border-radius: 999px;
          margin-top: 14px;
          font-size: 18px;
        }
        .alarm-text {
          color: #ffd166;
          font-weight: bold;
          display: block;
          margin-top: 14px;
        }
        .logo-egg {
          cursor: pointer;
          user-select: none;
          font-size: 40px;
        }
        .confetti-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .confetti-piece {
          position: absolute;
          top: -20px;
          border-radius: 2px;
          animation-name: fall;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
        }
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(420px) rotate(360deg); opacity: 0; }
        }
        .layout {
          max-width: 1200px;
          margin: -30px auto 0;
          display: grid;
          grid-template-columns: 260px 1fr 260px;
          gap: 20px;
          padding: 0 20px 40px;
        }
        .side-col { display: flex; flex-direction: column; gap: 20px; }
        .game-box {
          background: #ffffff;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 6px 18px rgba(10,42,74,0.08);
          text-align: center;
        }
        .game-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin: 10px 0;
        }
        .hole {
          background: #d7e5f2;
          border-radius: 10px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
        }
        .hole-active { background: #ffd166; }
        .waterfall-wrap {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(10,42,74,0.08);
          position: relative;
        }
        .waterfall {
          position: relative;
          height: 220px;
          background: linear-gradient(180deg, #cfe8f7 0%, #1e5f99 100%);
          overflow: hidden;
        }
        .water-stream {
          position: absolute;
          top: -40px;
          width: 6px;
          height: 60px;
          background: rgba(255,255,255,0.8);
          border-radius: 3px;
          animation: drop 1.2s linear infinite;
        }
        @keyframes drop {
          0% { transform: translateY(0); opacity: 0.9; }
          100% { transform: translateY(280px); opacity: 0.2; }
        }
        .waterfall-pool {
          text-align: center;
          padding: 10px;
          font-weight: bold;
          color: #0a2a4a;
          background: #eaf3fb;
        }
        .menu-list a {
          display: block;
          padding: 8px 10px;
          border-radius: 8px;
          text-decoration: none;
          color: #0a2a4a;
          font-weight: 600;
        }
        .menu-list a:hover { background: #eaf3fb; }
        .footer {
          text-align: center;
          padding: 30px 10px;
          color: #4a6b8a;
        }
        .easter-egg-modal {
          position: fixed;
          inset: 0;
          background: rgba(10,42,74,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .easter-egg-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          max-width: 400px;
        }
        @media (max-width: 900px) {
          .layout { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="hero">
        <div className="logo-egg" onClick={handleLogoClick} title="Klikk meg...">🏖️</div>
        <div className="tittel">{data.tittel}</div>
        <div className="banner-text">{data.banner}</div>
        <span className="alarm-text blink">{data.alarm}</span>
        <br />
        <span className="liten" style={{ color: "#cfe8f7" }}>{data.bandHint}</span>
        <ConfettiBurst tick={confettiTick} />
      </div>

      <div className="layout">
        <div className="side-col">
          <div className="boks">
            <b>MENY</b>
            <div className="menu-list">
              {data.meny.map((m, i) => (
                <a key={i} href={m == "bar" ? "/bar" : m == "kontakt" ? "/kontakt" : "#"}>{m}</a>
              ))}
            </div>
            <center>
              <img src={data.bilder.palme} width="120" height="160" />
              <br />
              <span className="liten">palme</span>
            </center>
          </div>
          <CrabGame />
        </div>

        <div>
          <div className="boks stor" style={{ marginBottom: 20 }}>
            <h3>NÅR OG HVOR</h3>
            <h1>Hver dag</h1>
            <p>Tid: {data.tid} &nbsp;&nbsp; Sted: {data.sted} &nbsp;&nbsp; {data.antallAbakulere} abakulere</p>
            <p>Linjeforening: {data.linjeforening}</p>
            <p>{data.dresscode}</p>
          </div>

          <div className="boks" style={{ marginBottom: 20 }}>
            <h4>NYHETER</h4>
            <h3>{data.nyhetTittel}</h3>
            <p>{data.nyhetTekst}</p>
          </div>

          <div className="boks" style={{ marginBottom: 20 }}>
            <h4>VIP INVITASJONSKORT</h4>
            <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
            <div className="knapp" onClick={() => setVipOpen(true)}>
              Se kortet
            </div>
            {vipOpen && (
              <div className="easter-egg-modal" onClick={() => setVipOpen(false)}>
                <div className="easter-egg-card">
                  <h2>🎉 VIP-kort låst opp!</h2>
                  <p>Du har nå gratis tilgang til... denne meldingen.</p>
                  <div className="knapp" onClick={() => setVipOpen(false)}>Lukk</div>
                </div>
              </div>
            )}
          </div>

          <div className="boks" style={{ marginBottom: 20 }}>
            <h2>TIKI BAR</h2>
            <span className="liten">{data.barNotis}</span>
            <table border="1" width="100%" cellPadding="6" style={{ borderCollapse: "collapse", marginTop: 10 }}>
              <tbody>
                {data.drinker.map((d, i) => (
                  <tr key={i}><td>{d.navn}</td><td>{d.innhold}</td></tr>
                ))}
              </tbody>
            </table>
            <br />
            <span className="liten gul">alle drinker serveres med paraply</span>
          </div>

          <div className="boks" style={{ marginBottom: 20 }}>
            <h4>VOLLEYBALL</h4>
            <p>{data.volleyballTekst}</p>
          </div>

          <div className="boks" style={{ marginBottom: 20 }}>
            <h3>BLOMSTERKRANSER</h3>
            <p>{data.kransTekst}</p>
            <img src={data.bilder.krans} />
          </div>

          <div className="boks">
            <h4>MELD DEG PÅ</h4>
            <table border="0"><tbody>
              <tr><td>Navn</td><td><input type="text" id="felt" /></td></tr>
              <tr><td>Epost</td><td><input type="text" id="felt" /></td></tr>
              <tr><td>Allergier</td><td><input type="text" id="felt2" /></td></tr>
              <tr><td>Kommer du?</td><td><input type="checkbox" /> ja</td></tr>
            </tbody></table>
            <br />
            <div className="knapp">Send</div>
          </div>
        </div>

        <div className="side-col">
          <Waterfall />
          <div className="boks">
            <h4>🤫 Psst</h4>
            <p className="liten">7 klikk på palmen i toppen gir en overraskelse.</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={data.bilder.bygging} width="300" height="45" />
        <hr />
        <span className="liten">
          Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;
          <a href="#">klikk her</a> for spørsmål
          <br />
          Du er besøkende nummer {data.besokende}
        </span>
      </div>

      {easterEgg && (
        <div className="easter-egg-modal" onClick={() => setEasterEgg(false)}>
          <div className="easter-egg-card">
            <h2>🦀🏖️ DU FANT EASTER EGGET!</h2>
            <p>Konsulentliv: 80% fakturerbart, 20% klasking av krabber.</p>
            <div className="knapp" onClick={() => setEasterEgg(false)}>Tilbake til stranden</div>
          </div>
        </div>
      )}
    </>
  );
}
