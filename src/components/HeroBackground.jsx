import { useMemo } from "react";

function HeroBackground() {

  const stars = useMemo(
    () =>
      Array.from({ length: 120 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.2,
        size: Math.random() > 0.85 ? 3 : 2,
      })),
    []
  );

  return (
<div
className="
absolute
top-0
left-0
w-full
h-[3000px]
overflow-hidden
z-0
pointer-events-none
"
>
      {/* BACKGROUND GRADIENT */}

<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#08081a] to-slate-950" />
      {/* PURPLE GLOW */}

      <div
        style={{
          position: "absolute",
          top: "-300px",
          right: "-200px",
          width: "900px",
          height: "900px",
          background: "rgba(147,51,234,0.4)",
          borderRadius: "50%",
          filter: "blur(180px)",
        }}
      />

      {/* BLUE GLOW */}

      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "-200px",
          width: "700px",
          height: "700px",
          background: "rgba(59,130,246,0.25)",
          borderRadius: "50%",
          filter: "blur(160px)",
        }}
      />
<div
    style={{
        position: "absolute",
        top: "900px",
        left: "50%",
        width: "700px",
        height: "700px",
        transform: "translateX(-50%)",
        background: "rgba(147,51,234,0.2)",
        borderRadius: "50%",
        filter: "blur(150px)",
    }}
/>
      {/* STARS */}

      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            background: "white",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* ORBIT RING 1 */}

      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "-100px",
          width: "900px",
          height: "500px",
          border: "3px solid rgba(192,132,252,0.7)",
          borderRadius: "50%",
          transform: "rotate(12deg)",
          boxShadow: "0 0 50px rgba(192,132,252,0.4)",
        }}
      />

      {/* ORBIT RING 2 */}

      <div
        style={{
          position: "absolute",
          top: "150px",
          right: "50px",
          width: "700px",
          height: "400px",
          border: "3px solid rgba(96,165,250,0.7)",
          borderRadius: "50%",
          transform: "rotate(12deg)",
          boxShadow: "0 0 40px rgba(96,165,250,0.4)",
        }}
      />

      {/* ORBIT RING 3 */}

      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "-50px",
          width: "1100px",
          height: "600px",
          border: "2px solid rgba(216,180,254,0.5)",
          borderRadius: "50%",
          transform: "rotate(12deg)",
        }}
      />
{/* FEATURES ORBIT */}

<div
    style={{
        position: "absolute",
        top: "1000px",
        left: "50%",
        width: "1000px",
        height: "500px",
        transform: "translateX(-50%) rotate(10deg)",
        border: "2px solid rgba(168,85,247,0.3)",
        borderRadius: "50%",
    }}
/>

<div
    style={{
        position: "absolute",
        top: "1100px",
        left: "55%",
        width: "800px",
        height: "400px",
        transform: "translateX(-50%) rotate(10deg)",
        border: "2px solid rgba(96,165,250,0.3)",
        borderRadius: "50%",
    }}
/>
      {/* PLANET DOTS */}

      <div
        style={{
          position: "absolute",
          top: "110px",
          right: "260px",
          width: "12px",
          height: "12px",
          background: "#d8b4fe",
          borderRadius: "50%",
          boxShadow: "0 0 20px #d8b4fe",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "260px",
          right: "120px",
          width: "8px",
          height: "8px",
          background: "#93c5fd",
          borderRadius: "50%",
          boxShadow: "0 0 15px #93c5fd",
        }}
      />

      {/* LIGHT WAVES */}

      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "0",
          width: "100%",
          height: "300px",
          borderTop: "2px solid rgba(168,85,247,0.4)",
          borderRadius: "100%",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "40px",
          width: "120%",
          height: "350px",
          borderTop: "2px solid rgba(196,181,253,0.3)",
          borderRadius: "100%",
        }}
      />

    </div>

  );
}

export default HeroBackground;