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
      <style>{`
        .side {
          min-height: 100vh;
          background: linear-gradient(
            to bottom,
            #ff9966 0%,
            #ff5e62 25%,
            #ffd39955 55%,
            #f4d58d 60%,
            #e9c46a 100%
          );
          font-family: "Comic Sans MS", "Trebuchet MS", sans-serif;
          overflow-x: hidden;
        }

        .flybanner {
          position: relative;
          width: 100%;
          height: 10vh;
          overflow: hidden;
          background: rgba(255,255,255,0.08);
        }
        .fly-rigg {
          position: absolute;
          top: 15%;
          left: -60%;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: flytur 14s linear infinite;
          white-space: nowrap;
        }
        .fly-emoji {
          font-size: 6vh;
          transform: scaleX(-1);
        }
        .fly-taustripe {
          width: 40px;
          height: 2px;
          background: #333;
        }
        .fly-banner-tekst {
          background: #f8f4e3;
          border: 3px solid #333;
          border-radius: 4px;
          padding: 4px 18px;
          font-weight: bold;
          font-size: 3vh;
          color: #cc0000;
          letter-spacing: 2px;
        }
        @keyframes flytur {
          from { left: -60%; }
          to { left: 160%; }
        }

        .bodybuilder-header {
          text-align: center;
          padding: 10px;
        }
        .bodybuilder-header .rop {
          display: inline-block;
          background: #fff;
          border: 3px solid #222;
          border-radius: 20px;
          padding: 10px 20px;
          font-weight: bold;
          font-size: 1.4rem;
          color: #222;
          position: relative;
        }
        .bodybuilder-header .emoji {
          font-size: 4rem;
          display: block;
        }

        .meny-planke {
          background: linear-gradient(#a9642a, #7a4419);
          border: 3px solid #5c3110;
          border-radius: 6px;
          padding: 10px 14px;
          margin: 10px 0;
          text-align: center;
          box-shadow: 0 3px 4px rgba(0,0,0,0.4);
        }
        .meny-planke a {
          color: #fff2d8;
          text-decoration: none;
          font-weight: bold;
          text-shadow: 1px 1px 2px #3a2004;
        }
        .meny-planke:hover {
          filter: brightness(1.15);
        }
        .meny-tittel-planke {
          background: linear-gradient(#7a4419, #5c3110);
          color: #ffe9b3;
          text-align: center;
          font-weight: bold;
          padding: 10px;
          border: 3px solid #3a2004;
          border-radius: 6px;
          margin-bottom: 6px;
        }

        .innhold-omrade {
          display: flex;
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          align-items: flex-start;
        }

        .solboks {
          position: relative;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #fff2b0, #ffcc33 60%, #ff9900);
          box-shadow: 0 0 20px 6px rgba(255, 204, 51, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: bold;
          font-size: 0.85rem;
          color: #7a4a00;
          cursor: pointer;
          margin: 12px;
        }
        .sol-innhold {
          display: none;
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          width: 260px;
          background: #fffdf5;
          border: 3px solid #ffcc33;
          border-radius: 10px;
          padding: 14px;
          text-align: left;
          font-weight: normal;
          color: #333;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .solboks:hover .sol-innhold {
          display: block;
        }
        .sol-rekke {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .knapp {
          display: inline-block;
          background: #ff9900;
          color: #fff;
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 8px;
        }
      `}</style>

      <div className="flybanner">
        <div className="fly-rigg">
          <span className="fly-emoji">✈️</span>
          <span className="fly-taustripe"></span>
          <span className="fly-banner-tekst">BEKK BEACH CLUB</span>
        </div>
      </div>

      <div className="bodybuilder-header">
        <span className="emoji">🏋️</span>
        <div className="rop">Velkommen til tidenes fest!</div>
      </div>

      <center>
        <span className="blink" style={{ color: "#ff0000", fontWeight: "bold" }}>{data.alarm}</span>
        <br />
        <span className="liten" style={{ color: "#ffffff" }}>{data.bandHint}</span>
      </center>

      <div className="innhold-omrade">
        <div style={{ width: 200, flexShrink: 0 }}>
          <div className="meny-tittel-planke">MENY</div>
          {data.meny.map((m, i) => (
            <div className="meny-planke" key={i}>
              <a href={m == "bar" ? "/bar" : m == "kontakt" ? "/kontakt" : "#"}>{m}</a>
            </div>
          ))}
          <center>
            <img src={data.bilder.palme} width="150" height="200" />
            <br />
            <span className="liten">palme</span>
          </center>
        </div>

        <div style={{ flex: 1 }}>
          <div className="sol-rekke">
            <div className="solboks">
              NÅR OG HVOR
              <div className="sol-innhold">
                <h3>NÅR OG HVOR</h3>
                <h1>Hver dag</h1>
                <p>Tid: {data.tid} &nbsp;&nbsp; Sted: {data.sted} &nbsp;&nbsp; Påmeldte: {data.antallPaameldte}</p>
                <p>Linjeforening: {data.linjeforening}</p>
                <p>{data.dresscode}</p>
              </div>
            </div>

            <div className="solboks">
              VIP INVITASJON
              <div className="sol-innhold">
                <h4>VIP INVITASJONSKORT</h4>
                <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
                <div className="knapp" onClick={() => alert("kommer snart")}>
                  Se kortet
                </div>
              </div>
            </div>

            <div className="solboks">
              TIKI BAR
              <div className="sol-innhold">
                <h2>TIKI BAR</h2>
                <span className="liten">{data.barNotis}</span>
                <table border="1" width="100%">
                  <tbody>
                    {data.drinker.map((d, i) => (
                      <tr key={i}><td>{d.navn}</td><td>{d.innhold}</td></tr>
                    ))}
                  </tbody>
                </table>
                <br />
                <span className="liten gul">alle drinker serveres med paraply</span>
              </div>
            </div>

            <div className="solboks">
              VOLLEYBALL
              <div className="sol-innhold">
                <h4>VOLLEYBALL</h4>
                <p>{data.volleyballTekst}</p>
              </div>
            </div>

            <div className="solboks">
              BLOMSTERKRANSER
              <div className="sol-innhold">
                <h3>BLOMSTERKRANSER</h3>
                <p>{data.kransTekst}</p>
                <img src={data.bilder.krans} />
              </div>
            </div>

            <div className="solboks">
              MELD DEG PÅ
              <div className="sol-innhold">
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
          </div>
        </div>
      </div>

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
    </div>
  );
}
