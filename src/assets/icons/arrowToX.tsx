import { IconType } from "@/types/public/icon.types";

export default function ArrowToX({ width, height, className }: IconType) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 5.00001C0 5.1218 0.0736577 5.2835 0.148394 5.36198L4.35883 9.83573C4.55541 10.039 4.87388 10.0625 5.10307 9.85626C5.30796 9.67186 5.31307 9.31224 5.12359 9.112L1.74373 5.52643H16.3157C16.6064 5.52643 16.842 5.2908 16.842 5.00012C16.842 4.70944 16.6064 4.47377 16.3157 4.47377H1.74373L5.12359 0.888207C5.31304 0.687997 5.29959 0.337202 5.10307 0.143966C4.89557 -0.0600338 4.55241 -0.0418752 4.35883 0.164493L0.148394 4.63823C0.0246842 4.75957 0.00207894 4.87643 0 5.00001Z"
        fill="currentColor"
      />
    </svg>
  );
}
