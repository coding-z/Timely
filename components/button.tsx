"use client";

import { ComponentProps, forwardRef } from "react";

export default forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  function Button({ children, ...props }, ref) {
    return (
      <>
        <button {...props} ref={ref}>
          {children}
        </button>
        <style jsx>{`
          button {
            border: 1px solid rgb(255 255 255 / 0.2);
            border-right-color: rgb(255 255 255 / 0.1);
            border-bottom-color: rgb(255 255 255 / 0.1);
            border-radius: var(--border-radius);
            padding: 10px;
            background-color: transparent;
            backdrop-filter: blur(5px);
            box-shadow: inset 5px 5px 15px rgb(255 255 255 / 0.05),
              5px 5px 15px rgb(0 0 0 / 0.05);
            font-size: var(--font-size-md);
            transition: transform 0.4s;

            &:hover {
              cursor: pointer;
              transform: translateY(-5px);
              background-color: rgb(255 255 255 / 0.1);
            }
          }
        `}</style>
      </>
    );
  }
);
