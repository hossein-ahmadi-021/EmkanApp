import { IconType } from "@/types/public/icon.types";

export default function LogoIcon({ width, height, color }: IconType) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0443 20.9784C19.6264 21.5409 19.6373 22.4699 19.0678 23.0451L5.55616 36.6315C2.10096 32.7432 0 27.6192 0 21.9999C0 16.3806 1.98886 11.5288 5.27952 7.68225L19.0443 20.9766V20.9784Z"
        fill={color}
      />
      <path
        d="M21.9227 0C34.0276 0 43.8454 9.85056 43.8454 22C43.8454 34.1494 34.0276 44 21.9227 44C20.1924 44 18.5145 43.7932 16.8999 43.4158L36.0346 24.1701C37.2206 22.9798 37.2007 21.0438 35.9912 19.8771L16.1984 0.763876C18.0263 0.270351 19.941 0 21.9227 0Z"
        fill={color}
      />
    </svg>
  );
}
