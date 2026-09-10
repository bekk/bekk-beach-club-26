"use client";

import { useState } from "react";
import data from "./data.json";

const MENY_LABELS = {
  hjem: "Hjem",
  forside: "Hjem",
  bar: "Tiki-bar",
  program: "Program",
  pamelding: "Meld deg på",
  påmelding: "Meld deg på",
  kontakt: "Kontakt oss",
  vip: "VIP",
  nyheter: "Nyheter",
};

function menyHref(m) {
  const s = m.toLowerCase();
  if (s === "bar") return "/bar";
  if (s === "kontakt") return "/kontakt";
  if (s.includes("vip")) return "#vip";
  if (s.includes("nyhet")) return "#nyheter";
  if (s.includes("volleyball")) return "#volleyball";
  if (s.includes("krans") || s.includes("blomst")) return "#kranser";
  if (s.includes("meld") || s.includes("påmeld") || s.includes("pameld")) return "#pamelding";
  if (s.includes("tid") || s.includes("sted") || s.includes("når") || s.includes("hvor")) return "#nar-og-hvor";
  if (s.includes("hjem") || s.includes("forside")) return "#topp";
  return "#";
}

function menyLabel(m) {
  return MENY_LABELS[m.toLowerCase()] || m.charAt(0).toUpperCase() + m.slice(1);
}

const EPOST_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Home() {
  const [mobilMenyApen, setMobilMenyApen] = useState(false);
  const [skjema, setSkjema] = useState({ navn: "", epost: "", allergier: "", kommer: false });
  const [feilVist, setFeilVist] = useState({ navn: false, epost: false });
  const [sendt, setSendt] = useState(false);
  const aar = 2026;

  const feil = {
    navn: skjema.navn.trim().length === 0 ? "Navn må fylles ut" : "",
    epost: !EPOST_REGEX.test(skjema.epost) ? "Ugyldig e-postadresse" : "",
  };
  const skjemaGyldig = !feil.navn && !feil.epost;

  function oppdater(felt, verdi) {
    setSkjema((s) => ({ ...s, [felt]: verdi }));
  }

  function sendInn(e) {
    e.preventDefault();
    setFeilVist({ navn: true, epost: true });
    if (!skjemaGyldig) return;
    setSendt(true);
  }

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Manrope:wght@400;500;700&display=swap");

        :root {
          --sand: #faf4e7;
          --sand-dark: #efe4cd;
          --teal-900: #0b3d3f;
          --teal-700: #146b6e;
          --coral: #ff6f59;
          --coral-dark: #e14f3a;
          --ink: #1f2d2d;
          --muted: #5c6b6b;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: var(--sand);
          color: var(--ink);
          font-family: "Manrope", system-ui, sans-serif;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "Fraunces", Georgia, serif;
          color: var(--teal-900);
          margin: 0 0 0.4em;
        }

        a {
          color: var(--teal-700);
        }
      `}</style>

      <div id="topp" style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            background: "var(--teal-900)",
            color: "var(--sand)",
          }}
        >
          <div
            style={{
              maxWidth: "1080px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              gap: "16px",
            }}
          >
            <strong style={{ fontFamily: "Fraunces, serif", fontSize: "20px", color: "var(--sand)" }}>
              {data.tittel}
            </strong>

            <button
              aria-label="Åpne meny"
              onClick={() => setMobilMenyApen((v) => !v)}
              style={{
                display: "none",
                background: "none",
                border: "1px solid var(--sand)",
                color: "var(--sand)",
                borderRadius: "6px",
                padding: "6px 10px",
              }}
              className="hamburger"
            >
              ☰
            </button>

            <nav
              className="hovedmeny"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                alignItems: "center",
              }}
            >
              {data.meny.map((m, i) => (
                <a
                  key={i}
                  href={menyHref(m)}
                  style={{
                    color: "var(--sand)",
                    textDecoration: "none",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {menyLabel(m)}
                </a>
              ))}
              <a
                href="#pamelding"
                style={{
                  background: "var(--coral)",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Meld deg på
              </a>
            </nav>
          </div>
        </header>

        <main style={{ padding: "24px 20px 0" }}>
          <section
            style={{
              textAlign: "center",
              background: "var(--teal-700)",
              color: "var(--sand)",
              borderRadius: "16px",
              padding: "32px 20px",
              marginBottom: "24px",
            }}
          >
            <div style={{ overflow: "hidden", whiteSpace: "nowrap", marginBottom: "12px" }}>
              <span style={{ fontSize: "18px" }}>{data.banner}</span>
            </div>
            <span
              style={{
                display: "inline-block",
                background: "var(--coral)",
                color: "#fff",
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                marginBottom: "8px",
              }}
            >
              {data.alarm}
            </span>
            <p style={{ opacity: 0.9 }}>{data.bandHint}</p>
          </section>

          <section
            id="pamelding"
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
              boxShadow: "0 2px 10px rgba(11,61,63,0.08)",
            }}
          >
            <h4 style={{ color: "var(--coral-dark)" }}>MELD DEG PÅ</h4>
            {sendt ? (
              <p style={{ color: "var(--teal-700)", fontWeight: 700 }}>
                Takk, {skjema.navn}! Vi har registrert påmeldingen din.
              </p>
            ) : (
              <form onSubmit={sendInn} noValidate>
                <div style={{ display: "grid", gap: "12px", maxWidth: "420px" }}>
                  <label>
                    Navn
                    <input
                      type="text"
                      value={skjema.navn}
                      onChange={(e) => oppdater("navn", e.target.value)}
                      onBlur={() => setFeilVist((f) => ({ ...f, navn: true }))}
                      style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                    />
                    {feilVist.navn && feil.navn && (
                      <span style={{ color: "var(--coral-dark)", fontSize: "13px" }}>{feil.navn}</span>
                    )}
                  </label>

                  <label>
                    Epost
                    <input
                      type="text"
                      value={skjema.epost}
                      onChange={(e) => oppdater("epost", e.target.value)}
                      onBlur={() => setFeilVist((f) => ({ ...f, epost: true }))}
                      style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                    />
                    {feilVist.epost && feil.epost && (
                      <span style={{ color: "var(--coral-dark)", fontSize: "13px" }}>{feil.epost}</span>
                    )}
                  </label>

                  <label>
                    Allergier
                    <input
                      type="text"
                      value={skjema.allergier}
                      onChange={(e) => oppdater("allergier", e.target.value)}
                      style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                    />
                  </label>

                  <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                      type="checkbox"
                      checked={skjema.kommer}
                      onChange={(e) => oppdater("kommer", e.target.checked)}
                    />
                    Jeg kommer
                  </label>

                  <button
                    type="submit"
                    disabled={!skjemaGyldig}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "999px",
                      border: "none",
                      fontWeight: 700,
                      cursor: skjemaGyldig ? "pointer" : "not-allowed",
                      background: skjemaGyldig ? "var(--coral)" : "#ccc",
                      color: skjemaGyldig ? "#fff" : "#888",
                    }}
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </section>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <aside style={{ flex: "0 0 180px" }}>
              <img src={data.bilder.palme} width="150" height="200" alt="Palme" style={{ borderRadius: "12px" }} />
            </aside>

            <div style={{ flex: "1 1 400px" }}>
              <section
                id="nar-og-hvor"
                style={{ background: "#fff", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}
              >
                <h3>Når og hvor</h3>
                <h1>Hver dag</h1>
                <p>
                  Tid: {data.tid} &nbsp;&nbsp; Sted: {data.sted} &nbsp;&nbsp; {data.antallAbakulere} abakulere
                </p>
                <p>Linjeforening: {data.linjeforening}</p>
                <p>{data.dresscode}</p>
              </section>

              <section
                id="nyheter"
                style={{ background: "#fff", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}
              >
                <h4>Nyheter</h4>
                <h3>{data.nyhetTittel}</h3>
                <p>{data.nyhetTekst}</p>
              </section>

              <section
                id="vip"
                style={{ background: "#fff", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}
              >
                <h4>VIP-invitasjonskort</h4>
                <p dangerouslySetInnerHTML={{ __html: data.vipTekst }}></p>
                <button
                  disabled
                  aria-disabled="true"
                  title="Ikke tilgjengelig ennå"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "999px",
                    border: "none",
                    background: "#ccc",
                    color: "#888",
                    cursor: "not-allowed",
                    fontWeight: 700,
                  }}
                >
                  Se kortet (kommer snart)
                </button>
              </section>

              <section
                id="tiki-bar"
                style={{ background: "#fff", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}
              >
                <h2>Tiki-bar</h2>
                <p style={{ color: "var(--muted)" }}>{data.barNotis}</p>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {data.drinker.map((d, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--sand-dark)" }}>
                        <td style={{ padding: "6px 0", fontWeight: 700 }}>{d.navn}</td>
                        <td style={{ padding: "6px 0", color: "var(--muted)" }}>{d.innhold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ color: "var(--coral-dark)", fontSize: "13px" }}>
                  Alle drinker serveres med paraply
                </p>
              </section>

              <section
                id="volleyball"
                style={{ background: "#fff", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}
              >
                <h4>Volleyball</h4>
                <p>{data.volleyballTekst}</p>
              </section>

              <section
                id="kranser"
                style={{ background: "#fff", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}
              >
                <h3>Blomsterkranser</h3>
                <p>{data.kransTekst}</p>
                <img src={data.bilder.krans} alt="Blomsterkrans" style={{ maxWidth: "100%", borderRadius: "12px" }} />
              </section>
            </div>
          </div>

          <footer style={{ textAlign: "center", padding: "24px 0 40px", color: "var(--muted)" }}>
            <img src={data.bilder.bygging} width="400" height="60" alt="Bekk Beach Club" />
            <hr style={{ border: "none", borderTop: "1px solid var(--sand-dark)", margin: "16px 0" }} />
            <span style={{ fontSize: "13px" }}>
              Bekk Beach Club {aar} &nbsp;|&nbsp; laget av festkomiteen
              <br />
              Du er besøkende nummer {data.besokende}
            </span>
          </footer>
        </main>
      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          .hovedmeny {
            display: ${mobilMenyApen ? "flex" : "none"} !important;
            flex-direction: column;
            width: 100%;
          }
          .hamburger {
            display: inline-block !important;
          }
        }
      `}</style>
    </>
  );
}
