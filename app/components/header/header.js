import styles from "./header.module.css";
import Search from "@/app/components/search/search";
import Image from "next/image";

export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.header}>
				<Search/>
				<div className={styles.headerUser}>
					<div className={styles.notifications}>
						<button type="button">
							<Image src="/bell.svg" alt="notifications" width={24} height={24}/>
						</button>
					</div>
					<div className={styles.headerUserContainer}>
						<Image src="/user.svg" alt="profile photo" width={46} height={46}/>
						<p>Пользователь</p>
						<button type="button">
							<Image src="/down.svg" alt="expand" width={12} height={12}/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}