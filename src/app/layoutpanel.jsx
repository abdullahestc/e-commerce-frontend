import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
export default function Layoutpanel({ children }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <main>{children}</main>
      <footer>
        <p>Site Footer</p>
      </footer>
    </div>
  );
}
