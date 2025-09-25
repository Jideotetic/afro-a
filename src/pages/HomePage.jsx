import Hero from "@/components/Hero";
import { VISION } from "@/lib/constants";

import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Vision from "@/components/Vision";

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

			<Services />

			<Benefits />

			<Vision />

			<FAQ />
		</>
	);
}

export default HomePage;
