export function Eyebrow({ children, className = '', ...props }) {
  return (
    <p className={`app-badge w-fit uppercase tracking-[0.18em] ${className}`} {...props}>
      {children}
    </p>
  );
}

export function HeroTitle({ children, className = '', ...props }) {
  return (
    <h1 className={`app-hero-title text-balance ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className = '', ...props }) {
  return (
    <h2 className={`app-title text-balance ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function CardTitle({ children, className = '', as = 'h3', ...props }) {
  const Component = as;
  return (
    <Component className={`text-[20px] font-black leading-tight tracking-[-0.03em] text-slate-950 dark:text-white ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function BodyText({ children, className = '', as = 'p', ...props }) {
  const Component = as;
  return (
    <Component className={`text-base leading-relaxed text-slate-600 dark:text-slate-300 ${className}`} {...props}>
      {children}
    </Component>
  );
}
