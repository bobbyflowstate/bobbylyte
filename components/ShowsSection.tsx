const SHOWS = [
  { status: "st-on", date: "08.29.26", city: "Black Rock City", venue: "DeMentha // Burning Man", act: "Booked" },
  { status: "st-standby", date: "09.12.26", city: "Sevilla", venue: "Glitteratti // Noche de Setas", act: "Holding" },
  { status: "st-off", date: "08.28.25", city: "Black Rock City", venue: "DeMentha takeover // Axolotl", act: "" },
  { status: "st-off", date: "07.05.25", city: "Sevilla", venue: "Noche de Setas 7", act: "" },
  { status: "st-off", date: "08.29.24", city: "Black Rock City", venue: "DeMentha // Thursday opening", act: "" },
  { status: "st-off", date: "04.20.24", city: "San Francisco", venue: "DeMentha presents Mint Manifesto", act: "" },
];

export default function ShowsSection() {
  return (
    <section id="shows" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sechead">
          <div>
            <span className="eb">// rooms i've been in</span>
            <h2>Dates and scenes.</h2>
          </div>
          <span className="meta">BURNING MAN // SEVILLA // SAN FRANCISCO</span>
        </div>
        <div className="panel panel-dark" style={{ padding: 0 }}>
          {SHOWS.map((show, index) => (
            <div key={index} className="showrow">
              <span className={`st ${show.status}`} />
              <span className="date">{show.date}</span>
              <span className="city">{show.city}</span>
              <span className="venue">{show.venue}</span>
              <span className="act">{show.act}</span>
            </div>
          ))}
        </div>
        <p className="lbl" style={{ marginTop: "var(--space-5)" }}>
          DeMentha resident · Glitteratti · booked again for Burning Man 2026
        </p>
      </div>
    </section>
  );
}
