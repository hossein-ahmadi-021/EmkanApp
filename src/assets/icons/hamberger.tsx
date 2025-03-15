import { IconType } from "@/types/public/icon.types";

export default function HambergerIcon({
  width,
  height,
  color,
  className,
}: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 1L1 0.999998"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M31 17L1 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M31 9L1 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
