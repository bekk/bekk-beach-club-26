"use client";

import { useState } from "react";
import data from "./data.json";

const DRINK_FARGER = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#9b5de5", "#f15bb5", "#f4a261"];
const FLY_EMOJI = ["🍹", "🍸", "🍷", "🥂", "🍺", "🍹"];

export default function Home() {
  const [apen, setApen] = useState(false);
  var aar = 2026;

  // TODO: fikse dette senere, rakk det ikke
  // const [navn, setNavn] = useState("")
  // function sendSkjema() {
  //   fetch("/api/paamelding", { method: "POST", body: navn })
  // }

  return (
    <div className="oceanBg">
      <div className="clownOverlay">🤡</div>

      <div className="chatbot">
        <div className="chatbotBubble">Hi! Can I help you?</div>
        <div className="chatbotAvatar">🐧🏄</div>
      </div>

      {FLY_EMOJI.map((e, i) => (
        <div
          key={i}
          className="flyingDrink"
          style={{
            top: 8 + i * 15 + "%",
            animationDuration: 12 + i * 3 + "s",
            animationDelay: i * 2 + "s",
            filter: `drop-shadow(0 0 6px ${DRINK_FARGER[i % DRINK_FARGER.length]})`,
          }}
        >
          {e}
        </div>
      ))}

      <center>
        <table width="900" border="3" cellPadding="0" cellSpacing="0" bgColor="#00cccc">
          <tbody>
            <tr>
              <td>
                <center>
                  <div className="tittel">{data.tittel}</div>
                  <marquee behavior="alternate" scrollAmount="12">
                    <span style={{ color: "#ffffff", fontSize: "22px" }}>{data.banner}</span>
                  </marquee>
                  <br />
                  <span className="blink" style={{ color: "#ff0000", fontWeight: "bold" }}>{data.alarm}</span>
                  <br /><br />
                </center>

                <table width="100%" border="0">
                  <tbody>
                    <tr>
                      <td width="200" vAlign="top" bgColor="#ff9900">
                        <b>MENY</b>
                        <br /><br />
                        {data.meny.map((m, i) => (
                          <span key={i}><a href={m == "bar" ? "/bar" : m == "kontakt" ? "/kontakt" : "#"}>{m}</a><br /></span>
                        ))}
                        <br /><br /><br />
                        <center>
                          <div className="hula">💃</div>
                          <br />
                          <img src={data.bilder.palme} width="150" height="200" />
                          <br />
                          <span className="liten">palme</span>
                        </center>
                      </td>

                      <td vAlign="top">
                        <div className={"boks " + "stor"}>
                          <h3>NÅR OG HVOR</h3>
                          <h1>Hver dag</h1>
                          <p>Tid: {data.tid} &nbsp;&nbsp; Sted: {data.sted} &nbsp;&nbsp; Påmeldte: {data.antallPaameldte}</p>
                          <p>{data.dresscode}</p>
                          <p className="liten">{data.bandHint}</p>
                        </div>

                        <br />

                        <div className="boks vipWrapper">
                          <h4>VIP INVITASJONSKORT</h4>
                          <div className="vip3d">
                            <div className="vipCard">
                              <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
                              <ul className="glowList">
                                <li className="glowPoint" style={{ animationDelay: "0s" }}>✨ Hopp køen, alltid</li>
                                <li className="glowPoint" style={{ animationDelay: "0.4s" }}>🍹 Gratis paraplydrinker</li>
                                <li className="glowPoint" style={{ animationDelay: "0.8s" }}>🏖️ Reservert strandstol</li>
                                <li className="glowPoint" style={{ animationDelay: "1.2s" }}>🎉 Møt beach-klovnen først</li>
                              </ul>
                            </div>
                          </div>
                          <div className="knapp" onClick={() => alert("kommer snart")}>
                            Se kortet
                          </div>
                        </div>

                        <br />

                        <div className="boks">
                          <h2>TIKI BAR</h2>
                          <span className="liten">{data.barNotis}</span>
                          <table border="1" width="100%">
                            <tbody>
                              {data.drinker.map((d, i) => (
                                <tr key={i}>
                                  <td style={{ color: DRINK_FARGER[i % DRINK_FARGER.length], fontWeight: "bold" }}>{d.navn}</td>
                                  <td>{d.innhold}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <br />
                          <span className="liten gul">alle drinker serveres med paraply</span>
                        </div>

                        <br />

                        <div className="boks volleyballBoks">
                          <h4>VOLLEYBALL</h4>
                          <p>{data.volleyballTekst}</p>
                          <div className="volleyballBane">
                            <span className="volleyball">🏐</span>
                          </div>
                        </div>

                        <br />

                        <div className="boks">
                          <h3>BLOMSTERKRANSER</h3>
                          <p>{data.kransTekst}</p>
                          <img src={data.bilder.krans} />
                        </div>

                        <br />

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

                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <center>
                  <img src={data.bilder.bygging} width="400" height="60" />
                  <hr />
                  <span className="liten" style={{ color: "#000000" }}>
                    Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;
                    <a href="#">klikk her</a> for spørsmål
                    <br />
                    Best viewed in 1024x768
                    <br />
                    Du er besøkende nummer {data.besokende}
                  </span>
                  <br /><br />
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>

      <style jsx global>{`
        body {
          font-family: "Comic Sans MS", "Comic Sans", cursive !important;
        }
      `}</style>

      <style jsx>{`
        .oceanBg {
          font-family: "Comic Sans MS", "Comic Sans", cursive;
          min-height: 100vh;
          padding-bottom: 40px;
          background: linear-gradient(180deg, #bde0fe 0%, #90e0ef 35%, #48cae4 60%, #0096c7 75%, #f4e3b2 100%);
          background-size: 200% 200%;
          animation: ripple 8s ease-in-out infinite;
          position: relative;
          overflow-x: hidden;
        }

        @keyframes ripple {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 0%; }
        }

        :global(.boks) {
          background: rgba(255, 255, 255, 0.18) !important;
          backdrop-filter: blur(6px);
          border-radius: 32px !important;
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 16px !important;
          color: #012a4a !important;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
          font-weight: bold;
        }

        :global(table) {
          border-radius: 32px;
        }

        :global(.knapp) {
          border-radius: 32px !important;
        }

        .hula {
          font-size: 48px;
          display: inline-block;
          animation: danceHula 1.2s ease-in-out infinite;
        }

        @keyframes danceHula {
          0% { transform: rotate(-15deg) translateY(0); }
          25% { transform: rotate(10deg) translateY(-8px); }
          50% { transform: rotate(-10deg) translateY(0); }
          75% { transform: rotate(15deg) translateY(-8px); }
          100% { transform: rotate(-15deg) translateY(0); }
        }

        .flyingDrink {
          position: fixed;
          left: -120px;
          font-size: 40px;
          z-index: 9000;
          pointer-events: none;
          animation-name: flyAcross;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes flyAcross {
          0% { left: -120px; opacity: 0; }
          2% { opacity: 1; }
          20% { left: 110vw; opacity: 1; }
          22% { opacity: 0; }
          100% { left: 110vw; opacity: 0; }
        }

        .clownOverlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 220px;
          background: radial-gradient(circle, rgba(255,0,0,0.35) 0%, rgba(0,0,0,0.6) 100%);
          z-index: 99999;
          pointer-events: none;
          opacity: 0;
          animation: clownFlash 15s infinite;
        }

        @keyframes clownFlash {
          0%, 96%, 100% { opacity: 0; transform: scale(1); }
          97% { opacity: 1; transform: scale(1.15) rotate(-4deg); }
          98% { opacity: 1; transform: scale(1) rotate(4deg); }
          99% { opacity: 1; transform: scale(1.1) rotate(-2deg); }
        }

        .volleyballBoks {
          overflow: hidden;
        }

        .volleyballBane {
          position: relative;
          height: 50px;
        }

        .volleyball {
          position: absolute;
          left: 0;
          font-size: 32px;
          animation: spikeBall 3s ease-in-out infinite alternate;
        }

        @keyframes spikeBall {
          0% { left: 0; transform: rotate(0deg); }
          100% { left: 80%; transform: rotate(360deg); }
        }

        .vipWrapper {
          text-align: center;
        }

        .vip3d {
          perspective: 1000px;
          margin: 12px 0;
        }

        .vipCard {
          display: inline-block;
          background: rgba(255, 215, 0, 0.15);
          border: 2px solid gold;
          border-radius: 32px;
          padding: 16px;
          transform-style: preserve-3d;
          animation: rotate3d 8s linear infinite;
        }

        @keyframes rotate3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        .glowList {
          list-style: none;
          padding: 0;
          margin: 8px 0 0 0;
          text-align: left;
        }

        .glowPoint {
          color: gold;
          animation: glow 1.6s ease-in-out infinite;
          margin: 4px 0;
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 4px gold, 0 0 8px orange; }
          50% { text-shadow: 0 0 14px gold, 0 0 24px orange; }
        }

        .chatbot {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .chatbotBubble {
          background: white;
          color: #012a4a;
          border-radius: 32px;
          padding: 8px 14px;
          margin-bottom: 6px;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          animation: bubbleBounce 2s ease-in-out infinite;
        }

        .chatbotAvatar {
          font-size: 40px;
          background: white;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          animation: bubbleBounce 2s ease-in-out infinite;
        }

        @keyframes bubbleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
