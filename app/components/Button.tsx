import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { title } from "process";

export interface ButtonProps {
  href?: string;
  title?: string;
  dark?: boolean;
  icon?: IconifyIcon;
}

export function Button(props: ButtonProps) {
  const { href, icon } = props;

  return (
    <a href={href}>
      <button title={title} className="rounded-lg bg-yellow-100 px-2 py-2 transition duration-200 ease-in-out hover:bg-blue-100 dark:bg-button_bg dark:hover:bg-hover_button_bg">
        {icon && <Icon icon={icon} width={25} height={25} />}
      </button>
    </a>
  );
}
