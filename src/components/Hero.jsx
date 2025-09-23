import { BsPatchCheckFill } from "react-icons/bs";

function Hero() {
	return (
		<div className="bg-linear-to-b from-white via-[#FFFADF] to-white py-45">
			<div className="mx-auto w-full max-w-[1200px] space-y-14 px-5">
				<div className="space-y-12">
					<div className="space-y-8 text-center">
						<h1 className="text-[40px] font-black text-[#060708] md:text-[56px]">
							Fair Launch. No Rugs. Just Vibes
						</h1>

						<p className="mx-auto max-w-[772px] text-[#1A222F] font-normal text-[20px]">
							BoomSquad (BOOM) is a community-driven token on Stellar Soroban
							designed to reward participation, enhance engagement, and secure
							long-term sustainability where value grows with the community and
							trust is locked in liquidity forever
						</p>

						<div className="flex flex-col items-start lg:text-[18px] pt-4 pb-[18px] px-[48px] gap-2 text-[#0B0F15] font-bold bg-[#FFF] max-w-[335px] lg:max-w-[899px] w-full lg:flex-row lg:justify-between mx-auto rounded-[40px] lg:rounded-[72px]">
							<div className="flex items-center gap-3">
								<BsPatchCheckFill className="text-[#FDDA24] text-[25px] shrink-0" />
								<span>Auto-Liquidity</span>
							</div>
							<div className="flex items-center gap-3">
								<BsPatchCheckFill className="text-[#FDDA24] text-[25px] shrink-0" />
								<span>Burn-to-Earn Incentives</span>
							</div>
							<div className="flex items-center gap-3">
								<BsPatchCheckFill className="text-[#FDDA24] text-[25px] shrink-0" />
								<span>Real-Time DEX Pricing</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
