import LevelBars from "./LevelBars";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="layer grid" />
      <div className="layer vig" />
      <div className="wrap hero-in">
        <div>
          <div className="eyebrow">
            <span className="lamp" />
            <span className="lbl" style={{ color: "var(--accent-primary)" }}>
              // available 2026 — europe, us, canada
            </span>
          </div>
          <h1>
            BOBBY
            <br />
            LYTE
          </h1>
          <p className="lead">
            Day sets that open a room, night sets that hold it, and a live set of all original music.
          </p>
          <div className="chips" style={{ margin: "var(--space-6) 0" }}>
            <span className="chip chip-signal">
              <span className="dot" />
              Sevilla, ES
            </span>
            <span className="chip">@bobbyflowstate</span>
            <span className="chip">60 – 180 min</span>
            <span className="chip">Day // Night // Live</span>
          </div>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", alignItems: "center" }}>
            <a className="btn btn-signal btn-lg" href="#booking">
              Book →<span className="cursor">▮</span>
            </a>
            <a className="btn btn-ghost btn-lg" href="#sets">
              Hear a set
            </a>
          </div>
        </div>
        <div className="hero-side">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mark-signal-ball-square.svg" alt="" />
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <LevelBars />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="lbl">live signal</span>
              <span className="lbl" style={{ color: "var(--accent-primary)" }}>
                on
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
