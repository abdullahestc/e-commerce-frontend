"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Edit2, Eye, LogOut, Trash2 } from "lucide-react";
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
  mail: string;
  phone: string;
  password: string;
  role: string;
}

export default function Usermainpage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [deletingIds, setDeletingIds] = useState<number[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  const [editData, setEditData] = useState({
    id: 0,
    name: "",
    surname: "",
    mail: "",
    phone: "",
    password: "",
    role: "",
  });
  const openDrawer = (user: User, title: string) => {
    setEditData({
      ...user,
      role: user.role.toLowerCase(),
    });

    setDrawerTitle(title);
    setIsDrawerOpen(true);
  };
  const handleUpdateUser = async () => {
    setIsUpdating(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${editData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editData),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Güncelleme başarısız");
      }

      setUsers(
        users.map((user) =>
          user.id === editData.id ? { ...user, ...editData } : user
        )
      );
      setIsDrawerOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Güncelleme hatası");
    } finally {
      setIsUpdating(false);
    }
  };
  const handleDeleteUser = async (userId: number) => {
    setDeletingIds((prev) => [...prev, userId]);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Silme işlemi başarısız");
      }

      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bilinmeyen silme hatası");
      console.error("Silme hatası:", err);
    } finally {
      setDeletingIds((prev) => prev.filter((id) => id !== userId));
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) router.push("/login");
          throw new Error("Kullanıcılar alınamadı");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

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
              <TableCell className="font-medium">{}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon">
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
      <h1 className="text-2xl font-bold text-center m-5">Kullanıcılar</h1>
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
                  <SelectItem value="user">user</SelectItem>
                  <SelectItem value="admin">admin</SelectItem>
                  <SelectItem value="superadmin">superadmin</SelectItem>
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
              <TableHead>ID</TableHead>
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
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.mail}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
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
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="icon"
                          disabled={deletingIds.includes(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Kullanıcıyı Sil</AlertDialogTitle>
                          <AlertDialogDescription>
                            <span className="font-semibold">
                              {user.name} {user.surname}
                            </span>
                            isimli kullanıcıyı silmek üzeresiniz.
                            <br />
                            <strong>Bu işlem geri alınamaz!</strong>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>İptal</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Sil
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Ad</label>
              <Input
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                disabled={drawerTitle === "Kullanıcı Detay"}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Soyad</label>
              <Input
                value={editData.surname}
                onChange={(e) =>
                  setEditData({ ...editData, surname: e.target.value })
                }
                disabled={drawerTitle === "Kullanıcı Detay"}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                E-posta
              </label>
              <Input
                value={editData.mail}
                onChange={(e) =>
                  setEditData({ ...editData, mail: e.target.value })
                }
                disabled={drawerTitle === "Kullanıcı Detay"}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Telefon
              </label>
              <Input
                value={editData.phone}
                onChange={(e) =>
                  setEditData({ ...editData, phone: e.target.value })
                }
                disabled={drawerTitle === "Kullanıcı Detay"}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Parola
              </label>
              <Input
                type="password"
                value={editData.password}
                onChange={(e) =>
                  setEditData({ ...editData, password: e.target.value })
                }
                disabled={drawerTitle === "Kullanıcı Detay"}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Rol</label>
              {drawerTitle === "Kullanıcı Detay" ? (
                <Input value={editData.role} disabled />
              ) : (
                <Select
                  value={editData.role}
                  onValueChange={(value) =>
                    setEditData({ ...editData, role: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Rol seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="superadmin">super admin</SelectItem>
                    <SelectItem value="user">user</SelectItem>
                    <SelectItem value="admin">admin</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>
          {drawerTitle === "Kullanıcı Düzenle" && (
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={toggleDrawer}>
                İptal
              </Button>
              <Button
                variant="default"
                onClick={handleUpdateUser}
                disabled={isUpdating}
              >
                Kaydet
              </Button>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
