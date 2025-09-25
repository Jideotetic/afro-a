import { SERVICES } from "@/lib/constants";

function Services() {
	return (
		<div className="bg-white py-10 pb-10 md:py-[104px]" id="services">
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
					<div key={index} className="rounded-[8px] p-8 bg-[#FFF9F5] space-y-6">
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
	);
}

export default Services;
