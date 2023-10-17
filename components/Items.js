import { useContext } from 'react';
import styles from '../styles/components/Items.module.css';
import OrderContext from './context/OrderContext';
import Image from 'next/image';


const Items = ({ items }) => {

    const { updateOrderInfo } = useContext(OrderContext);

    const onUpdateOrderInfo = (item) => {
        updateOrderInfo(orderInfo => {
            const newOrderInfo = {...orderInfo}
            newOrderInfo.totalPrice = orderInfo.totalPrice + item.currentPrice
            newOrderInfo.items = [...newOrderInfo.items, item]
            return newOrderInfo
        })
    }

    return (
        <>
            <h2>MENU</h2>
            <div className={styles.itemList}>
                {items.map(item => (
                    <div className={styles.item}>
                        <Image src={`/images/${item.Product.img}`} width={150} height={150} />
                        <h2>
                            {item.Product.name}
                        </h2>
                        <div className='product-price'>{item.currentPrice}$</div>
                        <button className='order-now-button' onClick={() => onUpdateOrderInfo(item)}>ORDER NOW</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Items