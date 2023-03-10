const Stop = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="14"
        y="25.3135"
        width="16"
        height="2"
        rx="1"
        transform="rotate(-45 14 25.3135)"
        fill="#FF3E3E"
      />
      <rect
        x="15.4141"
        y="14"
        width="16"
        height="2"
        rx="1"
        transform="rotate(45 15.4141 14)"
        fill="#FF3E3E"
      />
      <circle cx="20" cy="20" r="20" fill="#F6F6F6" fillOpacity="0.1" />
    </svg>
  );
};
export default Stop;
