import styles from '../styles/Home.module.css';
import { useContext } from 'react';
import OrderContext from '../components/context/OrderContext';

export default function OrderProducts() {

    const { orderInfo } = useContext(OrderContext)

    return (
        <div className={styles.container}>
            I should display all products selected
            <ul>
                {orderInfo.products.map(product => (
                    <li>
                        <img src={product.Product.img} height={100} />
                        {product.Product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
