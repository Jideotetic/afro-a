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
				className="w-[114px] h-[20px] md:w-[216px] md:h-[38px]"
			/>
		</Link>
	);
}

export default Logo;
