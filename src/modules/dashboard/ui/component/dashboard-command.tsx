import {
	CommandDialog,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}
function DashboardCommand({ open, setOpen }: Props) {
	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder='Find a metting or Agent' />
			<CommandList>
				<CommandItem>item</CommandItem>
			</CommandList>
		</CommandDialog>
	);
}

export default DashboardCommand;
