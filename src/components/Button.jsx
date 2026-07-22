const variants = {
  primary: 'app-button-primary',
  soft: 'app-button-soft',
  gold: 'app-button-gold',
  outline: 'app-button-outline',
  ghost: 'bg-transparent text-slate-700 hover:bg-black/5 dark:text-slate-100 dark:hover:bg-white/10',
  danger: 'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700',
};

const sizes = {
  md: 'min-h-14 px-5 text-base',
  lg: 'min-h-16 px-6 text-base',
  icon: 'h-14 w-14 p-0',
};

export default function Button({
  children,
  className = '',
  as = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  type,
  ...props
}) {
  const Component = as;
  const isButton = Component === 'button';

  return (
    <Component
      className={`app-button ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={isButton ? disabled || loading : undefined}
      aria-disabled={!isButton && (disabled || loading) ? 'true' : undefined}
      type={isButton ? type || 'button' : undefined}
      {...props}
    >
      {loading && (
        <span
          className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </Component>
  );
}
