import { NAV_LINKS } from "@/lib/constants";
import React from "react";
import { Link } from "react-router";
import { RiInstagramFill, RiTiktokFill, RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

function Footer() {
	return (
		<footer className="text-[#0D0106] md:text-[18px] font-light relative">
			<div className="px-5 py-10 pb-30 sm:pb-22">
				<div className="w-full mx-auto max-w-[1120px] flex flex-col sm:flex-row gap-6 sm:justify-between flex-wrap">
					<div className="space-y-5 max-w-[320px] md:max-w-[350px]">
						<div className="flex flex-col gap-3">
							<span className="text-[24px] font-extrabold text-[#FE7A04]">
								AFRO.A
							</span>
							<span>
								For creators who may not be known today, but will shape the
								culture tomorrow.
							</span>
						</div>

						<div className="flex flex-col gap-2 font-normal">
							<span>afroascend@gmail.com</span>
							<span>+12384652670</span>
						</div>
					</div>
					<div className="space-y-3">
						<div className="text-[18px] font-bold text-[#FE7A04]">Explore</div>

						<ul className="flex flex-col gap-3">
							{NAV_LINKS.map((link) => (
								<li key={link.title}>
									<Link
										className="hover:text-[#FE7A04] hover:underline"
										to={link.href}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-3">
						<div className="text-[18px] font-bold text-[#FE7A04]">
							Social Links
						</div>

						<ul className="space-y-3">
							<li className="group flex hover:text-[#FE7A04] items-center gap-2">
								<RiTwitterXFill className="rounded-[4px] group-hover:text-[#FE7A04] text-[20px] text-[#0D0106]" />
								<a href="">Twitter</a>
							</li>
							<li className="group hover:text-[#FE7A04] flex items-center gap-2">
								<RiInstagramFill className="rounded-[4px] group-hover:text-[#FE7A04] text-[20px] text-[#0D0106]" />
								<a href="">Instagram</a>
							</li>
							<li className="group hover:text-[#FE7A04] flex items-center gap-2">
								<RiTiktokFill className="rounded-[4px] group-hover:text-[#FE7A04] text-[20px] text-[#0D0106]" />
								<a href="">TikTok</a>
							</li>
							<li className="group hover:text-[#FE7A04] flex items-center gap-2">
								<FaFacebook className="rounded-[4px] group-hover:text-[#FE7A04] text-[20px] text-[#0D0106]" />
								<a href="">Facebook</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 bg-[url(/Group-30.svg)] bg-cover bg-center bg-no-repeat px-5 py-10">
				<div className="mx-auto w-full max-w-[1120px] sm:text-center">
					©️ 2025 Afro Ascend. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
