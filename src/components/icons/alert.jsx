const Alert = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.76575 20H9.76575C9.76575 21.1046 8.87032 22 7.76575 22C6.66118 22 5.76575 21.1046 5.76575 20Z"
        fill="#F6F6F6"
        fillOpacity="0.7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.89465 2.12721C2.86552 2.59416 1.28804 4.29902 1.04928 6.44785L0.0124696 15.7791C-0.119167 16.9639 0.808214 18 2.00024 18H13.5312C14.7232 18 15.6506 16.9639 15.5189 15.7791L14.4821 6.44784C14.2434 4.29902 12.6659 2.59415 10.6368 2.12721C10.263 0.896046 9.11899 0 7.76571 0C6.41243 0 5.26843 0.896047 4.89465 2.12721Z"
        fill="#F6F6F6"
        fillOpacity="0.7"
      />
    </svg>
  );
};
export default Alert;
