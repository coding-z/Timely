"use client";

import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

export default function Glass({
  shine = 0,
  children
}: {
  shine?: number;
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("");
  const [shineClass, setShineClass] = useState(false);
  const [shineCount, setShineCount] = useState(shine);

  let interval1, interval2, timeout;

  useEffect(() => {
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval1);
      window.clearInterval(interval2);
    };
  }, []);

  // if (shineCount !== shine) setShineCount(shine);
  useEffect(() => setShineCount(shine), [shine]);

  useEffect(() => {
    if (!rootRef.current) return;
    setHeight(window.getComputedStyle(rootRef.current).height);
  }, [rootRef]);

  function handleStartShine() {
    interval1 = window.setInterval(() => {
      setShineClass(true);
    }, 1500);

    timeout = window.setTimeout(() => {
      interval2 = window.setInterval(() => {
        setShineClass(false);
      }, 1500);
    }, 500);
  }

  useEffect(() => {
    if (!shineCount) return;

    setShineClass(true);
    const timeout1 = window.setTimeout(() => setShineClass(false), 500);
    const timeout2 = window.setTimeout(() => {
      setShineCount((count) => count - 1);
    }, 1500);

    return () => {
      window.clearTimeout(timeout1);
      window.clearTimeout(timeout2);
    };
  }, [shineCount]);
  
  return (
    <>
      <div ref={rootRef} className="root">
        {children}
        <div className={classNames("shard", { shine: shineClass })} />
      </div>
      <style jsx>{`
        .root {
          position: relative;
          padding: var(--spacing-primary);
          background-color: var(--background-color-primary);
          backdrop-filter: var(--blur-primary);
          box-shadow: var(--box-shadow-primary);
          border-radius: var(--border-radius);
          border-style: var(--border-style);
          border-width: var(--border-width);
          border-color: var(--border-color);
          overflow: hidden;
        }

        .shard {
          position: absolute;
          height: 100%;
          width: 50%;
          background-color: var(--shard-color);
          top: 0;
          right: 0;
          transform:
            skewX(45deg)
            translateX(calc(100% + ${height} / 2 + var(--border-width)));
          transition: transform 500ms;
          visibility: ${shineClass ? "visible" : "hidden"};

          &.shine {
            transform:
              skewX(45deg)
              translateX(calc(-200% - ${height} / 2 - var(--border-width)));
          }
        }
      `}</style>
    </>
  )
}
