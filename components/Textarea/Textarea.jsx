import styles from "./Textarea.module.css";

function Textarea({
  children,
  name,
  id,
  defaultValue,
  value,
  onChange,
  cols,
  rows,
  className,
  required,
  placeholder,
  small = false,
  medium = false,
  large = false,
  outline = false,
  border = false,
  borderRadius = false,
  primary = false,
}) {
  const Component = "textarea";
  const _small = small && styles.small;
  const _medium = medium && styles.medium;
  const _large = large && styles.large;
  const _outline = !outline && styles.outline;
  const _border = !border && styles.border;
  const _borderRadius = borderRadius && styles.borderRadius;
  const _primary = primary && styles.primary;

  return (
    <Component
      name={name}
      id={id}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      cols={cols}
      rows={rows}
      required={required}
      placeholder={placeholder}
      className={`${className} ${_small} ${_medium} ${_large} ${_outline} ${_border} ${_borderRadius} ${_primary}`}
    >
      {children}
    </Component>
  );
}

export default Textarea;
