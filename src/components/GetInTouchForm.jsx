import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import CustomInput from "./CustomInput";
import { Textarea } from "./ui/textarea";
import { RiInstagramFill, RiTiktokFill, RiTwitterXFill } from "react-icons/ri";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Input } from "./ui/input";
import CustomSelect from "./CustomSelect";

function GetInTouchForm({ tag = "desktop" | "mobile" }) {
	const [open, setOpen] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [whatsApp, setWhatsApp] = useState("");
	const [phone, setPhone] = useState("");
	const [sameAsPhone, setSameAsPhone] = useState(false);
	const [pagesMonetized, setPagesMonetized] = useState(false);

	const options = [
		{ value: "musician", label: "Musician" },
		{ value: "content-creator", label: "Content Creator" },
		{ value: "comedian", label: "Comedian" },
		{ value: "skit-maker", label: "Skit Maker" },
		{ value: "artist", label: "Artist" },
	];

	const monetizedOptions = [
		{ value: "yes", label: "Yes" },
		{ value: "no", label: "No" },
	];

	const pagesMonetizedOptions = [
		{ value: "facebook", label: "Facebook" },
		{ value: "tiktok", label: "TikTok" },
		{ value: "instagram", label: "Instagram" },
		{ value: "twitter", label: "Twitter" },
		{ value: "youtube", label: "YouTube" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();

		setSubmitted(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSubmitted(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<form>
				<DialogTrigger asChild>
					<Button
						size="lg"
						className={`bg-[#FE7A04] text-white ${
							tag === "desktop" ? "hidden md:block" : "block w-full"
						} cursor-pointer `}
						variant="secondary"
					>
						Get In Touch
					</Button>
				</DialogTrigger>
				{!submitted ? (
					<DialogContent className="scrollbar-hidden max-h-[calc(100vh-100px)] pt-[56px] pb-[72px] px-[64px] overflow-scroll w-full bg-white sm:max-w-[1128px]">
						<DialogHeader>
							<button
								onClick={handleClose}
								className="flex cursor-pointer items-center gap-2"
							>
								<IoIosArrowDropleftCircle className="text-[32px] text-[#2A1552]" />
								<span className="text-[18px] text-[#2A1552]">Back</span>
							</button>
							<DialogTitle className="text-left text-[#FE7A04] text-[20px] sm:text-[32px]">
								Join the Afro Ascend Creator Circle
							</DialogTitle>
							<DialogDescription className="text-[#6C6B6B] text-left font-light sm:text-[18px]">
								Fill out the form and we will reach out to you.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-6 sm:gap-10 sm:grid-cols-2">
							<CustomInput
								label="Full Name"
								placeholder="Enter Name"
								type="text"
							/>

							<div className="flex flex-col gap-1 text-sm">
								<label className="block  font-light text-[#3F3E3E]">
									Phone Number
								</label>
								<PhoneInput
									defaultCountry="ng"
									value={phone}
									onChange={(phone) => setPhone(phone)}
									inputStyle={{
										borderTopRightRadius: "12px",
										borderBottomRightRadius: "12px",
										fontSize: "14px",
										height: "46px",
										width: "100%",
									}}
									countrySelectorStyleProps={{
										buttonStyle: {
											borderTopLeftRadius: "12px",
											borderBottomLeftRadius: "12px",
											height: "46px",
											width: "78px",
										},
									}}
								/>
							</div>

							<CustomInput
								label="Email Address"
								placeholder="Enter Email Address"
								type="email"
							/>

							<CustomSelect
								options={options}
								label="Which options apply to you?"
								isMulti={true}
								closeMenuOnSelect={false}
							/>

							<div className="flex flex-col gap-1 text-sm">
								<div className="flex justify-between flex-wrap gap-2">
									<label className="block  font-light text-[#3F3E3E] shrink-0">
										WhatsApp Contact
									</label>

									<Label className="font-light text-[#2A1552] flex items-center gap-1 shrink-0">
										<Input
											type="checkbox"
											className="w-3 h-3 accent-orange-600"
											checked={sameAsPhone}
											onChange={(e) => {
												const isChecked = e.target.checked;
												setSameAsPhone(isChecked);
												if (isChecked) {
													setWhatsApp(phone);
												}
											}}
										/>
										Same as Phone number
									</Label>
								</div>

								<PhoneInput
									defaultCountry="ng"
									value={whatsApp}
									onChange={(whatsApp) => setWhatsApp(whatsApp)}
									inputStyle={{
										borderTopRightRadius: "12px",
										borderBottomRightRadius: "12px",
										fontSize: "14px",
										height: "46px",
										width: "100%",
									}}
									countrySelectorStyleProps={{
										buttonStyle: {
											borderTopLeftRadius: "12px",
											borderBottomLeftRadius: "12px",
											height: "46px",
											width: "78px",
										},
									}}
								/>
							</div>

							<CustomInput
								label="Instagram Page"
								placeholder="Paste URL"
								prefix="https://"
								type="url"
							/>

							<CustomInput
								label="TikTok Page"
								placeholder="Paste URL"
								prefix="https://"
								type="url"
							/>

							<CustomInput
								label="Facebook Page"
								placeholder="Paste URL"
								prefix="https://"
								type="url"
							/>

							<CustomSelect
								options={monetizedOptions}
								label="Is any of your social media pages monetized?"
								isMulti={false}
								closeMenuOnSelect={true}
								onChange={(e) => {
									console.log(e);
									if (e.value === "yes") {
										setPagesMonetized(true);
									} else {
										setPagesMonetized(false);
									}

									console.log(pagesMonetized);
								}}
							/>

							<CustomSelect
								options={pagesMonetizedOptions}
								label="Select the monetized page(s)"
								isMulti={true}
								closeMenuOnSelect={false}
								disabled={!pagesMonetized}
							/>

							<Label className="flex flex-col items-start gap-2 font-light text-[#09032A]">
								Briefly tell us about your creative journey
								<Textarea
									className="h-[148px] rounded-[8px] border border-[#D0D5E0] px-4 placeholder:text-sm placeholder:text-[#8791A7] focus:border-[#D0D5E0] focus:outline-1 focus-visible:border focus-visible:ring-1"
									placeholder="Type text..."
								/>
							</Label>

							<Label className="flex flex-col items-start gap-2 font-light text-[#09032A]">
								Anything question for Afro Ascend? (optional)
								<Textarea
									className="h-[148px] rounded-[8px] border border-[#D0D5E0] px-4 placeholder:text-sm placeholder:text-[#8791A7] focus:border-[#D0D5E0] focus:outline-1 focus-visible:border focus-visible:ring-1"
									placeholder="Type text..."
								/>
							</Label>
						</div>
						<DialogFooter className="flex items-center sm:justify-between flex-wrap gap-8">
							<ul className="flex items-center flex-wrap gap-5">
								<li className="group hover:text-[#FE7A04] flex items-center gap-2">
									<PiWhatsappLogoFill className="rounded-[4px] group-hover:text-[#FE7A04] text-[20px] text-[#0D0106]" />
									<a href="">WhatsApp</a>
								</li>
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
							</ul>

							<DialogClose asChild>
								<Button
									className="bg-[#FE7A04] w-full sm:w-fit text-white cursor-pointer"
									variant="secondary"
									size="lg"
									type="submit"
									onClick={handleSubmit}
								>
									Let's Connect
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				) : (
					<DialogContent className="scrollbar-hidden max-h-[calc(100vh-150px)] overflow-scroll bg-white sm:max-w-[592px]">
						<DialogHeader>
							<DialogTitle className="sr-only">
								Join the Afro Ascend Creator Circle
							</DialogTitle>
							<DialogDescription className="sr-only">
								Fill out the form and we will reach out to you.
							</DialogDescription>
						</DialogHeader>
						<div className="space-y-8">
							<img src="/Frame 43557.svg" className="mx-auto h-auto" alt="" />

							<div className="space-y-3 text-center mx-auto max-w-[287px]">
								<p className="text-[20px] text-[#2A1552] font-bold">
									Details Sent
								</p>
								<p className="sm:text-[18px] text-[#6C6B6B] font-light">
									Your details have been successfully submitted. You will hear
									from us soon.
								</p>
							</div>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button
									className="bg-[#FE7A04] w-full text-white cursor-pointer"
									variant="secondary"
									size="lg"
									onClick={handleClose}
								>
									Got it
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				)}
			</form>
		</Dialog>
	);
}

export default GetInTouchForm;
