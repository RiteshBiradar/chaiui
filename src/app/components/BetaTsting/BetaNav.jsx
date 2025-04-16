import Link from "next/link";
import { useState } from "react";

const BetaNav = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="w-full bg-[#e8953f] text-white px-6 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <span className="bg-white text-[#e8953f] text-xs font-bold px-2 py-1 rounded-full">
          Beta
        </span>
        <p className="text-sm font-medium">
          We're currently in beta! testing{"      "}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyjpTbqsWDVF3KZEU7_83hlZjxc93LGL0JGqxJ30-LmzxHgQ/viewform?usp=dialog"
            className="underline hover:text-white/80">
            Give Feedback →
          </Link>
        </p>
      </div>
      <button
        onClick={() => setShow(false)}
        className="text-xl font-bold hover:text-white/80"
        aria-label="Close Beta Banner">
        x
      </button>
    </div>
  );
};

export default BetaNav;
