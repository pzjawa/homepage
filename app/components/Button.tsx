import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { title } from "process";

export interface ButtonProps {
  href: string;
  label: string;
  title: string;
  icon: IconifyIcon;
}

export default function Button(props: ButtonProps) {
  const { href, icon, label } = props;

  return (
    <a href={href} target="_blank" className="group relative inline-block">
      <button
        title={title}
        className="rounded-lg bg-white/30 px-2 py-2 backdrop-blur"
      >
        <Icon icon={icon} width={25} height={25} />
      </button>
      <span className="absolute left-1/2 mt-12 -translate-x-1/2 rounded-md border border-gray-500/30 bg-white/30 px-2 py-1 text-sm text-black opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 dark:text-white">
        {label}
      </span>
    </a>
  );
}
