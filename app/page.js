"use client";

import data from "./data.json";

export default function Home() {
  var aar = 2026;

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <span className="logo">{data.tittel}</span>
          <nav>
            <a href="#hjem">Hjem</a>
            <a href="#info">Info</a>
            <a href="#paamelding">Påmelding</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hjem" className="hero">
          <h1>{data.tittel}</h1>
          <p className="lead">{data.banner}</p>
          <p className="muted">{data.bandHint}</p>
        </section>

        <section id="info" className="section">
          <h2>Når og hvor</h2>
          <p className="stor">Hver dag</p>
          <p>
            Tid: {data.tid} &nbsp;·&nbsp; Sted: {data.sted} &nbsp;·&nbsp; {data.antallAbakulere} abakulere
          </p>
          <p>Linjeforening: {data.linjeforening}</p>
          <p>{data.dresscode}</p>
        </section>

        <hr />

        <section className="section">
          <h3>Nyheter</h3>
          <h2>{data.nyhetTittel}</h2>
          <p>{data.nyhetTekst}</p>
        </section>

        <hr />

        <section className="section">
          <h3>VIP-invitasjonskort</h3>
          <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
          <button className="knapp" onClick={() => alert("kommer snart")}>
            Se kortet
          </button>
        </section>

        <hr />

        <section className="section">
          <h3>Tiki bar</h3>
          <p className="muted">{data.barNotis}</p>
          <table className="drinker">
            <tbody>
              {data.drinker.map((d, i) => (
                <tr key={i}>
                  <td>{d.navn}</td>
                  <td>{d.innhold}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted">Alle drinker serveres med paraply</p>
        </section>

        <hr />

        <section className="section">
          <h3>Volleyball</h3>
          <p>{data.volleyballTekst}</p>
        </section>

        <hr />

        <section className="section">
          <h3>Blomsterkranser</h3>
          <p>{data.kransTekst}</p>
        </section>

        <hr />

        <section id="paamelding" className="section">
          <h3>Meld deg på</h3>
          <form className="skjema" onSubmit={(e) => e.preventDefault()}>
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
            <label className="checkbox">
              <input type="checkbox" /> Jeg kommer
            </label>
            <button className="knapp" type="submit">
              Send
            </button>
          </form>
        </section>
      </main>

      <footer id="kontakt" className="footer">
        <p>
          Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen &nbsp;|&nbsp;{" "}
          <a href="#kontakt">klikk her</a> for spørsmål
        </p>
        <p className="muted">Du er besøkende nummer {data.besokende}</p>
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
          font-family: "Inter", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif;
          background: #ffffff;
          color: #1a1a1a;
          line-height: 1.6;
        }

        h1,
        h2,
        h3,
        h4 {
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0 0 0.5em;
        }

        a {
          color: inherit;
        }
      `}</style>

      <style jsx>{`
        .topbar {
          position: sticky;
          top: 0;
          background: #ffffff;
          border-bottom: 1px solid #eaeaea;
          z-index: 10;
        }

        .topbar-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .logo {
          font-weight: 700;
          font-size: 1.1rem;
        }

        nav {
          display: flex;
          gap: 1.5rem;
        }

        nav a {
          text-decoration: none;
          font-size: 0.95rem;
          color: #444;
        }

        nav a:hover {
          color: #1a1a1a;
        }

        main {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .hero {
          padding: 5rem 0 3rem;
          text-align: left;
        }

        .hero h1 {
          font-size: 3rem;
          font-weight: 700;
        }

        .lead {
          font-size: 1.25rem;
          color: #333;
        }

        .muted {
          color: #777;
          font-size: 0.95rem;
        }

        .stor {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .section {
          padding: 3rem 0;
        }

        .section h3 {
          text-transform: none;
          font-size: 0.9rem;
          color: #888;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        hr {
          border: none;
          border-top: 1px solid #eaeaea;
          margin: 0;
        }

        .knapp {
          display: inline-block;
          background: #1a1a1a;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-size: 0.95rem;
          cursor: pointer;
          margin-top: 1rem;
        }

        .knapp:hover {
          background: #333;
        }

        .drinker {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }

        .drinker td {
          padding: 0.6rem 0;
          border-bottom: 1px solid #eaeaea;
        }

        .skjema {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 420px;
          margin-top: 1rem;
        }

        .skjema label {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.9rem;
          color: #444;
        }

        .skjema label.checkbox {
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
        }

        .skjema input[type="text"] {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 0.6rem 0.75rem;
          font-size: 1rem;
          font-family: inherit;
        }

        .footer {
          max-width: 720px;
          margin: 0 auto;
          padding: 3rem 1.5rem 4rem;
          border-top: 1px solid #eaeaea;
          margin-top: 2rem;
          font-size: 0.9rem;
          color: #555;
        }
      `}</style>
    </>
  );
}
