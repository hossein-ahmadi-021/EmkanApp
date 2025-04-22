import { IconType } from "@/types/public/icon.types";

export default function LocationIcon({ width, height, className }: IconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 44 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.840099 16.229C5.8141 -5.426 38.2131 -5.401 43.1621 16.254C46.0661 28.957 38.0861 39.71 31.0921 46.362C26.0161 51.213 17.9861 51.213 12.8851 46.362C5.91511 39.71 -2.0639 28.932 0.840099 16.229Z"
        fill="currentColor"
      />

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        x="10"
        y="9"
      >
        <path
          d="M11.73 21.458C16.874 21.458 21.043 17.289 21.043 12.146C21.043 7.00301 16.874 2.83301 11.73 2.83301C6.58698 2.83301 2.41797 7.00301 2.41797 12.146C2.41797 17.289 6.58698 21.458 11.73 21.458Z"
          stroke="#FDFBF5"
          strokeWidth="4"
        />
      </svg>
    </svg>
  );
}
