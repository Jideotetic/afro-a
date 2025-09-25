import { Link } from "react-router";

function Logo({ setSheetIsOpen }) {
	return (
		<Link
			to="/"
			onClick={() => {
				setSheetIsOpen(false);
				window.scrollTo({
					top: 0,
				});
			}}
		>
			<img
				src="/Frame (2).svg"
				alt="Logo"
				className="w-[114px] h-[20px] lg:w-[216px] lg:h-[38px]"
			/>
		</Link>
	);
}

export default Logo;
