import {
	CommandInput,
	CommandItem,
	CommandList,
	CommandResponsiveDialog,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}
function DashboardCommand({ open, setOpen }: Props) {
	return (
		<CommandResponsiveDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder='Find a metting or Agent' />
			<CommandList>
				<CommandItem>item</CommandItem>
			</CommandList>
		</CommandResponsiveDialog>
	);
}

export default DashboardCommand;
