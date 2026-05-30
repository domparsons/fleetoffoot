import { useEffect, useId, useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselId = useId();
  const total = images.length;

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % total);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPlaying, total]);

  const goTo = (index) => {
    setCurrent((index + total) % total);
  };

  return (
    <section className="photo-carousel" aria-label="Club photo carousel">
      <div className="photo-carousel-viewport">
        <div
          id={carouselId}
          className="photo-carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
          aria-live="polite"
        >
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              className="photo-carousel-img"
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              aria-hidden={index !== current}
            />
          ))}
        </div>
        <button
          className="photo-carousel-btn photo-carousel-prev"
          type="button"
          aria-label="Previous slide"
          aria-controls={carouselId}
          onClick={() => goTo(current - 1)}
        >
          &#8249;
        </button>
        <button
          className="photo-carousel-btn photo-carousel-next"
          type="button"
          aria-label="Next slide"
          aria-controls={carouselId}
          onClick={() => goTo(current + 1)}
        >
          &#8250;
        </button>
        <div className="photo-carousel-status" aria-hidden="true">
          {current + 1} / {total}
        </div>
        <div className="photo-carousel-controls">
          <button
            className="photo-carousel-play-toggle"
            type="button"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <div className="photo-carousel-dots" aria-label="Choose carousel slide">
            {images.map((image, index) => (
              <button
                key={image.src}
                className={`photo-carousel-dot${index === current ? " active-dot" : ""}`}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === current}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
