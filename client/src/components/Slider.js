import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <div id="shopify-section-template--18164664205623__hero" className="shopify-section">
      <a className="in-page-link visually-hidden skip-link" href="https://autumnandoak.co.za/#MainContent">
        Skip to content
      </a>
      {/* /sections/section-hero.liquid */}
      <Carousel id="carouselExampleIndicators">
        <Carousel.Item>
          <div className="hero__content__wrapper align--middle-right">
            <div className="hero__content hero__content--transparent js-overflow-content">
              <div className="text__standard text--primary">
                <div
                  className="hero__title h2 heading-size-10 aos-init aos-animate"
                  data-aos="hero"
                  data-aos-anchor="[data-section-id='template--18164664205623__hero']"
                  data-aos-order="1"
                >
                  <p>
                    <strong>Autumn &amp; Oak</strong>
                  </p>
                </div>

                <div
                  className="hero__title h2 heading-size-7 aos-init aos-animate"
                  data-aos="hero"
                  data-aos-anchor="[data-section-id='template--18164664205623__hero']"
                  data-aos-order="2"
                >
                  <p>Beautifully Simple Design</p>
                </div>

                <div className="hero__cta__wrapper">
                  <a
                    className="standard__cta hero__btn btn uppercase btn--primary btn--long aos-init aos-animate"
                    href="/collections/all"
                    data-aos="hero"
                    data-aos-anchor="[data-section-id='template--18164664205623__hero']"
                    data-aos-order="3"
                  >
                    Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Replace the following img with your actual image */}
          <img
            className="d-block w-100"
            src="https://autumnandoak.co.za/cdn/shop/files/IMG_3708-3_2700x.jpg?v=1677395243"
            alt="Autumn & Oak Slide"
          />
        </Carousel.Item>
        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
    </div>
  );
};

export default Slider;
