import { IconType } from "@/types/public/icon.types";

export default function ArrowIcon({ width, height, className }: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.606092 0.393908C0.271356 0.728644 0.271315 1.27131 0.605998 1.606L7.87017 8.87017C8.20486 9.20486 8.74753 9.20481 9.08226 8.87008L16.3554 1.59698C16.6901 1.26225 16.6901 0.719575 16.3555 0.384891C16.0208 0.0502076 15.4781 0.0502488 15.1434 0.384984L8.47636 7.05199L1.81818 0.393815C1.4835 0.0591317 0.940827 0.0591734 0.606092 0.393908Z"
        fill="currentColor"
      />
    </svg>
  );
}
