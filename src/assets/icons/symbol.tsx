import { IconType } from "@/types/public/icon.types";

export default function SymbolIcon({ width, height, color }: IconType) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99875 11.9987C7.99875 7.58151 4.41724 4 0 4V0C6.62638 0 11.9987 5.37237 11.9987 11.9987C11.9987 18.6245 6.62703 24 0 24V20C4.41659 20 7.99875 16.4166 7.99875 11.9987Z"
        fill={color}
      />
    </svg>
  );
}
