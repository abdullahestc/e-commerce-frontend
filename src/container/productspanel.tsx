import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function Productspanel() {
  const products = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 1",
      category: "Kategori A",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺999,00",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 2",
      category: "Kategori B",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺899,00",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 3",
      category: "Kategori C",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺799,00",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 4",
      category: "Kategori D",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺699,00",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 5",
      category: "Kategori E",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺599,00",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 6",
      category: "Kategori F",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺499,00",
    },
    {
      id: 7,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 7",
      category: "Kategori G",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺399,00",
    },
    {
      id: 8,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 8",
      category: "Kategori H",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺299,00",
    },
    {
      id: 9,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 9",
      category: "Kategori E",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺599,00",
    },
    {
      id: 10,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 10",
      category: "Kategori F",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺499,00",
    },
    {
      id: 11,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 11",
      category: "Kategori G",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺399,00",
    },
    {
      id: 12,
      image:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
      name: "Ürün 12",
      category: "Kategori H",
      description: "Bu ürün hakkında kısa açıklama.",
      price: "₺299,00",
    },
  ];
  return (
    <>
      <div className="mt-6 px-8 max-w-screen-xl mx-auto">
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} passHref>
                  <Card key={product.id} className="p-4 bg-gray-100 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto rounded-lg flex justify-center"
                    />
                    <h3 className="text-lg font-medium mt-3 flex justify-center">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex justify-center">
                      {product.category}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 flex justify-center">
                      {product.description}
                    </p>
                    <p className="text-xl font-bold text-green-500 mt-2 flex justify-center">
                      {product.price}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
        <Pagination>
          <PaginationContent className="p-4">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
