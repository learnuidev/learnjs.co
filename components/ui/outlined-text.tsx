import type React from "react";

interface OutlinedTextProps {
  children: React.ReactNode;
  textColor?: string;
  outlineColor?: string;
  className?: string;
}

export const OutlinedText: React.FC<OutlinedTextProps> = ({
  children,
  textColor = "white",
  outlineColor = "black",
  className = "",
}) => {
  const outlineStyle = {
    color: textColor,
    textShadow: `
      -1px -1px 0 ${outlineColor},
      1px -1px 0 ${outlineColor},
      -1px 1px 0 ${outlineColor},
      1px 1px 0 ${outlineColor},
      0 -1px 0 ${outlineColor},
      0 1px 0 ${outlineColor},
      -1px 0 0 ${outlineColor},
      1px 0 0 ${outlineColor}
    `,
  };

  return (
    <h1 className={`text-4xl font-bold ${className}`} style={outlineStyle}>
      {children}
    </h1>
  );
};
