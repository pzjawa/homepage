import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2024;
  const displayYear = currentYear > startYear ? `– ${currentYear}` : "";

  return (
    <footer className="flex flex-col items-center justify-center bg-white py-5 text-slate-800 dark:bg-slate-800 dark:text-white">
      <span>
        &copy; {startYear} {displayYear}
      </span>
      <span>
        Powered by <span className="font-bold">&nbsp;Next.js</span>
      </span>
    </footer>
  );
};

export default Footer;
