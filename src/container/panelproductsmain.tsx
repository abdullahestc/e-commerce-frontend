﻿"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";

type FileWithPreview = File & {
  preview: string;
};

export default function Panelproductsmain() {
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

  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [open, setOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("Ürün Ekle");

  const onDrop = (acceptedFiles: File[]) => {
    const previewFiles = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setFiles([...files, ...previewFiles]);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  const handleDrawerOpen = (action: string, productId?: number) => {
    setDrawerTitle(action === "detail" ? "Ürün Detayı" : "Ürün Düzenle");
    setOpen(true);
    console.log(`${action} - Ürün ID:`, productId);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Ürünler</h1>
      <div className="mt-6 px-4 md:px-8 max-w-screen-xl mx-auto space-y-6">
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <Input placeholder="Ürün Ara..." className="w-full sm:w-52" />
                <Select>
                  <SelectTrigger className="w-full sm:w-44">
                    <SelectValue placeholder="Ürün Gurubu Seç" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Seçenek 1</SelectItem>
                    <SelectItem value="active">Seçenek 2</SelectItem>
                    <SelectItem value="passive">Seçenek 3</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-start">
                  <Button variant="outline" size="default">
                    Ara
                  </Button>
                  <Button variant="outline" size="default">
                    Temizle
                  </Button>
                </div>
              </div>
              <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                <Button
                  variant="default"
                  className="w-full sm:w-auto"
                  onClick={() => setOpen(true)}
                >
                  Ürün Ekle
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 bg-white shadow-md rounded-lg">
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="p-4 bg-gray-100 shadow-sm relative"
                >
                  <div className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2"
                        >
                          <Ellipsis className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleDrawerOpen("detail", product.id)}
                        >
                          Detay
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDrawerOpen("edit", product.id)}
                        >
                          Düzenle
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log("Sil", product.id)}
                          className="text-red-500"
                        >
                          Sil
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="p-6 w-full w-[100%] mx-auto">
            <DrawerHeader>
              <DrawerTitle className="text-center text-lg md:text-xl">
                {drawerTitle}
              </DrawerTitle>
            </DrawerHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Label htmlFor="productImageUpload" className="block">
                  Ürün Resimleri
                </Label>
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-gray-500 transition mt-5"
                >
                  <input {...getInputProps()} id="productImageUpload" />
                  <p className="text-gray-500 text-sm">
                    Resimleri buraya sürükleyin veya tıklayarak yükleyin.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {files.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={file.preview}
                          alt={`preview-${index}`}
                          className="w-20 h-20 object-cover rounded-lg border"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div>
                  <Label htmlFor="productName">Ürün Adı</Label>
                  <Input
                    id="productName"
                    placeholder="Ürün Adı"
                    className="mt-2 w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="productGroup">Ürün Grubu</Label>
                  <Select>
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue placeholder="Ürün Grubu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Seçenek 1</SelectItem>
                      <SelectItem value="active">Seçenek 2</SelectItem>
                      <SelectItem value="passive">Seçenek 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="productPrice">Ürün Fiyatı</Label>
                  <Input
                    id="productPrice"
                    type="number"
                    placeholder="Ürün Fiyatı"
                    className="mt-2 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <Label htmlFor="productDescription">Ürün Açıklaması</Label>
                <Textarea
                  id="productDescription"
                  placeholder="Açıklama girin..."
                  className="min-h-[205px] w-full"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <DrawerClose asChild>
                <Button variant="outline">Kapat</Button>
              </DrawerClose>
              <Button variant="default">Ekle</Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
