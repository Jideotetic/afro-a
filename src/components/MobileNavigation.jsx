import { useEffect } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";

function MobileNavigation({
	side = "right" | "left",
	sheetIsOpen,
	setSheetIsOpen,
	children,
}) {
	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");
		const handler = () => {
			if (mediaQuery.matches) {
				setSheetIsOpen(false);
			}
		};

		handler();
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [setSheetIsOpen]);

	return (
		<Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
			<SheetTrigger asChild>
				<button className="cursor-pointer bg-white rounded-[4px] p-0.5 opacity-100 ring-offset-background transition-opacity hover:opacity-70 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary md:hidden">
					<Menu className="size-10 text-[#FE7A04]" />
					<span className="sr-only">Open mobile navigation</span>
				</button>
			</SheetTrigger>
			<SheetContent
				side={side}
				className="bg-white rounded-br-[20px] rounded-tr-[20px]"
			>
				<SheetHeader className="relative">
					<SheetTitle className="absolute top-5 left-4">
						<Logo setSheetIsOpen={setSheetIsOpen} />
					</SheetTitle>
					<SheetDescription className="sr-only">
						Mobile navigation
					</SheetDescription>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	);
}

export default MobileNavigation;
