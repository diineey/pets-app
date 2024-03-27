"use client";

import styles from "./modal.module.css";
import Image from "next/image";
import {useState} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";

export default function Modal() {
	const searchParams = useSearchParams();
	const modal = searchParams.get("modal");
	const pathname = usePathname();

	const [selectedOption, setSelectedOption] = useState("");

	const handleRadioChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<>
			{modal &&
				<dialog className={styles.modal}>
					<div className={styles.modalMainContainer} style={{width: "920px"}}>
						<div className={styles.modalContainer}>
							<div className={styles.modalPhotoContainer}>
								<div className={styles.modalPhoto}>
									<Image src="/paw.svg" alt="profile photo" width={36} height={36}/>
								</div>
								<div className={styles.modalPhotoActions}>
									<Image src="/addPhoto.svg" alt="profile photo" width={28} height={28}/>
									<Image src="/deletePhoto.svg" alt="profile photo" width={28} height={28}/>
								</div>
							</div>
							<div className={styles.modalItems}>
								<div className={styles.modalItem}>
									<label htmlFor="">Вид</label>
									<select>
										<option value="dog">Собака</option>
										<option value="cat">Кошка</option>
									</select>
								</div>
								<div className={styles.modalItem}>
									<label htmlFor="">Кличка</label>
									<input type="text"/>
								</div>
								<div className={styles.modalItem}>
									<label style={{marginBottom: "15px"}} htmlFor="">Пол</label>
									<div className={styles.modalRadio}>
										<div className={styles.modalRadioItems}>
											<input type="radio" value="male" onChange={handleRadioChange}
											       checked={selectedOption === "male"}/>
											<Image alt="dog" src="/male.svg" width={24} height={24}/>
											<label className={styles.radioLabel} htmlFor="">Мальчик</label>
										</div>
										<div className={styles.modalRadioItems}>
											<input type="radio" value="female" onChange={handleRadioChange}
											       checked={selectedOption === "female"}/>
											<Image alt="dog" src="/female.svg" width={24} height={24}/>
											<label className={styles.radioLabel} htmlFor="">Девочка</label>
										</div>
									</div>
								</div>
								<div className={styles.modalItem}>
									<label htmlFor="">Дата рождения</label>
									<input type="date"/>
								</div>
								<div className={styles.modalItem}>
									<label htmlFor="">Порода</label>
									<select>
										<option value="labrador">Лабрадор</option>
										<option value="akita">Акита</option>
									</select>
								</div>
								<div className={styles.modalItem}>
									<label htmlFor="">Окрас</label>
									<input type="text"/>
								</div>
								<div className={styles.modalItem}>
									<label htmlFor="">Вес, кг</label>
									<input type="text"/>
								</div>
							</div>
						</div>
						<div className={styles.modalButtons}>
							<button className={styles.modalSave}>Сохранить</button>
							<Link href={pathname}>
								<button type="button" className={styles.modalCancel}>Отмена</button>
							</Link>
						</div>
					</div>
				</dialog>
			}
		</>
	);
}