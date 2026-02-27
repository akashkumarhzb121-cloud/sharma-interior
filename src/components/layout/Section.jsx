import Container from "./Container";

const Section = ({ id, title, subtitle, children, className = "", headerExtra }) => (
  <section id={id} className={`py-12 sm:py-16 ${className}`}>
    <Container>
      {(title || subtitle) && (
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
          <div>
            {subtitle && (
              <p className="text-sm uppercase tracking-widest text-gray-500">{subtitle}</p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                {title}
              </h2>
            )}
          </div>
          {headerExtra}
        </div>
      )}
      {children}
    </Container>
  </section>
);

export default Section;
