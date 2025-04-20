export const SoloCountCode = `import React, { ReactNode } from "react";

interface SoloCountCardProps {
  icon?: ReactNode;
  label?: string;
  count?: number;
  ChaiTheme?: boolean;
}

function SoloCountCard({
  icon = null,
  label = "Count Text",
  count = 0,
  ChaiTheme = false
}: SoloCountCardProps) {
  return (
    <div
      className={\`
        \${ChaiTheme
          ? "bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50"
          : "bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"}
        w-56 rounded-2xl shadow-md p-4 flex items-center\`}
    >
      {icon && (
        <div className="w-10 h-10 flex items-center justify-center rounded-lg mr-4 bg-amber-100 dark:bg-amber-800">
          {icon}
        </div>
      )}
      <div>
        <div className={\`text-sm \${ChaiTheme ? "text-amber-700 dark:text-amber-300" : "text-gray-500 dark:text-neutral-400"}\`}>{label}</div>
        <div className="text-2xl font-semibold">{count}</div>
      </div>
    </div>
  );
}

export default SoloCountCard;
`