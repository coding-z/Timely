"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style jsx global>{`
        html {
          box-sizing: border-box;

          *, *::before, *::after {
            box-sizing: inherit;
          }
        }

        body {
          display: block flex;
          position: relative;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100vw;
          min-height: 100vh;
          height: 100vh;
          background: no-repeat center url("/leaf-background.jpg");
          background-size: cover;
          color: rgb(255 255 255 / 0.8);

          * {
            font-family: inherit;
            color: inherit;
          }
        }

        h1, h2, h3, h4, h5, h6, p, ul {
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
          display: block flex;
          flex-direction: column;
        }

        li {
          margin: 0;
        }

        button {
          display: block flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px;
          background-color: transparent;
          border-radius: 5px;
          border: 1px solid rgb(255 255 255 / 0.2);
          box-shadow:
            5px 5px 20px rgb(0 0 0 / 0.1),
            inset 5px 5px 20px rgb(255 255 255 / 0.1);
          transform: translateY(0);
          transition: transform 0.4s;
          position: relative;
          height: 50px;
          width: 50px;
          overflow: hidden;

          &.active {
            background-color: rgb(255 255 255 / 0.2);
          }

          &::after {
            content: "";
            display: block;
            position: absolute;
            background-color: rgb(255 255 255 / 0.5);
            height: 100%;
            width: 50%;
            transform: skewX(45deg) translateX(calc(150% + 25px));
            transition: transform 0.4s;
          }
          
          &:hover {
            cursor: pointer;
            transform: translateY(-5px);
            background-color: rgb(255 255 255 / 0.1);

            &::after {
              transform: skewX(45deg) translateX(calc(-150% - 25px));
            }
          }
        }
      `}</style>
    </>
  );
}
