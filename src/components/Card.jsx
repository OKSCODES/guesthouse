export default function Card({
  children,
  className = '',
  padded = true,
  premium = false,
  as = 'div',
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={`app-card ${padded ? 'app-card-padded' : ''} ${premium ? 'app-card-premium' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
