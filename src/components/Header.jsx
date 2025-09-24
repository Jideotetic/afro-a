import { NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import GetInTouchForm from "./GetInTouchForm";

function Header() {
	const [sheetIsOpen, setSheetIsOpen] = useState(false);

	return (
		<header className="mx-auto flex w-full max-w-[1120px] items-center justify-between">
			<Logo />

			<div className="flex items-center justify-between gap-14">
				{/* DESKTOP NAV */}
				<nav className="hidden md:block">
					<ul className="flex gap-12">
						{NAV_LINKS.map((link) => (
							<li key={link.title}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "font-extrabold text-[#FE7A04] hover:underline"
											: "text-[#3F3E3E] hover:text-[#FE7A04] hover:underline"
									}
									to={link.href}
								>
									{link.title}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<GetInTouchForm tag="desktop" />

				{/* MOBILE NAV */}
				<MobileNavigation
					side="left"
					sheetIsOpen={sheetIsOpen}
					setSheetIsOpen={setSheetIsOpen}
				>
					<div className="flex min-h-1/2 flex-col justify-center gap-14 px-4">
						<nav>
							<ul className="flex flex-col gap-10">
								{NAV_LINKS.map((link) => (
									<li key={link.title}>
										{link.title === "Testimonials" ? (
											<a
												className="text-[#0D0516] hover:text-[#2F0FD1] hover:underline"
												href={link.href}
												onClick={() => setSheetIsOpen(false)}
											>
												{link.title}
											</a>
										) : (
											<NavLink
												className={({ isActive }) =>
													isActive
														? "font-extrabold text-[#FE7A04] hover:underline"
														: "text-[#3F3E3E] hover:text-[#FE7A04] hover:underline"
												}
												to={link.href}
												onClick={() => setSheetIsOpen(false)}
											>
												{link.title}
											</NavLink>
										)}
									</li>
								))}
							</ul>
						</nav>

						<GetInTouchForm tag="mobile" />
					</div>
				</MobileNavigation>
			</div>
		</header>
	);
}

export default Header;
