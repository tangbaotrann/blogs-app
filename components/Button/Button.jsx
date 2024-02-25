import styles from "./Button.module.css";

function Button({
  children,
  type,
  onClick,
  disabled,
  className,
  small = false,
  medium = false,
  large = false,
  outline = false,
  border = false,
  borderRadius = false,
  primary = false,
}) {
  const Component = "button";
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
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.default} ${_small} ${_medium} ${_large} ${_outline} ${_border} ${_borderRadius} ${_primary}`}
    >
      {children}
    </Component>
  );
}

export default Button;
