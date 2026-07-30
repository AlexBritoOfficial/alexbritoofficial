import { ImageResponse } from "next/og";

// PORT-9: generated "AB" monogram favicon (accent on dark), no asset file needed.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16171c",
          color: "#ee8a4e",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 6,
        }}
      >
        AB
      </div>
    ),
    { ...size },
  );
}