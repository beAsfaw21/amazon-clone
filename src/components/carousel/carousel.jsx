import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
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
        showStatus={false}
        showThumbs={false}
        swipeable
        emulateTouch
        dynamicHeight={false}
      >
        {img.map((imageItemLink, index) => (
          <div className={styles.slide} key={imageItemLink}>
            <img src={imageItemLink} alt={`Promotional banner ${index + 1}`} />
          </div>
        ))}
      </ResponsiveCarousel>
      <div className={styles.fade} />
    </section>
  );
}

export default Carousel;