export const reflectionTextCode = `
"use client";

import React from "react";

type ReflectionProps = {
  text: string;
  fontSize?: string;
  textColor?: string;
  additionalStyles?: string;
};

const Reflection: React.FC<ReflectionProps> = ({
  text,
  fontSize = "6xl",
  textColor = "white",
  additionalStyles = "",
}) => {
  return (
    <div className={\`flex items-center justify-center h-screen w-full \${additionalStyles}\`}>
      <div className="text-center">
        <h1 className={\`text-\${textColor} text-\${fontSize} font-bold \`}>{text}</h1>

        <h1
          className={\`text-\${textColor} text-\${fontSize} font-bold mt-0.5 transform scale-y-[-1] opacity-50\`}
          style={{
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
            filter: "blur(1px)",
          }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Reflection;
`;
