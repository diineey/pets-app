'use client'

import {useState} from "react";
import ModalTry from "@/app/components/modaltry";

export default function Cards() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const modalContent = (
		<div>
			<h2>Modal Content</h2>
			<p>This is the content of the modal.</p>
			<button onClick={closeModal}>Close</button>
		</div>
	);


	return (
		// <div>cards</div>
		<div>
			<button onClick={openModal}>Open Modal</button>
			<ModalTry isOpen={isModalOpen} content={modalContent}/>
		</div>
	);
}