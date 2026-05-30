export default function PageSection({ title, children, className = "" }) {
  return (
    <section className={`page-section ${className}`}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}
