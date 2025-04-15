import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import AppIcon from "@/common/appIcon";

const LocationPoint = ({
  title,
  pointId,
  activeId,
  className,
  size = "large",
  location = "azad",
  setActiveConfig,
}: {
  title: string;
  pointId: number;
  activeId: number;
  className?: string;
  size?: "large" | "small";
  location?: "azad" | "islands";
  setActiveConfig: Dispatch<
    SetStateAction<{
      location: "makran" | "azad" | "islands";
      activeLatLng: number;
    }>
  >;
}) => {
  const isActive = activeId === pointId;

  const pointClasses = twMerge(
    `flex flex-col items-center w-fit font-normal text-tiny absolute cursor-pointer select-none ${
      isActive && "z-10"
    }`,
    className
  );

  const sizes = {
    small: {
      active: "15",
      deActive: "11",
    },
    large: {
      active: "34",
      deActive: "23",
    },
  };

  return (
    <div
      onClick={() =>
        setActiveConfig({
          location,
          activeLatLng: pointId,
        })
      }
      className={pointClasses}
    >
      <AppIcon
        name="LocationIcon"
        className={`${
          isActive ? "w-[0.97vh] h-[0.97vh]" : "w-[0.84vh] h-[0.84vh]"
        } md:w-auto md:h-auto`}
        width={isActive ? sizes[size].active : sizes[size].deActive}
        height={isActive ? sizes[size].active : sizes[size].deActive}
        color={isActive ? "primary" : "gold"}
      />
      <h5
        className={
          size === "small"
            ? "text-[0.44vh] md:text-[5.2px] mt-0.4"
            : "text-tiny"
        }
      >
        {title}
      </h5>
    </div>
  );
};

export default LocationPoint;
