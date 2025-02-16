import { Card, CardContent } from "@/components/ui/card";

const cardData = [
  { title: "Toplam Ürün Sayısı", value: "350" },
  { title: "Toplam Gurup Sayısı", value: "120" },
  { title: "Toplam Kullanıcı Sayısı", value: "45" },
  { title: "Toplam Sipariş Sayısı", value: "780" },
];

export default function Panelmain() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cardData.map((card, index) => (
        <Card key={index} className="p-6 text-center shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
