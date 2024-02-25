import styles from "./Input.module.css";

function Input({
  type,
  name,
  id,
  defaultValue,
  value,
  onChange,
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
  const Component = "input";
  const _small = small && styles.small;
  const _medium = medium && styles.medium;
  const _large = large && styles.large;
  const _outline = !outline && styles.outline;
  const _border = !border && styles.border;
  const _borderRadius = borderRadius && styles.borderRadius;
  const _primary = primary && styles.primary;

  return (
    <Component
      type={type}
      name={name}
      id={id}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${className} ${_small} ${_medium} ${_large} ${_outline} ${_border} ${_borderRadius} ${_primary}`}
    />
  );
}

export default Input;
