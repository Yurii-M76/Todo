import { TIcon } from "@/types";

const CalendarNoDateIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  style,
}: TIcon) => {
  const styles = {
    flexShrink: 0,
    transition: "transform 0.3s ease",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      stroke={fill ? fill : stroke || "currentColor"}
      strokeWidth={strokeWidth || "1.2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={Object.assign(styles, style)}
    >
      <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
      <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
      <path d="M16 2v4" />
      <path d="M3 10h7" />
      <path d="M21 10h-5.5" />
      <path d="m2 2 20 20" />
    </svg>
  );
};

export default CalendarNoDateIcon;
