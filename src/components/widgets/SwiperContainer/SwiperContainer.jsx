import styles from "./SwiperContainer.module.css"
import { ServiceCard } from "../ServiceCard/ServiceCard"
import { ArrowButton } from "../../shared/ArrowButton/ArrowButton"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const SwiperContainer = () => {
    return (
        <div className={styles.swiperContainer}>
            <ArrowButton orient="left" />

            <Swiper className={styles.temp}
                spaceBetween={50}
                slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" url="phones" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" url="allDevices" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" url="accessories" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" url="repair" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" url="deviceProtection" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" url="iMac" />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" url="covers" />
                </SwiperSlide>

            </Swiper>

            <ArrowButton orient="right" />
        </div>
    )
}