import React from "react";

export default function Mark({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <mark className="rounded-lg bg-mark_blue p-1 dark:bg-dark_mark_blue dark:text-mark_blue">
      {children}
    </mark>
  );
}
