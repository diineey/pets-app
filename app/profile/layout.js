import Header from "@/app/components/header/header";
import Sidenav from "@/app/components/sidenav/sidenav";
import Modal from "@/app/components/modal/modal";

export default async function Layout({children}) {
	return (
		<div style={{display: "flex", height: '100%'}}>
			<Sidenav/>
			<div style={{ flex: 1}}>
				<Header/>
				<main style={{padding: "50px", backgroundColor: "#F7F8FA"}}>
					{children}
					{/*<Modal/>*/}
				</main>
			</div>
		</div>
	);
}