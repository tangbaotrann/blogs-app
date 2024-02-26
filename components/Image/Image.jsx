function Image({ src, alt, className, width, height }) {
  const Component = "img";

  return (
    <Component
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}

export default Image;
