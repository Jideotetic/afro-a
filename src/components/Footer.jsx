import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import React from "react";
import { Link } from "react-router";

function Footer() {
	return (
		<footer className="text-[#0D0106] text-base md:text-[18px] font-light relative">
			<div className="pt-14 sm:pt-16 pb-30 sm:pb-22">
				<div className="w-full mx-auto max-w-[1200px] flex flex-col sm:flex-row gap-6 sm:justify-between flex-wrap">
					<div className="space-y-5 max-w-[320px] md:max-w-[350px]">
						<div className="flex flex-col gap-3">
							<img
								src="/Frame (2).svg"
								alt="logo"
								className="w-[114px] h-[20px] lg:w-[216px] lg:h-[38px]"
							/>

							<span>
								For creators who may not be known today, but will shape the
								culture tomorrow.
							</span>
						</div>

						<div className="flex flex-col gap-2 font-normal">
							<span>afroascend@gmail.com</span>
							<Link className="text-[#FE7A04] hover:underline">
								Chat with us
							</Link>
						</div>
					</div>

					<div className="space-y-3">
						<div className="text-[18px] font-bold text-[#FE7A04]">Explore</div>

						<ul className="flex flex-col gap-3">
							{NAV_LINKS.map((link) => (
								<li key={link.title}>
									<a
										className="hover:text-[#FE7A04] hover:underline"
										href={link.href}
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-3">
						<div className="text-[18px] font-bold text-[#FE7A04]">
							Social Links
						</div>

						<ul className="space-y-3">
							{SOCIAL_LINKS.map((link) => (
								<li
									key={link.title}
									className="group flex hover:text-[#FE7A04] items-center gap-2"
								>
									{link.icon && (
										<link.icon className="rounded-[4px] group-hover:text-[#FE7A04] text-[20px] text-[#0D0106]" />
									)}
									<a href={link.href}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 bg-[url(/Group-30.svg)] bg-cover bg-center bg-no-repeat py-10">
				<div className="mx-auto w-full max-w-[1200px] sm:text-center">
					©️ 2025 Afro Ascend. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
