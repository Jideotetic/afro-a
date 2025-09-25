import GetInTouchForm from "./GetInTouchForm";

function Benefits() {
	return (
		<div className="bg-white py-10 pb-10 md:py-[104px]" id="benefits">
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
								Beyond exposure — we provide funding, training, and mentorship.
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

					<GetInTouchForm tag="hero" title="Join Now" />
				</div>
			</div>
		</div>
	);
}

export default Benefits;
