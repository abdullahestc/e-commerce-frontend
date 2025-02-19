"use client";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import { Edit2, Eye } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  userrole: string;
}

export default function Usermainpage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [editData, setEditData] = useState({
    name: "Ahmet",
    surname: "Yılmaz",
    email: "ahmet@example.com",
    phone: "+90 555 123 4567",
    password: "••••••••",
    userrole: "admin",
  });

  const users: User[] = [
    {
      id: 1,
      name: "Ahmet",
      surname: "Yılmaz",
      email: "ahmet@example.com",
      phone: "+90 555 123 4567",
      password: "••••••••",
      userrole: "admin",
    },
    {
      id: 2,
      name: "Mehmet",
      surname: "Kaya",
      email: "mehmet@example.com",
      phone: "+90 555 234 5678",
      password: "••••••••",
      userrole: "user",
    },
    {
      id: 3,
      name: "Ayşe",
      surname: "Demir",
      email: "ayse@example.com",
      phone: "+90 555 345 6789",
      password: "••••••••",
      userrole: "super admin",
    },
    {
      id: 4,
      name: "Fatma",
      surname: "Şahin",
      email: "fatma@example.com",
      phone: "+90 555 456 7890",
      password: "••••••••",
      userrole: "user",
    },
  ];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const openDrawer = (user: User, title: string) => {
    setEditData(user);
    setDrawerTitle(title);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Kullanıcılar</h1>
      <Card className="p-6 bg-white shadow-md rounded-lg w-full max-w-screen-lg mx-auto  mt-8">
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <Input placeholder="Adı Soyadı" className="w-full sm:w-52" />
              <Select>
                <SelectTrigger className="w-full sm:w-44">
                  <SelectValue placeholder="Rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Seçenek 1</SelectItem>
                  <SelectItem value="active">Seçenek 2</SelectItem>
                  <SelectItem value="passive">Seçenek 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <Button variant="outline" className="w-full sm:w-auto">
                Temizle
              </Button>
            </div>
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <Button variant="default" className="w-full sm:w-auto">
                Ara
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="w-full max-w-screen-lg mx-auto bg-white rounded-lg shadow-md mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ad</TableHead>
              <TableHead>Soyad</TableHead>
              <TableHead>Mail</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead className="text-right">İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.userrole}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => openDrawer(user, "Kullanıcı Düzenle")}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => openDrawer(user, "Kullanıcı Detay")}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="p-6">
          <DrawerHeader>
            <DrawerTitle className="text-center">{drawerTitle}</DrawerTitle>
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
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700">Rol</label>
              <Input
                type="text"
                name="userrole"
                value={editData.userrole}
                onChange={(e) =>
                  setEditData({ ...editData, userrole: e.target.value })
                }
                placeholder="Rol"
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
