import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Basketmainpage() {
  const [open, setOpen] = useState(false);
  const products = [
    {
      id: 1,
      name: "Ürün Adı 1",
      category: "Kategori 1",
      description: "Ürün açıklaması 1",
      price: "100",
      imageUrl:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
    },
    {
      id: 2,
      name: "Ürün Adı 2",
      category: "Kategori 2",
      description: "Ürün açıklaması 2",
      price: "150",
      imageUrl:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
    },
    {
      id: 3,
      name: "Ürün Adı 3",
      category: "Kategori 3",
      description: "Ürün açıklaması 3",
      price: "5",
      imageUrl:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
    },
  ];

  return (
    <div className="mt-6 pb-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <div>
            <Card className="max-w-screen-lg mx-auto shadow-lg bg-white rounded-lg">
              <CardHeader className=" border-b-2 border-gray-200">
                <CardTitle className="text-2xl font-bold text-center">
                  Siparişler
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-6">
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <div className="max-w-screen-xl mx-auto">
                    <div className="space-y-4">
                      {products.map((product, i) => (
                        <Card
                          key={product.id}
                          className="flex flex-col md:flex-row bg-white shadow-md p-4 items-center rounded-lg"
                        >
                          <div className="flex items-center pr-4 border-r-2 border-gray-300">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-48 h-32 object-cover rounded-md"
                            />
                          </div>
                          <div className="flex flex-col w-full pl-6 pr-4 border-r-2 border-gray-300">
                            <CardHeader className="p-0">
                              <CardTitle className="text-xl font-semibold">
                                {product.name}
                              </CardTitle>
                            </CardHeader>
                            <CardDescription className="text-gray-600 mt-1 pl-2">
                              {product.category}
                            </CardDescription>
                            <p className="text-sm text-gray-500 mt-3">
                              {product.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-center md:w-32 mt-4 md:mt-0 px-4">
                            <p className="text-xl font-semibold text-green-500">
                              {product.price}₺
                            </p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row justify-between items-center bg-zinc-100 p-4 rounded-lg shadow-md">
                  <p className="text-xl text-green-500 font-semibold text-center md:text-left">
                    Toplam:{" "}
                    {products.reduce(
                      (total, product) => total + Number(product.price),
                      0
                    )}
                    ₺
                  </p>
                  <Button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setOpen(true)}
                  >
                    Ödeme Yap
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">Ödeme Başarılı!</DialogTitle>
            </DialogHeader>
            <p className="text-center text-gray-600">
              Ödeme işlemi başarıyla gerçekleşti.
            </p>
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setOpen(false)}
                className="bg-dark text-black hover:bg-green-600 px-6"
              >
                Kapat
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
