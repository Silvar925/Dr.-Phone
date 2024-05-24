import styles from "./Service.module.css";
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";

export const Service = () => {
    const location = useLocation().pathname
    return (
        location === '/serivce' ? (
            <main className={styles.container}>
                <ul className={styles.temp}>
                    <li><ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" imgSize={{ width: '112px', height: '197px' }} url="phones" /></li>
                    <li><ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" imgSize={{ width: '247px', height: '161px' }} url="allDevices" /></li>
                    <li><ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" imgSize={{ width: '144px', height: '180px' }} url="accessories" /></li>
                    <li><ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" imgSize={{ width: '254px', height: '121px' }} url="repair" /></li>
                </ul>

                <ul className={styles.temp}>
                    <li><ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" imgSize={{ width: '215px', height: '184px' }} url="deviceProtection" /></li>
                    <li><ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" imgSize={{ width: '170px', height: '218px' }} url="iMac" /></li>
                    <li><ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" imgSize={{ width: '78px', height: '205px' }} url="covers" /></li>
                </ul>
            </main>
        ) : (
            <Outlet />
        )
    );
};
