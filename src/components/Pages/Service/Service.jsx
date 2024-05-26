import styles from "./Service.module.css";
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";

export const Service = () => {
    const location = useLocation().pathname
    return (
        location === '/serivce' ? (
            <main className={styles.mainContainer}>
                <div className={styles.box}>
                    <ul>
                        <li><ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" url="phones" /></li>
                        <li><ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" url="allDevices" /></li>
                        <li><ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" url="accessories" /></li>
                        <li><ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" imgSize={{ width: '254px', height: '121px' }} url="repair" /></li>
                    </ul>

                    <ul className={styles.second}>
                        <li><ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" url="deviceProtection" /></li>
                        <li><ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" url="iMac" /></li>
                        <li><ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" url="covers" /></li>
                    </ul>
                </div>
            </main>
        ) : (
            <Outlet />
        )
    );
};
