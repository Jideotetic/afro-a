import { Link } from "react-router";

function Logo() {
	return (
		<Link
			to="/"
			onClick={() => {
				window.scrollTo({
					top: 0,
				});
			}}
			className="text-[24px] font-extrabold text-[#FE7A04]"
		>
			AFRO.A
		</Link>
	);
}

export default Logo;
