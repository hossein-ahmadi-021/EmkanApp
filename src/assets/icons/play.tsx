import { IconType } from "@/types/public/icon.types";

export default function PlayIcon({ width, height, color }: IconType) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.97506V5.81472C0 0.63293 3.66218 -1.48467 8.14643 1.10623L11.7587 3.19894L15.371 5.29151C19.8553 7.8824 19.8553 12.1176 15.371 14.7085L11.7587 16.8011L8.14643 18.8938C3.66218 21.4847 0 19.3671 0 14.1853V9.97506Z"
        fill={color}
      />
    </svg>
  );
}
