import { IconType } from "@/types/public/icon.types";

export default function PauseIcon({ width, height, className }: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.42847 16.2858V1.71423C3.42847 0.767489 2.66098 0 1.71423 0C0.767489 0 0 0.767488 0 1.71423V16.2858C0 17.2325 0.767489 18 1.71423 18C2.66098 18 3.42847 17.2325 3.42847 16.2858Z"
        fill="currentColor"
      />
      <path
        d="M12.8572 16.2858V1.71423C12.8572 0.767489 12.0897 0 11.1429 0C10.1962 0 9.42871 0.767488 9.42871 1.71423V16.2858C9.42871 17.2325 10.1962 18 11.1429 18C12.0897 18 12.8572 17.2325 12.8572 16.2858Z"
        fill="currentColor"
      />
    </svg>
  );
}
