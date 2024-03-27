"use client";

import styles from "./profile.module.css";
import Image from "next/image";
import {useState} from "react";
import ModalTry from "@/app/components/modaltry";

export default function Profile() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const [selectedOption, setSelectedOption] = useState("");

	const handleRadioChange = (event) => {
		setSelectedOption(event.target.value);
	};


	const modalContent = (
		<>
			<div className={styles.modalContainer}>
				<div>
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
								<label htmlFor="">Мальчик</label>
							</div>
							<div className={styles.modalRadioItems}>
								<input type="radio" value="female" onChange={handleRadioChange}
								       checked={selectedOption === "female"}/>
								<Image alt="dog" src="/female.svg" width={24} height={24}/>
								<label htmlFor="">Девочка</label>
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
				<button type="button" className={styles.modalCancel} onClick={closeModal}>Отмена</button>
			</div>
		</>
	);

	return (
		<>
			<div className={styles.profileCardContainer}>
				<div className={styles.profileCardImageContainer}>
					<Image className={styles.profileCardPhoto} src="/profilePhoto.png" alt="profile" width={0} height={0}
					       sizes="100vw"/>
				</div>

				<div className={styles.profileCardDescContainer}>
					<div className={styles.profileCardDesc}>
						<p className={styles.profileCardDescTag}>Вид</p>
						<p className={styles.profileCardDescTagAns}>Собака</p>
					</div>
					<div className={styles.profileCardDesc}>
						<p className={styles.profileCardDescTag}>Пол</p>
						<p className={styles.profileCardDescTagAns}>Мальчик</p>
					</div>
					<div className={styles.profileCardDesc}>
						<p className={styles.profileCardDescTag}>Порода</p>
						<p className={styles.profileCardDescTagAns}>Лабрадор</p>
					</div>
					<div className={styles.profileCardDesc}>
						<p className={styles.profileCardDescTag}>Кличка</p>
						<p className={styles.profileCardDescTagAns}>Марс</p>
					</div>
					<div className={styles.profileCardDesc}>
						<p className={styles.profileCardDescTag}>Возраст</p>
						<p className={styles.profileCardDescTagAns}>1 год</p>
					</div>
					<div className={styles.profileCardDesc}>
						<p className={styles.profileCardDescTag}>Окрас</p>
						<p className={styles.profileCardDescTagAns}>Золотистый</p>
					</div>
					<div className={styles.profileCardDesc}>
						<p className={styles.profileCardDescTag}>Вес, кг</p>
						<p className={styles.profileCardDescTagAns}>32</p>
					</div>
				</div>

				<div>
					<Image className={styles.profileCardSettingsIcon} src="/settings.svg" alt="settings" width={20} height={20}/>
				</div>
			</div>
			<button type="button" className={styles.buttonAdd} onClick={openModal}>+ Добавить питомца</button>
			<ModalTry isOpen={isModalOpen} content={modalContent} width='920px'/>
		</>
	);
}