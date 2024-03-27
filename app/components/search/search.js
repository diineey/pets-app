import styles from './search.module.css'
import Image from "next/image";

export default function Search() {
	return (
		<div className={styles.searchContainer}>
			<input type="text" placeholder='Поиск' className={styles.searchInput}/>
			<Image className={styles.searchIcon} src='/search.svg' alt='search' width={18} height={18}/>
		</div>
	);
}