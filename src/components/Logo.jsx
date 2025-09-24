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
			<img src="/Frame (2).svg" alt="" />
		</Link>
	);
}

export default Logo;
