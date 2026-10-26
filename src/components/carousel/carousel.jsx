import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { img } from './img/data';
import styles from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carousel() {
  return (
    <section className={styles.wrapper} aria-label="Promotional carousel">
      <ResponsiveCarousel
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={600}
        stopOnHover
        showStatus={false}
        showThumbs={false}
        swipeable
        emulateTouch
        dynamicHeight={false}
        renderArrowPrev={(onClick, hasPrev) => (
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={onClick}
            disabled={!hasPrev}
            aria-label="Previous slide"
            type="button"
          >
            <FaChevronLeft />
          </button>
        )}
        renderArrowNext={(onClick, hasNext) => (
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={onClick}
            disabled={!hasNext}
            aria-label="Next slide"
            type="button"
          >
            <FaChevronRight />
          </button>
        )}
      >
        {img.map((imageItemLink, index) => (
          <div className={styles.slide} key={imageItemLink}>
            <img
              src={imageItemLink}
              alt={`Promotional banner ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          </div>
        ))}
      </ResponsiveCarousel>
      <div className={styles.fade} />
    </section>
  );
}

export default Carousel;