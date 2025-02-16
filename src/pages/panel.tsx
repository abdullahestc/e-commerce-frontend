import Layoutpanel from "../app/layoutpanel";
import Panelmain from "@/container/panelmain";
import { SquareTerminal, Bot, BookOpen, Settings2 } from "lucide-react";
const sidebarItems = [
  { title: "Dashboard", url: "/", icon: SquareTerminal },
  { title: "Ürünler", url: "/urunler", icon: Bot },
  { title: "Ürün Gurupları", url: "/urun-guruplari", icon: BookOpen },
  { title: "Kullanıcılar", url: "/kullanicilar", icon: Settings2 },
];

export default function Panel() {
  return (
    <>
      <Layoutpanel>
        <Panelmain />
      </Layoutpanel>
    </>
  );
}
