export default function SignalSection() {
  return (
    <section id="signal" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sechead">
          <div>
            <span className="eb">// signal</span>
            <h2>Who's behind the decks.</h2>
          </div>
        </div>
        <div className="two">
          <div>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--text-body)" }}>
              Bobby Lyte is a DJ and producer who came up through the San Francisco and Burning Man scenes and is now based in Sevilla, Spain. His day sets are bright, dancey, and full of energy — built to get people moving. His night sets stay energetic but go deeper and more euphoric. He also performs a live set of entirely original production.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--text-body)" }}>
              A regular at DeMentha / Burning Man and across the Seville underground, he's the founder of Flow State Radio and the first DJ of SOL3CTA.
            </p>
            <p className="quote" style={{ marginTop: "var(--space-6)" }}>
              The low-end finds you before the lights do.
            </p>
          </div>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <div className="panel panel-dark">
              <span className="lbl lbl-signal">// press photo</span>
              <div className="photoslot" style={{ marginTop: "var(--space-4)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/mark-signal-ball-line.svg"
                  height="64"
                  alt=""
                  style={{ color: "var(--border-strong)" }}
                />
                <span className="lbl">hi-res press photo — awaiting supply</span>
              </div>
            </div>
            <div className="panel">
              <span className="lbl lbl-signal">// stats</span>
              <div style={{ display: "grid", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
                <div className="statrow">
                  <span className="lbl">instagram</span>
                  <span>
                    <span className="statval">1K+</span> <span className="lbl">followers</span>
                  </span>
                </div>
                <div className="statrow">
                  <span className="lbl">youtube</span>
                  <span>
                    <span className="statval">2K+</span> <span className="lbl">subscribers</span>
                  </span>
                </div>
                <div className="statrow">
                  <span className="lbl">soundcloud</span>
                  <span>
                    <span className="statval" style={{ color: "var(--text-muted)" }}>
                      —
                    </span>{" "}
                    <span className="lbl">stats pending</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
