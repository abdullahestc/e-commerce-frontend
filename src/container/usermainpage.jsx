"use client";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import { Edit2, LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
export default function Usermainpage() {
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
      image: "/assets/img/product-3.png",
      imageUrl:
        "https://media.istockphoto.com/id/1297733579/tr/vekt%C3%B6r/saat-9u-g%C3%B6steren-saat-simgesi.jpg?s=612x612&w=0&k=20&c=2D8XN0OLBVO3HpaLe88kCVVzI1HK09OoVphtQsAcJz4=",
    },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editData, setEditData] = useState({
    name: "Ahmet",
    surname: "Yılmaz",
    email: "ahmet@example.com",
    phone: "+90 555 123 4567",
    password: "••••••••",
  });
  const handleLogout = () => {
    console.log("Kullanıcı çıkış yaptı!");
  };
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto bg-white rounded-lg shadow-md mt-8 bg-zinc-100">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ad</TableHead>
              <TableHead>Soyad</TableHead>
              <TableHead>E-posta</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Parola</TableHead>
              <TableHead className="text-right">İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">{editData.name}</TableCell>
              <TableCell>{editData.surname}</TableCell>
              <TableCell>{editData.email}</TableCell>
              <TableCell>{editData.phone}</TableCell>
              <TableCell>{editData.password}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon" onClick={toggleDrawer}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="icon">
                        <LogOut className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Çıkış Yap</AlertDialogTitle>
                        <AlertDialogDescription>
                          Çıkış yapmak istediğinizden emin misiniz?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>İptal</AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogout}>
                          Evet, Çıkış Yap
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <main className="m-6">
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
                  {products.map((product) => (
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
          </CardContent>
        </Card>
      </main>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="p-6">
          <DrawerHeader>
            <DrawerTitle className="text-center">
              Kullanıcı Bilgilerini Düzenle
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700">Ad</label>
              <Input
                type="text"
                name="name"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                placeholder="Ad"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700">Soyad</label>
              <Input
                type="text"
                name="surname"
                value={editData.surname}
                onChange={(e) =>
                  setEditData({ ...editData, surname: e.target.value })
                }
                placeholder="Soyad"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700">
                E-posta
              </label>
              <Input
                type="email"
                name="email"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                placeholder="E-posta"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700">
                Telefon
              </label>
              <Input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={(e) =>
                  setEditData({ ...editData, phone: e.target.value })
                }
                placeholder="Telefon"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700">
                Parola
              </label>
              <Input
                type="text"
                name="password"
                value={editData.password}
                onChange={(e) =>
                  setEditData({ ...editData, password: e.target.value })
                }
                placeholder="Parola"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={toggleDrawer}>
              İptal
            </Button>
            <Button variant="default">Düzenle</Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
