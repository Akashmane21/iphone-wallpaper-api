import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const clientId = searchParams.get("clientId");
  const width = Number(searchParams.get("width")) || 1290;
  const height = Number(searchParams.get("height")) || 2796;

  // ---- Guard: only one client for now ----
  if (clientId !== "client_gym_001") {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            color: "#fff",
            fontSize: 48,
          }}
        >
          INVALID CLIENT
        </div>
      ),
      { width, height }
    );
  }

  // ---- Time logic (24h gym on weekdays) ----
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const isWeekday = day >= 1 && day <= 5;

  const timeLabel = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // ---- GYM WALLPAPER ----
  if (isWeekday) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "48px",
            width: "100%",
            height: "100%",
            paddingTop: "180px",
            paddingBottom: "220px",
            paddingLeft: "90px",
            paddingRight: "90px",
            backgroundColor: "#0B0F1A",
backgroundImage: `
  radial-gradient(
    circle at center,
    rgba(255, 90, 31, 0.18),
    rgba(11, 15, 26, 0) 55%
  ),
  linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(11, 15, 26, 0) 35%
  ),
  linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.85),
    rgba(11, 15, 26, 0) 50%
  )
`,color: "#ffffff",
          }}
        >
          {/* TOP */}
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-2px",
            }}
          >
            GO TO THE GYM
          </div>

         <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "380px",
    //height: "280px",
    borderRadius: "28px",
    background:
      "radial-gradient(circle, rgba(255,90,31,0.35), rgba(0,0,0,0) 70%)",
  }}
>
  <img
    src="https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-man-character-training-at-the-gym-vector-illustration-png-image_10160358.png"
    alt="Gym Illustration"
    style={{
      //width: "260px",
      height: "460px",
      borderRadius: "20px",
      display: "flex",
    }}
  />
</div>

          {/* CENTER */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 38,
              opacity: 0.75,
              lineHeight: 1.4,
              maxWidth: "85%",
            }}
          >
            <div style={{ display: "flex" }}>
              You promised yourself discipline.
            </div>
            <div style={{ display: "flex" }}>
              Comfort is lying to you.
            </div>
          </div>

          {/* BOTTOM */}
          <div
            style={{
              display: "flex",
              fontSize: 28,
              opacity: 0.5,
              letterSpacing: "2px",
            }}
          >
            {timeLabel} • DISCIPLINE MODE
          </div>
        </div>
      ),
      { width, height }
    );
  }

  // ---- FALLBACK WALLPAPER (WEEKEND) ----
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #0f2027, #203a43)",
          color: "#ffffff",
          fontSize: 44,
          opacity: 0.85,
        }}
      >
        Focus on what matters
      </div>
    ),
    { width, height }
  );
}