import {useState} from "react"
import styles from "./ServiceCard.module.css"
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({img, alt, name, imgSize, url, className, style, sizeCard}) => {
    const [isHover, setIsHover] = useState('linear-gradient(180.00deg, rgba(33, 188, 255, 0), rgba(33, 188, 255, 0.5) 100%)')

    return (
        <div className={className}>
            <Link to={url} className={`${styles.card}`} style={{
                background: isHover, ...style,
                height: sizeCard === undefined ? '280px' : `${sizeCard[0]}`,
                width: sizeCard === undefined ? '224px' : `${sizeCard[1]}`,
            }}
                  onMouseEnter={() => setIsHover('linear-gradient(180deg, rgba(237, 58, 134, 0) 0%, rgba(237, 58, 134, 0.5) 100%)')}
                  onMouseLeave={() => setIsHover('linear-gradient(180.00deg, rgba(33, 188, 255, 0), rgba(33, 188, 255, 0.5) 100%)')}>
                <img src={img} alt={alt} style={{...imgSize}}/>
                <p>{name}</p>
            </Link>
        </div>
    )
}
