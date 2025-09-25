import { VISION } from "@/lib/constants";
import React from "react";

function Vision() {
	return (
		<div className="bg-white mt-[102px]">
			<div className="mx-auto relative w-full bg-[#FFF3E8] max-w-[1200px] rounded-[20px] px-5 py-10 pb-10 md:py-[104px] lg:gap-20 lg:px-10">
				<div className="bg-[url(/Group-29.svg)] rounded-t-[20px] bg-cover absolute top-0 left-0 right-0 bg-center bg-no-repeat h-[72px]"></div>

				<div className="bg-[url(/Group-29.svg)] rounded-b-[20px] bg-cover absolute bottom-0 left-0 right-0 bg-center bg-no-repeat h-[72px]"></div>

				<div className="bg-white relative top-0 bottom-0 rounded-[8px] pt-[48px] pb-[64px] space-y-[56px] px-[24px] w-full">
					<div className="mb-[56px] space-y-4 text-center">
						<p className="font-light text-[#FE7A04] text-[18px] md:text-[24px]">
							Our Vision Board
						</p>
						<h2 className="text-[20px] max-w-[690px] mx-auto font-bold text-[#261447] md:text-[28px]">
							Within 6-12 months, Afro Ascend creators are projected to:
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mx-auto">
						{VISION.map((vision, index) => (
							<div key={index} className="flex items-center gap-4">
								{vision.icon && (
									<vision.icon
										className={`inline-block text-[30px] ${
											vision.title ===
												"Produce professional, high-quality content with proper tools." ||
											vision.title ===
												"Sign international record or content distribution deals."
												? "text-[#FE7A04]"
												: vision.title ===
														"Experience growth and trend across diverse platforms." ||
												  vision.title ===
														"Secure sponsorships, partnerships, and business deals."
												? "text-[#2A1552]"
												: "text-[#FFDF00]"
										}`}
									/>
								)}

								<p className="text-[#3F3E3E] font-light text-[18px]">
									{vision.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Vision;
