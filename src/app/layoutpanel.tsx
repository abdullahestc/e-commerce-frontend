import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function Layoutpanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Ana İçerik Alanı */}
        <div className="flex-1 flex flex-col">
          {/* Sidebar Aç/Kapat Butonu */}
          <header className="p-4 bg-white shadow-md">
            <SidebarTrigger />
          </header>

          {/* Sayfa İçeriği */}
          <main className="flex-1 p-6 bg-gray-100">{children}</main>

          {/* Footer */}
          <footer className="p-4 bg-gray-200 text-center text-sm">
            © 2025 Tüm Hakları Saklıdır.
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
