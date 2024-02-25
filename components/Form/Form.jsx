function Form({ children, title, action, className }) {
  const Component = "form";

  return (
    <Component title={title} action={action} className={className}>
      {children}
    </Component>
  );
}

export default Form;
