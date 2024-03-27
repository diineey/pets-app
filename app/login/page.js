"use client";

import styles from "@/app/register/register.module.css";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
	const [pwd, setPwd] = useState("");
	const [isRevealPwd, setIsRevealPwd] = useState(false);

	return (
		<main style={{display: "flex", position: "relative", overflow: "hidden", height: "100vh"}}>
			<div className={styles.registerBg}>
				<Image className={styles.registerImg} src="/bg.jpg" alt="bg" sizes="100vw" width={0} height={0}/>
				<div className={styles.imgPos}>
					<Image className={styles.registerImgDog} src="/dog.png" alt="bg" sizes="100vw" width={0} height={0}/>
				</div>
			</div>
			<div className={styles.registerContainer}>
				<h3 className={styles.authLabel}>Вход в аккаунт</h3>
				<div className={styles.authForm}>
					<div className={styles.authFormItem}>
						<label className={styles.authFormLabel} htmlFor="">Эл.почта</label>
						<input className={styles.authFormInput} type="text"/>
					</div>
					<div className={`${styles.authFormItem} ${styles.authFormPass}`}>
							<label className={styles.authFormLabel} htmlFor="">Пароль</label>
							<input name="pwd"
							       className={`${styles.authFormInput} ${styles.authFormInputFull}`}
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
				</div>

				<p className={styles.personal}>
					Забыли пароль?
				</p>

				<button className={styles.registerButton} type="button">
					Войти
				</button>

				<div className={styles.personal}>
					Нет аккаунта? &nbsp;
					<span style={{margin: 0}}>
						<Link href="/register">
							 Зарегистрируйтесь
						</Link>
					</span>
				</div>
			</div>
		</main>
	);
}