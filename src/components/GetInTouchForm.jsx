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
// import { Input } from "./ui/input";
import CustomInput from "./CustomInput";
import { Textarea } from "./ui/textarea";
// import FileUpload from "./FileUpload";

function GetInTouchForm({ tag = "desktop" | "mobile" }) {
	return (
		<Dialog>
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
				<DialogContent className="scrollbar-hidden max-h-[calc(100vh-150px)] overflow-scroll bg-white sm:max-w-[1128px]">
					<DialogHeader>
						<DialogTitle className="text-left text-[#FE7A04] text-[20px] sm:text-[32px]">
							Join the Afro Ascend Creator Circle
						</DialogTitle>
						<DialogDescription className="text-[#6C6B6B] text-left font-light sm:text-[18px]">
							Fill out the form and we will reach out to you.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-5 sm:grid-cols-2">
						<CustomInput
							label="Full Name"
							placeholder="Enter Name"
							type="text"
						/>

						<CustomInput
							label="Phone Number"
							placeholder="Enter Phone Number"
							type="text"
						/>

						<CustomInput
							label="Email Address"
							placeholder="Enter Email Address"
							type="email"
						/>

						<CustomInput
							label="Which options apply to you?"
							placeholder="Select"
							// prefix="https://"
							type="url"
						/>

						<Label className="flex flex-col items-start gap-2 font-light text-[#09032A]">
							Briefly tell us about your creative journey
							<Textarea
								className="h-[148px] rounded-[8px] border border-[#D0D5E0] px-4 placeholder:text-sm placeholder:text-[#8791A7] focus:border-none focus:outline-0 focus:outline-none focus-visible:border-none focus-visible:ring-0"
								placeholder="Type text..."
							/>
						</Label>

						<Label className="flex flex-col items-start gap-2 font-light text-[#09032A]">
							Anything question for Afro Ascend? (optional)
							<Textarea
								className="h-[148px] rounded-[8px] border border-[#D0D5E0] px-4 placeholder:text-sm placeholder:text-[#8791A7] focus:border-none focus:outline-0 focus:outline-none focus-visible:border-none focus-visible:ring-0"
								placeholder="Type text..."
							/>
						</Label>
					</div>
					<DialogFooter>
						<DialogClose asChild></DialogClose>
						<Button
							className="bg-[#FE7A04] text-white cursor-pointer"
							variant="secondary"
							size="lg"
							type="submit"
						>
							Let's Connect
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}

export default GetInTouchForm;
