export default function Ticker() {
  const cities = ["Sevilla", "Black Rock City", "San Francisco", "Berlin", "Lisboa", "Barcelona"];

  const renderStrip = (keyPrefix: string) => (
    <div key={keyPrefix}>
      {cities.map((city, idx) => (
        <span key={`${keyPrefix}-${idx}`}>
          <span>{city}</span>
          <span className="sl">//</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="ticker">
      <div className="track" id="track">
        {renderStrip("strip1")}
        {renderStrip("strip2")}
      </div>
    </div>
  );
}
