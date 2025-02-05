import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Loginpanel() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 p-4">
      <Card className="w-full max-w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Hoş Geldiniz</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <Input id="username" type="text" placeholder="Kullanıcı Adı" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Parola</Label>
                <Input id="password" type="password" placeholder="Parola" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>GİRİŞ</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
