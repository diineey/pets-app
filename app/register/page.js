"use client";

import styles from "./register.module.css";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
	const [pwd, setPwd] = useState("");
	const [isRevealPwd, setIsRevealPwd] = useState(false);

	const [pwdRep, setPwdRep] = useState("");
	const [isRevealPwdRep, setIsRevealPwdRep] = useState(false);

	const [selectedOption, setSelectedOption] = useState("");

	const handleRadioChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<main style={{display: "flex", position: "relative", overflow: "hidden", height: "100vh"}}>
			<div className={styles.registerBg}>
				<Image className={styles.registerImg} src="/bg.jpg" alt="bg" sizes="100vw" width={0} height={0}/>
				<div className={styles.imgPos}>
					<Image className={styles.registerImgDog} src="/dog.png" alt="bg" sizes="100vw" width={0} height={0}/>
				</div>
			</div>
			<div className={styles.registerContainer}>
				<h3 className={styles.authLabel}>Регистрация</h3>
				<div className={styles.authForm}>
					<div className={styles.authFormItem}>
						<label className={styles.authFormLabel} htmlFor="">Ваше имя</label>
						<input className={styles.authFormInput} type="text"/>
					</div>
					<div className={styles.authFormItem}>
						<label className={styles.authFormLabel} htmlFor="">Статус</label>
						<div className={styles.radioButton}>
							<div className={styles.radioButtonItems}>
								<input className={styles.radioInput} type="radio" value="owner" onChange={handleRadioChange}
								       checked={selectedOption === "owner"}/>
								{/*<span className={styles.radioSpan}/>*/}
								<label className={styles.radioLabel} htmlFor="">Владелец</label>
								<div className={styles.radioTooltip}>
									<Image src="/info.svg" width={18} height={18} alt="info"/>
									<span className={styles.radioTooltipText}>Выбрать, если у вас питомцы-любимцы</span>
								</div>
							</div>
							<div className={styles.radioButtonItems}>
								<input type="radio" value="breeder" onChange={handleRadioChange}
								       checked={selectedOption === "breeder"}/>
								<label className={styles.radioLabel} htmlFor="">Заводчик</label>
								<div className={styles.radioTooltip}>
									<Image src="/info.svg" width={18} height={18} alt="info"/>
									<span className={styles.radioTooltipText}>Выбрать, если у вас питомник</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.authFormItem}>
						<label className={styles.authFormLabel} htmlFor="">Эл.почта</label>
						<input className={styles.authFormInput} type="text"/>
					</div>
					<div className={styles.authFormItemPass}>
						<div className={`${styles.authFormItem} ${styles.authFormPass}`}>
							<label className={styles.authFormLabel} htmlFor="">Пароль</label>
							<input name="pwd"
							       className={styles.authFormInput}
							       type={isRevealPwd ? "text" : "password"}
							       value={pwd}
							       onChange={e => setPwd(e.target.value)}/>
							<Image className={styles.authFormInputImg}
							       src={isRevealPwd ? "/show.svg" : "/hide.svg"}
							       width={24}
							       height={24}
							       alt="Toggle Password Visibility"
							       onClick={() => setIsRevealPwd(prevState => !prevState)}/>
						</div>
						<div className={`${styles.authFormItem} ${styles.authFormPass}`}>
							<label className={styles.authFormLabel} htmlFor="">Повторить пароль</label>
							<input name="pwd"
							       className={styles.authFormInput}
							       type={isRevealPwdRep ? "text" : "password"}
							       value={pwdRep}
							       onChange={e => setPwdRep(e.target.value)}/>
							<Image className={styles.authFormInputImg}
							       src={isRevealPwdRep ? "/show.svg" : "/hide.svg"}
							       width={24}
							       height={24}
							       alt="Toggle Password Visibility"
							       onClick={() => setIsRevealPwdRep(prevState => !prevState)}/>
						</div>
					</div>
				</div>

				<label className={styles.personal}>
					<input type="checkbox"/> &nbsp;
					Я согласен<span>на обработку персональных данных</span>
				</label>

				<button className={styles.registerButton} type="button">
					Зарегистрироваться
				</button>

				<div className={styles.personal}>
					Есть аккаунт? &nbsp;
					<span style={{margin: 0}}>
						<Link href="/login">
							 Войти
						</Link>
					</span>
				</div>
			</div>
		</main>
	);
}