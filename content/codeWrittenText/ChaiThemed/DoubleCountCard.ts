export const DoubleCountCode = `import React from "react";

interface DoubleCountCardProps {
  title?: string;
  subtitle?: string;
  count1?: number;
  label1?: string;
  count2?: number;
  label2?: string;
  ChaiTheme?: boolean;
}

function DoubleCountCard({
  title = "Title",
  subtitle = "SubTitle",
  count1 = 0,
  label1 = "Count1",
  count2 = 0,
  label2 = "Count2",
  ChaiTheme = false
}: DoubleCountCardProps) {
  return (
    <div
      className={\`
        \${ChaiTheme
          ? "bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50"
          : "bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"}
        w-60 rounded-2xl shadow-md p-5 flex flex-col items-center justify-center\`}
    >
      <div className="text-lg font-bold mb-1">{title}</div>
      <div
        className={\`
          text-sm mb-4 \${ChaiTheme
            ? "text-amber-700 dark:text-amber-300"
            : "text-gray-500 dark:text-neutral-400"}\`}
      >
        {subtitle}
      </div>
      <div className="flex w-full justify-between px-2">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold">{count1}</span>
          <span className="text-xs mt-1">{label1}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold">{count2}</span>
          <span className="text-xs mt-1">{label2}</span>
        </div>
      </div>
    </div>
  );
}

export default DoubleCountCard;
`