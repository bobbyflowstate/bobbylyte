"use client";

import { useState } from "react";

type TabPane = "night" | "day" | "live";

export default function SetsSection() {
  const [activePane, setActivePane] = useState<TabPane>("night");

  return (
    <section id="sets">
      <div className="wrap">
        <div className="sechead">
          <div>
            <span className="eb">// what i play</span>
            <h2>Pick the room.</h2>
          </div>
          <span className="meta">DAY // NIGHT // LIVE</span>
        </div>

        <div className="tabs" role="tablist">
          <button
            className="tab"
            role="tab"
            aria-selected={activePane === "night"}
            onClick={() => setActivePane("night")}
          >
            Night sets
          </button>
          <button
            className="tab"
            role="tab"
            aria-selected={activePane === "day"}
            onClick={() => setActivePane("day")}
          >
            Day sets
          </button>
          <button
            className="tab"
            role="tab"
            aria-selected={activePane === "live"}
            onClick={() => setActivePane("live")}
          >
            Live set
          </button>
        </div>

        <div className="setpanes">
          {/* Night Sets Pane */}
          <div data-pane="night" hidden={activePane !== "night"}>
            <p style={{ color: "var(--text-body)", margin: "0 0 var(--space-5)" }}>
              Driving, deep, momentum-building — for peak-time and after-dark rooms.
            </p>
            <div className="setgrid">
              <article className="embed">
                <h4>Techno, Indie Dance — B2B Vinyl & Digital</h4>
                <span className="lbl">night set</span>
                <div className="chips">
                  <span className="chip">Techno</span>
                  <span className="chip">Indie Dance</span>
                </div>
                <div className="well">
                  <iframe
                    height="200"
                    loading="lazy"
                    src="https://www.youtube-nocookie.com/embed/j__KGVRYHHY"
                    title="Techno, Indie Dance — Sevilla"
                    allow="encrypted-media;picture-in-picture"
                  />
                </div>
              </article>

              <article className="embed">
                <h4>Afro house — Burning Man</h4>
                <span className="lbl">DeMentha // Axolotl 2025</span>
                <div className="chips">
                  <span className="chip">Afro House</span>
                  <span className="chip">Tech House</span>
                </div>
                <div className="well">
                  <iframe
                    height="140"
                    loading="lazy"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fbobbyflowstate%2Ftech-house-afro-house-inspired-by-wednesday-dementha-takeover-axolotl-burning-man-2025&color=%2335FF9E&inverse=true&auto_play=false&show_user=true"
                    title="Afro house — Burning Man"
                  />
                </div>
              </article>

              <article className="embed">
                <h4>Afro house &amp; techno — Seville</h4>
                <span className="lbl">Noche de Setas 7 // Glitteratti</span>
                <div className="chips">
                  <span className="chip">Afro House</span>
                  <span className="chip">Techno</span>
                </div>
                <div className="well">
                  <iframe
                    height="140"
                    loading="lazy"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fbobbyflowstate%2Findie-dance-afro-house-techno-noche-de-setas-7-by-glitteratti-sevilla-spain&color=%2335FF9E&inverse=true&auto_play=false&show_user=true"
                    title="Afro house and techno — Seville"
                  />
                </div>
              </article>
            </div>
          </div>

          {/* Day Sets Pane */}
          <div data-pane="day" hidden={activePane !== "day"}>
            <p style={{ color: "var(--text-body)", margin: "0 0 var(--space-5)" }}>
              Groove-forward, melodic, room-opening & energetic — for daytime, sunset, and warm-up slots.
            </p>
            <div className="setgrid">
              <article className="embed">
                <h4>Indie dance, funk &amp; tech house — Burning Man</h4>
                <span className="lbl">DeMentha // Thu 1PM opening 2024</span>
                <div className="chips">
                  <span className="chip">Indie Dance</span>
                  <span className="chip">Nu Disco</span>
                </div>
                <div className="well">
                  <iframe
                    height="140"
                    loading="lazy"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fbobbyflowstate%2Findie-dance-nu-disco-deep-house-thursday-1-pm-opening-set-at-dementha-burning-man-2024&color=%2335FF9E&inverse=true&auto_play=false&show_user=true"
                    title="Indie dance, funk and tech house — Burning Man"
                  />
                </div>
              </article>

              <article className="embed">
                <h4>Tech house, deep house — Burning Man</h4>
                <span className="lbl">DeMentha // Tuesday 2019</span>
                <div className="chips">
                  <span className="chip">Tech House</span>
                  <span className="chip">Deep House</span>
                </div>
                <div className="well">
                  <iframe
                    height="140"
                    loading="lazy"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fbobbyflowstate%2Fdementha-2019-tues&color=%2335FF9E&inverse=true&auto_play=false&show_user=true"
                    title="Tech house, deep house — Burning Man"
                  />
                </div>
              </article>

              <article className="embed">
                <h4>Indie dance, tech house — San Francisco</h4>
                <span className="lbl">DeMentha presents Mint Manifesto</span>
                <div className="chips">
                  <span className="chip">Indie Dance</span>
                  <span className="chip">Tech House</span>
                </div>
                <div className="well">
                  <iframe
                    height="140"
                    loading="lazy"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fbobbyflowstate%2Fbobby-lyte-dementha-presents-mint-manifesto&color=%2335FF9E&inverse=true&auto_play=false&show_user=true"
                    title="Indie dance, tech house — San Francisco"
                  />
                </div>
              </article>
            </div>
          </div>

          {/* Live Set Pane */}
          <div data-pane="live" hidden={activePane !== "live"}>
            <p style={{ color: "var(--text-body)", margin: "0 0 var(--space-5)" }}>
              A performance of entirely original music performed live with MIDI controllers, Synthesizers, mixers and more. Day or night time - you pick.
            </p>
            <div className="setgrid" style={{ gridTemplateColumns: "minmax(0,1fr)" }}>
              <article className="embed">
                <h4>Live set for a late night rave - Sevilla Spain</h4>
                <span className="lbl">all original production</span>
                <div className="chips">
                  <span className="chip">Melodic House</span>
                  <span className="chip">Psychedelic</span>
                </div>
                <div className="well">
                  <iframe
                    height="140"
                    loading="lazy"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fbobbyflowstate%2Fa-melody-has-written-it&color=%2335FF9E&inverse=true&auto_play=false&show_user=true"
                    title="A Melody Has Written It"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
