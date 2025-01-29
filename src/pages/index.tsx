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

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 p-4">
      <Card className="w-full max-w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Hoş Geldiniz</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/login.svg"
                  alt="login"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="mail">Mail</Label>
                <Input id="mail" placeholder="example@gmail.com" />
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

      <Card className="w-full max-w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Aramıza Katılın</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/register.svg"
                  alt="register"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Adınız</Label>
                <Input id="name" placeholder="Adınız" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="surname">Soyadınız</Label>
                <Input id="surname" placeholder="Soyadınız" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="regmail">Mail</Label>
                <Input id="regmail" placeholder="example@gmail.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="tel">Telefon Numarası</Label>
                <Input id="tel" placeholder="05*********" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="regpassword">Parola</Label>
                <Input id="regpassword" type="password" placeholder="Parola" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="regpasswordconf">Parola Onay</Label>
                <Input
                  id="regpasswordconf"
                  type="password"
                  placeholder="Parola Onay"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>KAYIT OL</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
