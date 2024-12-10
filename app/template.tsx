"use client";

import Link from "next/link";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoChecklist, GoClock, GoHome } from "react-icons/go";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="root">
        <header>
          <Link href="/" className="button">
            <GoHome size={40} />
          </Link>
          <Link href="/lists" className="button">
            <GoChecklist size={40} />
          </Link>
          <Link href="/timers" className="button">
            <GoClock size={40} />
          </Link>
          <Link href="#" className="button">
            <CiCalendar size={40} />
          </Link>
        </header>
        <main>
          {children}
        </main>
      </div>
      <style jsx global>{`
        html {
          box-sizing: border-box;

          *, *::before, *::after {
            box-sizing: inherit;
          }
        }

        #root {
          flex-grow: 1;
          width: 100%;
          display: block flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        header {
          position: absolute;
          top: 50px;
          left: 50px;
          display: block flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          gap: 10px;
          background-color: rgb(255 255 255 / 0.1);
          backdrop-filter: blur(20px);
          padding: 10px;
          border-radius: 5px;
          border: 1px solid rgb(255 255 255 / 0.2);
          box-shadow:
            5px 5px 20px rgb(0 0 0 / 0.1),
            inset 5px 5px 20px rgb(255 255 255 / 0.1);
        }

        main {
          background-color: rgb(255 255 255 / 0.1);
          backdrop-filter: blur(20px);
          padding: 30px;
          border-radius: 5px;
          border: 1px solid rgb(255 255 255 / 0.2);
          box-shadow:
            5px 5px 20px rgb(0 0 0 / 0.1),
            inset 5px 5px 20px rgb(255 255 255 / 0.1);
          width: 500px;
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

        button, .button {
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
