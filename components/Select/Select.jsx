import styles from "./Select.module.css";

function Select({
  children,
  name,
  id,
  defaultValue,
  value,
  onChange,
  onSelect,
  placeholder,
  required,
  className,
  small = false,
  medium = false,
  large = false,
  outline = false,
  border = false,
  borderRadius = false,
  primary = false,
}) {
  const Component = "select";
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
      onSelect={onSelect}
      placeholder={placeholder}
      required={required}
      className={`${className} ${_small} ${_medium} ${_large} ${_outline} ${_border} ${_borderRadius} ${_primary}`}
    >
      {children}
    </Component>
  );
}

export default Select;
