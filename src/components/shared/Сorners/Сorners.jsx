import React from "react";
import { Link } from "react-router-dom";
import styles from "./Сorners.module.css";

export const Сorners = React.forwardRef(({ img, alt, style, onClick, className, id, idImages }, ref) => {
    return (
        <div className={`${styles.corners} ${className}`} style={{ ...style }} onClick={onClick} ref={ref}
            id={id}
        >
            <img src={img} alt={alt} id = {idImages}/>
        </div>
    );
});

export default Сorners;
