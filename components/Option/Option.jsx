function Option({ children, value, className }) {
  const Component = "option";

  return (
    <Component value={value} className={className}>
      {children}
    </Component>
  );
}

export default Option;
