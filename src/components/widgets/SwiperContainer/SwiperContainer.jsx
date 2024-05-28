import styles from "./SwiperContainer.module.css"
import { ServiceCard } from "../ServiceCard/ServiceCard"
import { ArrowButton } from "../../shared/ArrowButton/ArrowButton"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useRef } from "react"

export const SwiperContainer = () => {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className={styles.swiperContainer}>
            <ArrowButton orient="left" onClick={handlePrev} />

            <Swiper className={styles.temp}
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" url="serivce/phones" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" url="serivce/allDevices" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" url="serivce/accessories" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" url="serivce/repair" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" url="serivce/deviceProtection" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" url="serivce/iMac" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" url="serivce/covers" />
                </SwiperSlide>

            </Swiper>

            <ArrowButton orient="right" onClick={handleNext} />
        </div>
    )
}