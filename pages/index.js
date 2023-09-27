import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Items from '../components/Items';
import { ItemsService } from '../services/ItemsService';

export async function getStaticProps() {
  const itemService = new ItemsService();
  const items = await itemService.list()

  return {
    props: {
      items,
    }
  }
}

export default function Home({ items }) {

  return (
    <div className={styles.container}>
      <Items items={items} />
    </div>
  );
}
