export default function Input({
  id,
  label,
  error,
  hint,
  className = '',
  inputClassName = '',
  required = false,
  as = 'input',
  ...props
}) {
  const inputId = id || props.name;
  const Component = as;

  return (
    <div className={`app-field ${className}`}>
      {label && (
        <label className="app-label" htmlFor={inputId}>
          {label}
          {required && <span className="text-red-600" aria-hidden="true">*</span>}
        </label>
      )}

      <Component
        id={inputId}
        className={`app-input ${error ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/10' : ''} ${inputClassName}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        required={required}
        {...props}
      />

      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-base leading-relaxed text-slate-500 dark:text-slate-300">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${inputId}-error`} className="app-field-error">
          {error}
        </p>
      )}
    </div>
  );
}
