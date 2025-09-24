import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { SERVICES, VISION } from "@/lib/constants";

const STEPS = [
	{
		title: "Connect Wallet",
		description: "Securely link your funded crypto wallet to get started.",
		icon: "/Group 313.svg",
	},
	{
		title: "Enter BOOM Amount",
		description: "Decide how many BOOM tokens you want to mint in one go",
		icon: "/Group 319.svg",
	},
	{
		title: "Check Price Peg",
		description: "Mint price auto-follows live BOOM/XLM on Stellar DEX",
		icon: "/Group 318.svg",
	},
	{
		title: "Confirm & Chill",
		description: "BOOM shows up instantly in your Stellar wallet.",
		icon: "/Group 320.svg",
	},
];

function HomePage() {
	return (
		<>
			<Hero />

			<div className="bg-white mt-[102px]">
				<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 lg:flex-row px-5 py-10 pb-10 md:py-[104px] lg:gap-20 lg:px-10">
					<img
						className="mx-auto h-auto w-full sm:w-1/2 order-2 lg:order-1"
						src="/Frame 10750.svg"
						alt=""
					/>

					<div className="flex items-center lg:order-2">
						<div className="space-y-6 text-[#3F3E3E]">
							<h2 className="text-[32px] font-bold text-[#261447] md:text-[40px]">
								Helping Creatives Create Better
							</h2>

							<p className="text-[18px] font-light md:text-[20px]">
								We go beyond exposure — Afro Ascend invests in creators by
								covering the creative costs, setting up global monetization, and
								guiding the growth journey of African creatives.
							</p>

							<p className="text-[18px] font-light md:text-[20px]">
								Afro Ascend mission is to remove barriers, unlock monetization
								worldwide, and give creators the tools they need to thrive.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white py-10 pb-10 md:py-[104px]">
				<div className="mb-[56px] space-y-4 text-center">
					<p className="font-light text-[#3F3E3E] text-[18px] md:text-[20px]">
						What We Do
					</p>
					<h2 className="text-[32px] font-bold text-[#261447] md:text-[40px]">
						Our Services
					</h2>
				</div>
				<div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1200px] px-5 lg:px-10">
					{SERVICES.map((service, index) => (
						<div
							key={index}
							className="rounded-[8px] p-8 bg-[#FFF9F5] space-y-6"
						>
							<div className="rounded-full w-fit bg-white p-3">
								{service.icon && (
									<service.icon
										className={`inline-block text-[30px] ${
											service.title === "Monetization Setup (USA & UK)" ||
											service.title === "Collaboration Opportunities" ||
											service.title === "Sponsorship for Content Projects"
												? "text-[#FE7A04]"
												: service.title ===
														"Content Production & Studio Access" ||
												  service.title === "Training & Mentorship" ||
												  service.title === "Global Visibility and Recognition"
												? "text-[#2A1552]"
												: service.title === "Resources & Equipment Support" ||
												  service.title === "Promotion & Growth" ||
												  service.title === "Analytics & Compliance Support"
												? "text-[#FFDF00]"
												: ""
										}`}
									/>
								)}
							</div>

							<div className="space-y-3">
								<p className="text-[#261447] text-[20px] font-bold">
									{service.title}
								</p>
								<p className="font-light text-[#3F3E3E] text-[18px]">
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-white py-10 pb-10 md:py-[104px]">
				<div className="mb-[56px] space-y-4 text-center">
					<p className="font-light text-[#3F3E3E] text-[18px] md:text-[20px]">
						Why Afro Ascend
					</p>
					<h2 className="text-[32px] font-bold text-[#261447] md:text-[40px]">
						Fueling Talents Without Limits
					</h2>
				</div>
				<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 md:flex-row px-5 items-center md:gap-10 lg:px-10">
					<img
						className="mx-auto h-auto w-full sm:w-1/2"
						src="/Frame 10799.svg"
						alt=""
					/>

					<div className="flex flex-col items-start gap-8">
						<div className="space-y-3 lg:space-y-5 text-[#3F3E3E]">
							<div className="space-y-0.5 lg:space-y-2">
								<p className="text-[20px] text-[#0D0106] font-medium">
									Barrier Removal
								</p>
								<p className="text-[18px] text-[#3F3E3E] font-light">
									From equipment to platform access, we eliminate roadblocks.
								</p>
							</div>

							<div className="space-y-0.5 lg:space-y-2">
								<p className="text-[20px] text-[#0D0106] font-medium">
									Holistic Support
								</p>
								<p className="text-[18px] text-[#3F3E3E] font-light">
									Beyond exposure — we provide funding, training, and
									mentorship.
								</p>
							</div>

							<div className="space-y-0.5 lg:space-y-2">
								<p className="text-[20px] text-[#0D0106] font-medium">
									Transparency
								</p>
								<p className="text-[18px] text-[#3F3E3E] font-light">
									Clear agreements and fair revenue-sharing with creators.
								</p>
							</div>

							<div className="space-y-0.5 lg:space-y-2">
								<p className="text-[20px] text-[#0D0106] font-medium">
									Cultural Pride
								</p>
								<p className="text-[18px] text-[#3F3E3E] font-light">
									We champion African talent as the next wave of global creative
									power.
								</p>
							</div>
						</div>

						<Button
							size="lg"
							className="bg-[#FE7A04] w-fit text-white"
							variant="secondary"
						>
							Join Now
						</Button>
					</div>
				</div>
			</div>

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

			<div className="bg-white py-10 pb-10 md:py-[104px]">
				<div className="mb-[56px] space-y-4 text-center">
					<p className="font-light text-[#3F3E3E] text-[18px] md:text-[20px]">
						FAQs
					</p>
					<h2 className="text-[32px] font-bold text-[#261447] md:text-[40px]">
						Frequently Asked Questions
					</h2>
				</div>

				<div className="mx-auto border-2 flex w-full max-w-[1200px] flex-col gap-6 md:flex-row px-5 items-center md:gap-10 lg:px-10"></div>
			</div>
		</>
	);
}

export default HomePage;
