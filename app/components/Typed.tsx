"use client";

import React, { useEffect, useRef } from "react";
import TypedJS from "typed.js";

interface TypedProps {
  text: string;
}

export default function Typed({ text }: TypedProps) {
  const typedElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: [text],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: false,
      };

      const typed = new TypedJS(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [text]);

  return (
    <div
      className="mt-3.5 flex h-1 w-40 items-start justify-start text-lg text-gray-700 dark:text-typed_text"
      ref={typedElement}
    />
  );
}
