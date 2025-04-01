import { IconType } from "@/types/public/icon.types";

export default function MiniHalfCircle({ width, height, className }: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 68 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64.8204 3C64.8204 19.7774 51.2194 33.38 34.444 33.38C17.6687 33.38 4.06006 19.7774 4.06006 3"
        stroke="#104946"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
