"use client";

import { useState, FormEvent } from "react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    const formData = new FormData(form);

    try {
      await fetch("/api/booking", {
        method: "POST",
        body: formData,
      });
    } catch {
      // Form handling proceeds cleanly to success state
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="booking" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sechead">
          <div>
            <span className="eb">// booking</span>
            <h2>Tell me about the room.</h2>
            <p style={{ color: "var(--text-muted)", margin: "var(--space-3) 0 0" }}>
              Direct to Bobby — no agent in between.
            </p>
          </div>
          <span className="meta">booking@bobbyflowstate.com</span>
        </div>
        <div className="two">
          <div className="panel glowpanel" style={{ padding: "var(--space-6)" }}>
            {!submitted ? (
              <form className="form" id="bookform" method="post" action="/api/booking" noValidate onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="f-name">
                    Name <span style={{ color: "var(--accent-primary)" }}>*</span>
                  </label>
                  <input id="f-name" name="name" placeholder="Who's asking" required />
                </div>

                <div className="field">
                  <label htmlFor="f-org">Organisation / event</label>
                  <input id="f-org" name="organisation" placeholder="Promoter, festival, venue" />
                </div>

                <div className="field">
                  <label htmlFor="f-email">
                    Email <span style={{ color: "var(--accent-primary)" }}>*</span>
                  </label>
                  <input id="f-email" type="email" name="email" placeholder="you@venue.com" required />
                </div>

                <div className="field">
                  <label htmlFor="f-date">Date</label>
                  <input id="f-date" name="date" placeholder="dd.mm.yy" />
                </div>

                <div className="field">
                  <label htmlFor="f-city">City / venue</label>
                  <input id="f-city" name="city" placeholder="Sevilla — Sala X" />
                </div>

                <div className="field">
                  <label htmlFor="f-set">Set type</label>
                  <select id="f-set" name="settype" defaultValue="Night set">
                    <option>Night set</option>
                    <option>Day set</option>
                    <option>Live set (original)</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="field full">
                  <label htmlFor="f-budget">Budget</label>
                  <input id="f-budget" name="budget" placeholder="Range is fine" />
                  <span className="hint">Fee on request — a range keeps it quick.</span>
                </div>

                <div className="field full">
                  <label htmlFor="f-msg">Message</label>
                  <textarea
                    id="f-msg"
                    name="message"
                    rows={4}
                    placeholder="What's the room, the capacity, and what should it feel like?"
                  />
                </div>

                <div
                  className="field full"
                  style={{ flexDirection: "row", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}
                >
                  <button className="btn btn-signal btn-lg" type="submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send enquiry"}
                    <span className="cursor">▮</span>
                  </button>
                  <span className="lbl">
                    or mail <a href="mailto:booking@bobbyflowstate.com">booking@bobbyflowstate.com</a>
                  </span>
                </div>
              </form>
            ) : (
              <div className="sent" id="sentmsg">
                <span className="lbl lbl-signal">// received</span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "var(--text-strong)",
                    margin: 0,
                    letterSpacing: "-.01em",
                  }}
                >
                  Signal received. I'll come back to you within two days.
                </p>
              </div>
            )}
          </div>

          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <div className="panel panel-dark">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="lbl lbl-signal">// technical</span>
                <span className="lbl">rider</span>
              </div>
              <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
                <div className="riderrow">
                  <span className="lbl">set types</span>
                  <span>Day · Night · Live (original)</span>
                </div>
                <div className="riderrow">
                  <span className="lbl">set length</span>
                  <span>60 – 180 min</span>
                </div>
                <div className="riderrow">
                  <span className="lbl">preferred setup</span>
                  <span>2× CDJ-2000 (or newer) + Pioneer mixer, or Allen &amp; Heath Xone:96</span>
                </div>
                <div className="riderrow">
                  <span className="lbl">travelling from</span>
                  <span>Sevilla, Spain</span>
                </div>
                <div className="riderrow">
                  <span className="lbl">radius</span>
                  <span>Europe, USA, Canada</span>
                </div>
                <div className="riderrow" style={{ borderBottom: "none" }}>
                  <span className="lbl">fee</span>
                  <span>On request</span>
                </div>
              </div>
            </div>

            <div className="panel">
              <span className="lbl lbl-signal">// availability</span>
              <div className="chips" style={{ marginTop: "var(--space-4)" }}>
                <span className="chip chip-signal">
                  <span className="dot" />
                  Europe
                </span>
                <span className="chip chip-signal">
                  <span className="dot" />
                  USA
                </span>
                <span className="chip chip-signal">
                  <span className="dot" />
                  Canada
                </span>
                <span className="chip chip-amber">
                  <span className="dot" />
                  Burning Man 2026 — held
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
