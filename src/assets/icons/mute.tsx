import { IconType } from "@/types/public/icon.types";

export default function MuteIcon({ width, height, className }: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.53624 0.26388C1.18524 -0.08796 0.614877 -0.08796 0.26388 0.26388C-0.08796 0.614877 -0.08796 1.18524 0.26388 1.53624L16.4638 17.7361C16.8148 18.088 17.3851 18.088 17.7361 17.7361C18.088 17.3851 18.088 16.8148 17.7361 16.4638L15.3003 14.0271V2.70229C15.3003 1.36074 13.8845 0.49003 12.6872 1.09664L7.25847 3.84479H5.11704L1.53624 0.26388ZM6.91676 5.6444L13.4997 12.2274V2.70229L7.68895 5.6444H6.91676Z"
        fill="currentColor"
      />
      <path
        d="M7.68759 12.3554L10.9157 13.9897L13.9632 17.0372C13.5582 17.1469 13.1085 17.1174 12.6858 16.903L7.25708 14.1549H4.49878C3.504 14.1549 2.69824 13.3491 2.69824 12.3552V5.77222L4.49878 7.57192V12.3552L7.68759 12.3554Z"
        fill="currentColor"
      />
    </svg>
  );
}
