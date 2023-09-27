import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Products from '../components/Products';

export default function Home() {

  const items = [
    {
      name: 'Coke', price: 14, img: "https://vegnews.com/media/W1siZiIsIjM0NDk1L1ZlZ05ld3MuSXNDb2tlVmVnYW4uS2Fyb2xpbmFHcmFib3dza2EuUGV4ZWxzLmpwZyJdLFsicCIsImNyb3BfcmVzaXplZCIsIjE1OTd4OTQ0KzErMCIsIjE2MDB4OTQ2XiIseyJmb3JtYXQiOiJqcGcifV0sWyJwIiwib3B0aW1pemUiXV0/VegNews.IsCokeVegan.KarolinaGrabowska.Pexels.jpg?sha=e1e9b27253ef0717"
    },
    { name: 'Sald', price: 12, img: "https://www.allrecipes.com/thmb/k0Yugx575taH6eaSpD51xIC3s-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-14452-GreenSalad-0025-4x3-527a1d42f2c042c9bcaf1a68223d34e5.jpg" },
    { name: 'Sandwich', price: 16, img: "https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900" }]

  return (
    <div className={styles.container}>
      <Products products={items} />
    </div>
  );
}
