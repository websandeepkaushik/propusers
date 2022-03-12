import BedsImage from '../../../assets/images/beds.svg';
import BathImage from '../../../assets/images/bath.svg';
import SizeImage from '../../../assets/images/size.svg';
import PriceImage from '../../../assets/images/price.svg';
import styles from './PropView.module.css';
import { Image } from 'react-bootstrap';

let dollarIndianLocale = Intl.NumberFormat('en-IN');

const PropView = ({ property, view }) => {

    return (
        <div className={`${styles.view} ${view === 'list' && styles.listView}`}>
            <div className={styles.images}>
                {
                property.images.length ? property.images.map((img, i) => {
                    return (
                        <Image src={img} alt="Property" key={i} />
                    )
                })
                : null}
            </div>
            <div className={styles.viewContent}>
                <h3>
                    <Image src={PriceImage} alt="Price" />
                    {dollarIndianLocale.format(property.price)}
                </h3>
                <p>{property.description}</p>
                <div className={styles.otherOpt}>
                    <div>
                        <Image src={BedsImage} alt="beds" />
                        <span>{property.beds} <span>Beds</span></span>
                    </div>
                    <div>
                        <Image src={BathImage} alt="bath" />
                        <span>{property.bath} <span>Bath</span></span>
                    </div>
                    <div>
                        <Image src={SizeImage} alt="size" />
                        <span>{property.size} <span>SqFt</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropView;