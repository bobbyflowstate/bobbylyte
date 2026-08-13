export default function PressSection() {
  return (
    <section id="press" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sechead">
          <div>
            <span className="eb">// press</span>
            <h2>Everything an agent needs.</h2>
          </div>
          <span className="meta">EPK // LOGOS // PHOTOS</span>
        </div>
        <div className="presscards">
          <div className="panel">
            <span className="lbl lbl-signal">// epk</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "16px", color: "var(--text-strong)", margin: "var(--space-3) 0 var(--space-2)" }}>
              One-page EPK
            </h4>
            <span className="lbl">Bio, sets, dates, contact — PDF</span>
            <div style={{ marginTop: "var(--space-4)" }}>
              <button className="btn btn-ghost btn-sm" disabled>
                Pending
              </button>
            </div>
          </div>

          <div className="panel">
            <span className="lbl lbl-signal">// marks</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "16px", color: "var(--text-strong)", margin: "var(--space-3) 0 var(--space-2)" }}>
              Logo pack
            </h4>
            <span className="lbl">Wordmark, mark, endorsement lock — SVG</span>
            <div style={{ marginTop: "var(--space-4)" }}>
              <a className="btn btn-ghost btn-sm" href="/assets/logo-bobby-lyte-horizontal.svg" download>
                Download
              </a>
            </div>
          </div>

          <div className="panel">
            <span className="lbl lbl-signal">// photos</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "16px", color: "var(--text-strong)", margin: "var(--space-3) 0 var(--space-2)" }}>
              Press photos
            </h4>
            <span className="lbl">Hi-res, awaiting supply</span>
            <div style={{ marginTop: "var(--space-4)" }}>
              <button className="btn btn-ghost btn-sm" disabled>
                Pending
              </button>
            </div>
          </div>

          <div className="panel">
            <span className="lbl lbl-signal">// video</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "16px", color: "var(--text-strong)", margin: "var(--space-3) 0 var(--space-2)" }}>
              Live clips
            </h4>
            <span className="lbl">YouTube — night set, Sevilla</span>
            <div style={{ marginTop: "var(--space-4)" }}>
              <a className="btn btn-ghost btn-sm" href="https://www.youtube.com/watch?v=j__KGVRYHHY" target="_blank" rel="noopener noreferrer">
                Watch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
