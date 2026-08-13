"use client";

export default function LevelBars() {
  const bars = Array.from({ length: 24 }).map((_, i) => ({
    delay: `${(i * 0.06).toFixed(2)}s`,
    duration: `${(0.8 + (i % 5) * 0.14).toFixed(2)}s`,
  }));

  return (
    <div className="levels" id="levels">
      {bars.map((b, i) => (
        <span
          key={i}
          style={{
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  );
}
