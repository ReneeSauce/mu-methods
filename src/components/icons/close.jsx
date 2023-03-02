const Close = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="11.3137"
        width="16"
        height="2"
        rx="1"
        transform="rotate(-45 0 11.3137)"
        fill="#F6F6F6"
      />
      <rect
        x="1.41418"
        width="16"
        height="2"
        rx="1"
        transform="rotate(45 1.41418 0)"
        fill="#F6F6F6"
      />
    </svg>
  );
};
export default Close;
