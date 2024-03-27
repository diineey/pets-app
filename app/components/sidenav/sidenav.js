"use client";

import Link from "next/link";
import {useSelectedLayoutSegment} from "next/navigation";
import styles from "./sidenav.module.css";
import Image from "next/image";

export default function Sidenav() {
	const segment = useSelectedLayoutSegment()
	console.log(segment)

	const links = [
		{label: "Профиль", icon: "/profile.svg", path: "/", targetSegment: null},
		{label: "Мед.карты", icon: "/document.svg", path: "/cards", targetSegment: "cards"},
		{label: "Календарь", icon: "/calendar.svg", path: "/calendar", targetSegment: "calendar"},
		{label: "Ветклиники", icon: "/clinics.svg", path: "/clinics", targetSegment: "clinics"},
		{label: "Статистика", icon: "/statistics.svg", path: "/statistics", targetSegment: "statistics"}
	];

	return (
		<div className={styles.sidenav}>
			<div className={styles.sidenavItems}>
				{links.map((l, i) => {
					return (
						<div className={`${styles.sidenavHiddenOptions} ${
							i === 0 ? styles.sidenavFirstItem : ''
						} ${
							i === links.length - 1 ? styles.sidenavLastItem : ''
						}`} key={i}>
							{/*<span className={`${(segment != l.targetSegment) ? styles.sidenavItemSpan : styles.sidenavItemSpanActive}`}></span>*/}
							<span className={styles.sidenavItemSpan}/>

							<Link
								className={`${(segment === l.targetSegment) ? styles.sidenavItemActive : styles.sidenavItem}`}
								href={`/profile/${l.path}`}
							>
								<Image src={l.icon} alt={l.icon} width={24} height={24}/>
								{l.label}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}