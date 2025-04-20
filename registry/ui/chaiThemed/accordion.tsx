"use client"
import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title?: string;
  content?: string;
  ChaiTheme?: boolean;
}

function Accordion({
  title = "Default Question",
  content = "Default answer or explanation goes here.",
  ChaiTheme = false
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={`w-full max-w-2xl rounded-xl my-2 border transition-all duration-200 shadow-sm
        ${ChaiTheme 
          ? 'bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50 border-amber-200 dark:border-amber-700'
          : 'bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700'}`}
    >
      <button
        onClick={toggleAccordion}
        className={`w-full text-left px-5 py-4 font-semibold flex justify-between items-center group transition-colors duration-200`}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform duration-300 delay-150
            ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.3s ease",
        }}
        className="overflow-hidden px-5 text-sm leading-relaxed"
      >
        <div className="py-3">{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
