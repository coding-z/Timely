"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Glass({
  iterations,
  setIterations,
  children,
}: {
  iterations: number;
  setIterations: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLDivElement>(null);
  const shardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("");
  const [visible, setVisible] = useState(false);
  const [shardClass, setShardClass] = useState("shard");

  useEffect(() => {
    if (!mainRef.current) return;
    setHeight(window.getComputedStyle(mainRef.current).height);
  }, [mainRef]);

  useEffect(() => {
    if (!iterations) return;
    setVisible(true);
    setShardClass("shard shine");
    console.log(shardRef.current.className);

    const timeout1 = window.setTimeout(() => {
      setVisible(false);
      setShardClass("shard");
    }, 400);

    const timeout2 = window.setTimeout(() => {
      setIterations((count) => count - 1);
    }, 1400);

    return () => {
      window.clearTimeout(timeout1);
      window.clearTimeout(timeout2);
    };
  }, [iterations]);

  return (
    <div className="root" ref={mainRef}>
      {children}
      <div className={shardClass} ref={shardRef}></div>
      <style jsx>{`
        div.root {
          position: relative;
          border: 1px solid rgb(255 255 255 / 0.2);
          border-right-color: rgb(255 255 255 / 0.1);
          border-bottom-color: rgb(255 255 255 / 0.1);
          border-radius: var(--border-radius);
          padding: 30px;
          background-color: rgb(255 255 255 / 0.1);
          backdrop-filter: blur(15px);
          box-shadow: inset 5px 5px 15px rgb(255 255 255 / 0.1),
            5px 5px 15px rgb(0 0 0 / 0.1);
          overflow: hidden;
        }

        div.shard {
          position: absolute;
          height: ${height};
          width: 50%;
          background-color: rgb(255 255 255 / 0.5);
          top: -1px;
          right: -1px;
          transform: skewX(45deg) translateX(calc(100% + ${height} / 2));
          transition: transform 0.4s;
          visibility: ${visible ? "visible" : "hidden"};
        }

        div.shard.shine {
          transform: skewX(45deg) translateX(calc(-1px - 200% - ${height} / 2));
        }
      `}</style>
    </div>
  );
}
