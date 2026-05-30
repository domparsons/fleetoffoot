export default function Article({ title, paragraphs = [], images = [], children }) {
  return (
    <article className="article">
      {title ? <h2>{title}</h2> : null}
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {children}
      {images.length > 0 ? (
        <div className="article-image-container">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="header-image image mar20"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
