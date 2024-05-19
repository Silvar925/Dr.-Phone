import styles from "./Home.module.css"

import { RoundButton } from "../../shared/RoundButton/RoundButton"
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard"
import { ArrowButton } from "../../shared/ArrowButton/ArrowButton"

import instagram from "../../../assets/socialNetworkIcon/instagram.svg"
import telegram from "../../../assets/socialNetworkIcon/telegram.svg"
import whatsApp from "../../../assets/socialNetworkIcon/whatsApp.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Home = () => {
    let mobile = innerWidth >= 320 && innerWidth <= 450


    if (!mobile) {
        return (
            <main className={styles.container}>
                <ul className={styles.left}>
                    <li><p><span><img src="ProductImages/truck.svg" alt="truck" /></span><span>Доставка по России</span></p>
                    </li>
                    <li><p><span><img src="ProductImages/monitor.svg" alt="handbag" /></span><span>Как нас найти</span></p>
                    </li>
                    <li><p><span><img src="ProductImages/call.svg" alt="call" /></span><span>89383499996</span></p></li>
                </ul>


                <div className={styles.middle}>
                    <div className={styles.topBox}>
                        <ArrowButton style={{ height: '76px', width: '76px' }} />

                        <Swiper className={styles.swiperBox}
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide><ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" imgSize={{ width: '112px', height: '197px' }} url="phones" /></SwiperSlide>
                            <SwiperSlide><ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" imgSize={{ width: '247px', height: '161px' }} url="allDevices" /></SwiperSlide>
                            <SwiperSlide><ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" imgSize={{ width: '144px', height: '180px' }} url="accessories" /></SwiperSlide>
                            <SwiperSlide><ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" imgSize={{ width: '254px', height: '121px' }} url="repair" /></SwiperSlide>
                            <SwiperSlide><ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" imgSize={{ width: '215px', height: '184px' }} url="deviceProtection" /></SwiperSlide>
                            <SwiperSlide><ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" imgSize={{ width: '170px', height: '218px' }} url="iMac" /></SwiperSlide>
                            <SwiperSlide><ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" imgSize={{ width: '78px', height: '205px' }} url="covers" /></SwiperSlide>
                        </Swiper>

                        <ArrowButton orient='right' style={{ height: '76px', width: '76px' }} />
                    </div>

                    <div className={styles.logo}>
                        <img src="RedLogo.svg" alt="DrPhone" className={styles.logoIMG} />

                        <img src="rounded.svg" alt="rounded" className={styles.rounded} />

                        <div className={styles.logoShadow} />
                    </div>

                    <div className={styles.animationBox}>
                        <div className={styles.leftAnimation}>
                            <div className={styles.dumai} />
                            {/* <div className={styles.dumai} /> */}
                        </div>

                        <div className={styles.rightAnimation}>
                            <div className={styles.dumai} />
                            {/* <div className={styles.dumai} /> */}
                        </div>
                    </div>



                </div>

                <ul className={styles.right}>
                    <li><RoundButton img={instagram} alt="instagram" /></li>
                    <li><RoundButton img={whatsApp} alt="whatsapp" /></li>
                    <li><RoundButton img={telegram} alt="telegram" /></li>
                </ul>

            </main>
        )
    } else {
        return (
            <main className={styles.container}>
                <div className={styles.logo}>
                    <img src="RedLogo.svg" alt="DrPhone" className={styles.logoIMG} />\
                    <img src="rounded.svg" alt="rounded" className={styles.rounded} />
                    <div className={styles.logoShadow} />
                </div>

                <ul className={styles.left}>
                    <li><p><span><img src="ProductImages/truck.svg" alt="truck" /></span><span>Доставка по России</span></p>
                    </li>
                    <li><p><span><img src="ProductImages/monitor.svg" alt="handbag" /></span><span>Как нас найти</span></p>
                    </li>
                    <li><p><span><img src="ProductImages/call.svg" alt="call" /></span><span>89383499996</span></p></li>
                </ul>

                <ul className={styles.list}>
                    <li><ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" imgSize={{ width: '112px', height: '197px' }} url="phones" /></li>
                    <li><ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" imgSize={{ width: '247px', height: '161px' }} url="allDevices" /></li>
                    <li><ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" imgSize={{ width: '144px', height: '180px' }} url="accessories" /></li>
                    <li><ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" imgSize={{ width: '254px', height: '121px' }} url="repair" /></li>
                    <li><ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" imgSize={{ width: '215px', height: '184px' }} url="deviceProtection" /></li>
                    <li><ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" imgSize={{ width: '170px', height: '218px' }} url="iMac" /></li>
                    <li><ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" imgSize={{ width: '78px', height: '205px' }} url="covers" /></li>
                </ul>


            </main>
        )
    }

}
