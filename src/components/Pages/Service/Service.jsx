import styles from "./Service.module.css";
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard";
import { Outlet, useLocation } from "react-router-dom";

export const Service = () => {
    const location = useLocation().pathname
    return (
        location === '/serivce' ? (
            <section className={styles.container}>
                <div className={styles.temp}>
                    <ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" imgSize={{ width: '112px', height: '197px' }} url="phones" />
                    <ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" imgSize={{ width: '247px', height: '161px' }} url="allDevices" />
                    <ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" imgSize={{ width: '144px', height: '180px' }} url="accessories" />
                    <ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" imgSize={{ width: '254px', height: '121px' }} url="repair" />
                </div>

                <div className={styles.temp}>
                    <ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" imgSize={{ width: '215px', height: '184px' }} url="deviceProtection"/>
                    <ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" imgSize={{ width: '170px', height: '218px' }} url="iMac"/>
                    <ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" imgSize={{ width: '78px', height: '205px' }} url="covers"/>
                </div>
            </section>
        ) : (
            <Outlet />
        )
    );
};
