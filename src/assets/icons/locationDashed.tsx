import { IconType } from "@/types/public/icon.types";

export default function LocationDashedIcon({
  width,
  height,
  className,
}: IconType) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.37391 12.4329C11.097 12.4329 12.4939 11.036 12.4939 9.31287C12.4939 7.58974 11.097 6.19287 9.37391 6.19287C7.65078 6.19287 6.25391 7.58974 6.25391 9.31287C6.25391 11.036 7.65078 12.4329 9.37391 12.4329Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M0.996662 7.49244C2.96666 -1.16756 15.7967 -1.15756 17.7567 7.50244C18.9067 12.5824 15.7467 16.8824 12.9767 19.5424C10.9667 21.4824 7.78666 21.4824 5.76666 19.5424C3.00666 16.8824 -0.153338 12.5724 0.996662 7.49244Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
