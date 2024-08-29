"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  text: string;
}

const TypedText: React.FC<TypedTextProps> = ({ text }) => {
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

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [text]);

  return (
    <div className="relative mt-3.5 text-xl text-gray-700">
      <div className="absolute inset-0">
        <div className="h-full w-full" />
      </div>
      <div
        className="absolute inset-0 flex items-start justify-start dark:text-typed_text"
        ref={typedElement}
      />
    </div>
  );
};

export default TypedText;
