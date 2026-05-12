export default function Underline({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <span className="relative inline-block py-1">
      {children}

      {/* Underline */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 bg-brand-accent
        ${isActive ? "scale-x-100" : "scale-x-0"}
        group-hover:scale-x-100`}
      ></span>
    </span>
  );
}
