import styles from '../styles/Home.module.css';
import { CategoriesService } from '../services/CategoryService';
import useSWR from 'swr'
import Image from 'next/image'


const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Categories() {
    
    const { data, error } = useSWR('http://localhost:3000/categories', fetcher)
    
    if (error) return <div>There is a error</div>

    if (!data) return <div>Loading</div>

    return (
        <div className={styles.container}>
            All categories
            <ul>
                {data.map(category => (
                    <li>
                        <Image src={`/images/${category.img}`} height={100} width={100} />
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
