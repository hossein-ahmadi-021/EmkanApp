import { IconType } from "@/types/public/icon.types";

export default function HalfCircleIcon({ width, height, className }: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0017 2.72727C8.22553 2.72727 2.73069 8.22464 2.73069 15.0017C2.73069 21.7783 8.22509 27.2727 15.0017 27.2727V30C6.71886 30 0.00341797 23.2846 0.00341797 15.0017C0.00341797 6.71929 6.71841 0 15.0017 0C23.2846 0 30 6.71544 30 14.9983H27.2727C27.2727 8.22167 21.7783 2.72727 15.0017 2.72727Z"
        fill="currentColor"
      />
    </svg>
  );
}
