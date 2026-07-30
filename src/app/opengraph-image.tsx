import { ImageResponse } from "next/og";

// PORT-9: generated social preview card for link shares.
export const alt = "Alex Brito — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#16171c",
          padding: "80px 90px",
        }}
      >
        <div
          style={{
            color: "#ee8a4e",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            color: "#ecedf0",
            fontSize: 128,
            fontWeight: 700,
            letterSpacing: -4,
            marginTop: 16,
          }}
        >
          Alex Brito
        </div>
        <div style={{ color: "#a9adb5", fontSize: 38, marginTop: 8 }}>
          Software Engineer — data platforms & mobile apps
        </div>
      </div>
    ),
    { ...size },
  );
}