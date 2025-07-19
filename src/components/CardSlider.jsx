import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Card from "./Card";
import styles from "./MyComponent.module.css";

function CardSlider() {
  const cards = [
    { image: "", title: "レモンヨーグルト1", time: "1", kcal: "101" },
    { image: "", title: "レモンヨーグルト2", time: "1", kcal: "101" },
    { image: "", title: "レモンヨーグルト3", time: "1", kcal: "101" },
    { image: "", title: "レモンヨーグルト4", time: "1", kcal: "101" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className={styles.cardSliderWrapper}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // ここで swiper を取得
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ループ時は realIndex を使う
        className={styles.cardSwiper}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className={styles.cardSlide}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.controlsWrapper}>
        <div className={styles.slideButton}>
          <button
            ref={prevRef}
            className={`${styles.navButton} ${styles.prevButton}`}
          ></button>

          <div className={styles.dotWrapper}>
            {cards.map((_, index) => (
              <span
                key={index + 1}
                className={
                  index === activeIndex
                    ? `${styles.dot} ${styles.activeDot}`
                    : styles.dot
                }
                onClick={() => swiperRef.current?.slideToLoop(index)} // ドットをクリックで移動
              ></span>
            ))}
          </div>

          <button
            ref={nextRef}
            className={`${styles.navButton} ${styles.nextButton}`}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
