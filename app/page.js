"use client";

import { useState, useEffect } from "react";
import data from "./data.json";

const DRINK_EMOJI = ["🍹", "🍸", "🥥", "🍍", "🍧", "🍷", "🍺", "🧋"];
const KRANS_BLOMST = ["🌺", "🌸", "🌼", "🌷", "🪷"];
const DRINKS_PER_SIDE = 4;

export default function Home() {
  const [menyApen, setMenyApen] = useState(false);
  const [side, setSide] = useState(0);
  const [knustIndex, setKnustIndex] = useState(null);
  const [ballAktiv, setBallAktiv] = useState(false);
  var aar = 2026;

  useEffect(() => {
    const intervall = setInterval(() => {
      const tilfeldig = Math.floor(Math.random() * data.drinker.length);
      setBallAktiv(true);
      setKnustIndex(tilfeldig);
      const stopp = setTimeout(() => {
        setBallAktiv(false);
        setKnustIndex(null);
      }, 1800);
      return () => clearTimeout(stopp);
    }, 10000);
    return () => clearInterval(intervall);
  }, []);

  const antallSider = Math.ceil(data.drinker.length / DRINKS_PER_SIDE);
  const drinkerPaSide = data.drinker.slice(
    side * DRINKS_PER_SIDE,
    side * DRINKS_PER_SIDE + DRINKS_PER_SIDE
  );

  return (
    <div className="bbc-root">
      <style jsx global>{`
        @keyframes hulaSving {
          0% { transform: rotate(-4deg) skewX(-3deg); }
          50% { transform: rotate(4deg) skewX(3deg); }
          100% { transform: rotate(-4deg) skewX(-3deg); }
        }
        @keyframes fringeSving {
          0% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
          100% { transform: rotate(-10deg); }
        }
        @keyframes flyt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes ballInn {
          0% { transform: translate(-20vw, 40vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(70vw, -10vh) rotate(720deg); opacity: 1; }
        }
        @keyframes knus {
          0% { transform: scale(1) rotate(0deg); filter: none; }
          30% { transform: scale(1.15) rotate(-8deg); }
          60% { transform: scale(0.9) rotate(8deg); filter: grayscale(0.6); }
          100% { transform: scale(1) rotate(0deg); filter: none; }
        }

        body {
          margin: 0;
          background: radial-gradient(ellipse at top, #0f4c4a 0%, #062522 60%, #03110f 100%);
          font-family: Georgia, "Times New Roman", serif;
          color: #f6ecd3;
        }

        .bbc-root {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .blomst-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .blomst-bg span {
          position: absolute;
          opacity: 0.16;
          animation: flyt 6s ease-in-out infinite;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 14px 28px;
          background: linear-gradient(180deg, rgba(6, 37, 34, 0.95), rgba(6, 37, 34, 0.75));
          backdrop-filter: blur(6px);
          border-bottom: 1px solid #d4af37aa;
        }

        .hamburger {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 2px solid #d4af37;
          background: #0b3d3c;
          color: #d4af37;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .merkevare {
          font-size: 26px;
          letter-spacing: 2px;
          color: #d4af37;
        }

        .meny-panel {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 300px;
          background: linear-gradient(160deg, #0b3d3c, #062522);
          border-right: 2px solid #d4af37;
          z-index: 40;
          transform: translateX(-100%);
          transition: transform 0.35s ease;
          padding: 90px 20px 20px;
          box-shadow: 8px 0 30px rgba(0,0,0,0.5);
        }
        .meny-panel.apen {
          transform: translateX(0);
        }

        .lei {
          display: block;
          text-align: center;
          margin: 0 auto 22px;
          padding: 14px 10px;
          border-radius: 50%;
          border: 2px dashed #ff8fa3;
          background: radial-gradient(circle, rgba(255,255,255,0.04), transparent);
          color: #f6ecd3;
          text-decoration: none;
          font-size: 15px;
          letter-spacing: 1px;
          transition: transform 0.2s ease;
        }
        .lei:hover {
          transform: scale(1.08);
        }
        .lei .krans-rad {
          display: block;
          font-size: 18px;
          letter-spacing: 4px;
        }
        .lei .navn {
          display: block;
          margin: 6px 0;
          text-transform: uppercase;
          font-weight: bold;
          color: #d4af37;
        }

        .overlegg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          z-index: 35;
        }

        .innhold {
          position: relative;
          z-index: 5;
          max-width: 960px;
          margin: 0 auto;
          padding: 30px 20px 60px;
        }

        .hula-tittel {
          position: relative;
          display: inline-block;
          padding: 0 8px 26px;
          color: #d4af37;
          text-shadow: 0 2px 6px rgba(0,0,0,0.6);
        }
        .hula-tittel .skjort {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 2px;
          overflow: hidden;
          height: 22px;
        }
        .hula-tittel .skjort span {
          display: inline-block;
          width: 4px;
          height: 20px;
          background: linear-gradient(180deg, #2fa876, #d4af37);
          border-radius: 0 0 3px 3px;
          transform-origin: top center;
          animation: fringeSving 1.1s ease-in-out infinite;
        }

        .kort {
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          border: 1px solid #d4af37aa;
          border-radius: 14px;
          padding: 22px 26px;
          margin-bottom: 26px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }

        .knapp-gull {
          display: inline-block;
          margin-top: 12px;
          padding: 10px 22px;
          background: linear-gradient(135deg, #d4af37, #a9781f);
          color: #062522;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          letter-spacing: 1px;
        }

        .tiki-meny {
          position: relative;
          background: #f6ecd3 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23f6ecd3'/%3E%3C/svg%3E");
          color: #2b1d0e;
          border-radius: 6px;
          padding: 34px 36px;
          box-shadow: inset 0 0 0 1px #d4af3799, 0 20px 40px rgba(0,0,0,0.5);
          border: 10px solid #6b3f1d;
          background-image:
            repeating-linear-gradient(180deg, rgba(0,0,0,0.02) 0 1px, transparent 1px 26px);
        }
        .tiki-meny::before {
          content: "";
          position: absolute;
          inset: 6px;
          border: 1px solid #6b3f1d55;
          pointer-events: none;
        }
        .tiki-tittel {
          text-align: center;
          font-size: 28px;
          letter-spacing: 3px;
          color: #6b3f1d;
          margin-bottom: 4px;
        }
        .tiki-rad {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 10px 4px;
          border-bottom: 1px dotted #6b3f1d88;
          transition: transform 0.2s ease;
        }
        .tiki-rad.knust {
          animation: knus 1.6s ease;
        }
        .tiki-emoji {
          font-size: 26px;
          margin-right: 10px;
        }
        .tiki-navn {
          font-weight: bold;
        }
        .tiki-innhold {
          font-style: italic;
          opacity: 0.8;
          text-align: right;
        }
        .knust-badge {
          margin-left: 8px;
          color: #b21b1b;
          font-weight: bold;
        }

        .blafoot {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
        }
        .blaknapp {
          background: #6b3f1d;
          color: #f6ecd3;
          border: none;
          padding: 8px 18px;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
        }
        .blaknapp:disabled {
          opacity: 0.35;
          cursor: default;
        }

        .volleyball {
          position: fixed;
          top: 0;
          left: 0;
          font-size: 46px;
          z-index: 50;
          animation: ballInn 1.8s ease-in-out forwards;
        }

        .footer {
          text-align: center;
          color: #cbb98a;
          font-size: 13px;
          padding: 20px 0;
        }
      `}</style>

      <div className="blomst-bg" aria-hidden="true">
        <span style={{ top: "6%", left: "4%", fontSize: "48px", animationDelay: "0s" }}>🌺</span>
        <span style={{ top: "18%", left: "80%", fontSize: "60px", animationDelay: "1s" }}>🌸</span>
        <span style={{ top: "40%", left: "12%", fontSize: "40px", animationDelay: "2s" }}>🌴</span>
        <span style={{ top: "62%", left: "88%", fontSize: "56px", animationDelay: "0.5s" }}>🌼</span>
        <span style={{ top: "75%", left: "20%", fontSize: "44px", animationDelay: "1.5s" }}>🌺</span>
        <span style={{ top: "88%", left: "65%", fontSize: "50px", animationDelay: "2.5s" }}>🌸</span>
        <span style={{ top: "30%", left: "50%", fontSize: "38px", animationDelay: "3s" }}>🌴</span>
        <span style={{ top: "10%", left: "45%", fontSize: "34px", animationDelay: "1.8s" }}>🪷</span>
      </div>

      {ballAktiv && <div className="volleyball">🏐</div>}

      <header className="header">
        <div className="hamburger" onClick={() => setMenyApen(!menyApen)}>☰</div>
        <div className="merkevare">Bekk Beach Club</div>
      </header>

      {menyApen && <div className="overlegg" onClick={() => setMenyApen(false)} />}
      <nav className={"meny-panel" + (menyApen ? " apen" : "")}>
        {data.meny.map((m, i) => (
          <a
            key={i}
            className="lei"
            href={m === "bar" ? "/bar" : m === "kontakt" ? "/kontakt" : "#"}
            onClick={() => setMenyApen(false)}
          >
            <span className="krans-rad">
              {KRANS_BLOMST.map((b, j) => (
                <span key={j}>{b}</span>
              ))}
            </span>
            <span className="navn">{m}</span>
            <span className="krans-rad">
              {KRANS_BLOMST.map((b, j) => (
                <span key={j}>{b}</span>
              ))}
            </span>
          </a>
        ))}
      </nav>

      <div className="innhold">
        <center>
          <h1 className="hula-tittel">
            {data.tittel}
            <span className="skjort">
              {Array.from({ length: 22 }).map((_, i) => (
                <span key={i} style={{ animationDelay: i * 0.04 + "s" }} />
              ))}
            </span>
          </h1>
          <p style={{ color: "#f6ecd3" }}>{data.banner}</p>
          <p style={{ color: "#ff6f61", fontWeight: "bold" }}>{data.alarm}</p>
          <p style={{ color: "#cbb98a" }}>{data.bandHint}</p>
        </center>

        <div className="kort">
          <h2 className="hula-tittel">
            NÅR OG HVOR
            <span className="skjort">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} style={{ animationDelay: i * 0.05 + "s" }} />
              ))}
            </span>
          </h2>
          <h3>Hver dag</h3>
          <p>
            Tid: {data.tid} &nbsp;&nbsp; Sted: {data.sted} &nbsp;&nbsp; Påmeldte: {data.antallPaameldte}
          </p>
          <p>Linjeforening: {data.linjeforening}</p>
          <p>{data.dresscode}</p>
        </div>

        <div className="kort">
          <h4 className="hula-tittel">
            VIP INVITASJONSKORT
            <span className="skjort">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} style={{ animationDelay: i * 0.06 + "s" }} />
              ))}
            </span>
          </h4>
          <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
          <div className="knapp-gull" onClick={() => alert("kommer snart")}>
            Se kortet
          </div>
        </div>

        <div className="kort tiki-meny">
          <div className="tiki-tittel">🍹 TIKI BAR 🍹</div>
          <p style={{ textAlign: "center", fontStyle: "italic" }}>{data.barNotis}</p>

          {drinkerPaSide.map((d, i) => {
            const globalIndex = side * DRINKS_PER_SIDE + i;
            const erKnust = knustIndex === globalIndex;
            return (
              <div className={"tiki-rad" + (erKnust ? " knust" : "")} key={globalIndex}>
                <span>
                  <span className="tiki-emoji">
                    {erKnust ? "💥" : DRINK_EMOJI[globalIndex % DRINK_EMOJI.length]}
                  </span>
                  <span className="tiki-navn">{d.navn}</span>
                  {erKnust && <span className="knust-badge">knust av volleyball!</span>}
                </span>
                <span className="tiki-innhold">{d.innhold}</span>
              </div>
            );
          })}

          <div className="blafoot">
            <button className="blaknapp" onClick={() => setSide((s) => Math.max(0, s - 1))} disabled={side === 0}>
              ← forrige side
            </button>
            <span>
              side {side + 1} av {antallSider}
            </span>
            <button
              className="blaknapp"
              onClick={() => setSide((s) => Math.min(antallSider - 1, s + 1))}
              disabled={side >= antallSider - 1}
            >
              neste side →
            </button>
          </div>

          <p style={{ textAlign: "center", marginTop: "14px", color: "#a9781f" }}>
            alle drinker serveres med paraply
          </p>
        </div>

        <div className="kort">
          <h4 className="hula-tittel">
            VOLLEYBALL
            <span className="skjort">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} style={{ animationDelay: i * 0.06 + "s" }} />
              ))}
            </span>
          </h4>
          <p>{data.volleyballTekst}</p>
        </div>

        <div className="kort">
          <h3 className="hula-tittel">
            BLOMSTERKRANSER
            <span className="skjort">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} style={{ animationDelay: i * 0.045 + "s" }} />
              ))}
            </span>
          </h3>
          <p>{data.kransTekst}</p>
          <center>
            <img src={data.bilder.krans} alt="blomsterkrans" />
          </center>
        </div>

        <div className="kort">
          <h4 className="hula-tittel">
            MELD DEG PÅ
            <span className="skjort">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} style={{ animationDelay: i * 0.06 + "s" }} />
              ))}
            </span>
          </h4>
          <table border="0">
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
                <td><input type="checkbox" /> ja</td>
              </tr>
            </tbody>
          </table>
          <div className="knapp-gull">Send</div>
        </div>

        <center>
          <img src={data.bilder.bygging} width="400" height="60" alt="" />
          <hr style={{ borderColor: "#d4af37" }} />
          <div className="footer">
            Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;
            <a href="#" style={{ color: "#d4af37" }}>klikk her</a> for spørsmål
            <br />
            Du er besøkende nummer {data.besokende}
          </div>
        </center>
      </div>
    </div>
  );
}
