import { Card, CardContent } from "@/components/ui/card";
import {
  ChartNoAxesGantt,
  PackageSearch,
  Users,
  PackageCheck,
} from "lucide-react";

const cardData = [
  {
    title: "Toplam Ürün Sayısı",
    value: "350",
    icon: <PackageSearch className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Toplam Gurup Sayısı",
    value: "120",
    icon: <ChartNoAxesGantt className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Toplam Kullanıcı Sayısı",
    value: "45",
    icon: <Users className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Toplam Sipariş Sayısı",
    value: "780",
    icon: <PackageCheck className="w-8 h-8 text-orange-500" />,
  },
];

export default function Panelmain() {
  return (
    <div className="h-full w-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} className="p-6 text-center shadow-lg h-full">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="flex justify-center mb-6">{card.icon}</div>
              <h2 className="text-lg font-semibold mb-4">{card.title}</h2>
              <p className="text-3xl font-bold">{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
