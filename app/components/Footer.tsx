import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2024;
  const displayYear = currentYear > startYear ? `– ${currentYear}` : "";

  return (
    <footer className="flex flex-col items-center justify-center bg-blue-100 py-5 text-slate-800 dark:bg-slate-800 dark:text-white">
      <span>
        &copy; {startYear} {displayYear}
      </span>
      <span>
        Powered by <span className="font-bold">&nbsp;Next.js</span>
      </span>
    </footer>
  );
}
