import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "../../modules/dashboard/ui/component/dashboard-sidebar";
import DashboardNavbar from "../../modules/dashboard/ui/component/dashboard-navbar";

interface Props {
	children: React.ReactNode;
}

function Layout({ children }: Props) {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<main className='flex flex-col h-screen w-screen bg-muted'>
				<DashboardNavbar />
				{children}
			</main>
		</SidebarProvider>
	);
}

export default Layout;
