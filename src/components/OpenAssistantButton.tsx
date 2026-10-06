"use client";

type Props = {
  className: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function OpenAssistantButton({ className, children, style }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-kitchen-assistant"))}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
