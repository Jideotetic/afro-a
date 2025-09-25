import { FAQs } from "@/lib/constants";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
	return (
		<div className="bg-white mt-[104px] py-10 pb-10 md:py-[104px]" id="faqs">
			<div className="mb-[56px] space-y-4 text-center">
				<p className="font-light text-[#3F3E3E] text-[18px] md:text-[20px]">
					FAQs
				</p>
				<h2 className="text-[32px] font-bold text-[#261447] md:text-[40px]">
					Frequently Asked Questions
				</h2>
			</div>

			<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 md:flex-row px-5 items-center md:gap-10 lg:px-10">
				<Accordion type="single" collapsible className="w-full">
					{FAQs.map((item, index) => (
						<AccordionItem
							className="border-[#FFF3E8]"
							key={item.id}
							value={item.id}
						>
							<AccordionTrigger className="text-[#261447] hover:no-underline text-[20px] font-light py-6">
								<p className="flex gap-1">
									{index + 1}. <span>{item.title}</span>
								</p>
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								{item.content.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
}

export default FAQ;
