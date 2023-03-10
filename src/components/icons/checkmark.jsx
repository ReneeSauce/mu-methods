const Checkmark = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 19.75L18.1538 25L27 15"
        stroke="#1FDB00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="20" cy="20" r="20" fill="#F6F6F6" fill-opacity="0.1" />
    </svg>
  );
};
export default Checkmark;
