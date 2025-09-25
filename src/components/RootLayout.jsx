import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
	return (
		<>
			<div className="fixed bg-[#FFFCF2] right-0 left-0 z-50 bg-[url(/Group-30.svg)] bg-cover bg-center bg-no-repeat px-5 py-5">
				<Header />
			</div>

			<main className="bg-white text-[18px] text-[#3F3E3E] font-light sm:text-[24px]">
				<Outlet />
			</main>

			<div className="bg-[#FFFCF2] px-5">
				<Footer />
			</div>
		</>
	);
}

export default RootLayout;
