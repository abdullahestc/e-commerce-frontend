import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductMainPage() {
  const images = [
    "https://cdn.akakce.com/z/insta360/insta360-link-2-4k-ultra-hd-ai.jpg",
    "https://cdn.akakce.com/z/insta360/insta360-link-2-4k-ultra-hd-ai-3.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 m-6">
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 bg-white shadow-lg rounded-xl border">
        <div className=" md:w-1/3 flex flex-col items-center">
          <div className="w-full">
            <img
              src={selectedImage}
              alt="Ürün Resmi"
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Ürün ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 rounded-lg cursor-pointer border transition-all ${
                  selectedImage === img
                    ? "border-blue-500 ring-2 ring-blue-300 scale-105"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col mt-12">
          <Card className="w-full border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Insta360 Link 2 4K Ultra HD AI
              </CardTitle>
              <p className="text-sm text-gray-500">Webcam / Kamera</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base leading-relaxed">
                Yapay zeka destekli, 4K Ultra HD çözünürlüğe sahip bu gelişmiş
                webcam, içerik üreticileri ve profesyoneller için ideal bir
                seçimdir.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold text-green-600">₺8.999,00</div>
              <Button className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 px-6 py-3 text-lg">
                <ShoppingCart className="w-5 h-5" />
                Sepete Ekle
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
