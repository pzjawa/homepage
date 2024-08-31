import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { title } from "process";

export interface ButtonProps {
  href: string;
  label: string;
  title: string;
  icon: IconifyIcon;
}

export function Button(props: ButtonProps) {
  const { href, icon, label } = props;

  return (
    <a href={href} className="relative inline-block group">
      <button title={title} className="rounded-lg bg-yellow-100 px-2 py-2 hover:bg-blue-100 dark:bg-button_bg dark:hover:bg-hover_button_bg">
        <Icon icon={icon} width={25} height={25} />
      </button>
      <span className="absolute left-1/2 -translate-x-1/2 mt-12 px-2 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md transition-opacity opacity-0 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}
