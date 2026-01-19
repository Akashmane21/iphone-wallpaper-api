import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const width = Number(searchParams.get("width")) || 1290;
  const height = Number(searchParams.get("height")) || 2796;
  const text = searchParams.get("text") || "Hello Akash";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          color: "white",
          fontSize: 96,
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
    ),
    {
      width,
      height,
    }
  );
}