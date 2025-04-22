import { IconType } from "@/types/public/icon.types";

export default function ArrowToIcon({ width, height, className }: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_205_5851)">
        <path
          d="M10.0031 19.6V10H19.5928"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0002 10L21.9873 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_205_5851">
          <rect width="32" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
