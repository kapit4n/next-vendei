import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Products from '../components/Products';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/productPresentations')
  const products = await res.json()

  return {
    props: {
      products,
    }
  }
}

export default function Home({ products }) {

  return (
    <div className={styles.container}>
      <Products products={products} />
    </div>
  );
}
