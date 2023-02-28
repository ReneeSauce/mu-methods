/**
 The nav-tray-icons is a file that contains all .svg files for NavTray.
 *
 *  @author [Kamal Ganiev](https://github.com/kamal-ganiev)
 */

export const ProfileIcon = ({ active }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="11"
        fill="#F6F6F6"
        fillOpacity={active ? "1" : "0.7"}
      />
      <mask
        id="mask0_2_7096"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="18"
        height="18"
      >
        <circle cx="11" cy="11" r="9" fill="#4E4E4E" />
      </mask>
      <g mask="url(#mask0_2_7096)">
        <circle cx="11" cy="11" r="9" fill="#4E4E4E" />
        <path
          d="M4 19C4 15.6863 6.68629 13 10 13H12C15.3137 13 18 15.6863 18 19V20H4V19Z"
          fill="#F6F6F6"
          fillOpacity={active ? "1" : "0.7"}
        />
        <circle
          cx="11"
          cy="8"
          r="3"
          fill="#F6F6F6"
          fillOpacity={active ? "1" : "0.7"}
        />
      </g>
    </svg>
  );
};
