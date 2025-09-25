import GetInTouchForm from "./GetInTouchForm";

function Hero() {
	return (
		<div className="pt-[133px] bg-[#FEF7F1] relative">
			<div className="mx-auto h-full flex items-center justify-center w-full max-w-[1200px] space-y-14 px-5">
				<div className="h-full flex w-full flex-col items-center gap-12 lg:flex-row">
					<div className="flex flex-col gap-6 lg:max-w-[576px]">
						<div className="space-y-8">
							<h1 className="text-[32px] text-[#0D0106] font-bold md:text-[48px] font-syne">
								Empowering African{" "}
								<span className="text-[#FE7A04]">Creatives</span> to Rise Beyond
								Borders
							</h1>

							<p className="text-[18px] font-light md:text-[24px] text-[#3F3E3E]">
								Afro Ascend is committed to fueling African talents — from
								musicians to comedians, skit makers, and content creators — with
								resources, funding and international access to excel globally.
							</p>
						</div>

						<GetInTouchForm tag="hero" />
					</div>

					<img
						className="mx-auto h-auto w-full bg-radial from-[#FFFADE] animate-pulse from-40% to-[#FEF7F1] sm:w-1/2"
						src="/microphone.svg"
						alt=""
					/>
				</div>
			</div>

			<div className="bg-[url(/Group-29.svg)] bg-cover absolute bottom-0 left-0 right-0 bg-center bg-no-repeat h-[72px]" />
		</div>
	);
}

export default Hero;
