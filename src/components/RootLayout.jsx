import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
	return (
		<>
			<div className="fixed bg-[#FFFCF2] right-0 left-0 z-50 bg-[url(/Group-30.svg)] bg-cover bg-center bg-no-repeat px-5 py-5">
				<Header />
			</div>

			<main>
				<Outlet />
			</main>

			<div className="bg-[#FFFCF2]">
				<Footer />
			</div>
		</>
	);
}

export default RootLayout;
