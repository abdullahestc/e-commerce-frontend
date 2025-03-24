"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
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

interface LoginData {
  mail: string;
  password: string;
}

interface RegisterData {
  name: string;
  surname: string;
  mail: string;
  phone: string;
  password: string;
  regpasswordconf: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginData>({
    mail: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    surname: "",
    mail: "",
    phone: "",
    password: "",
    regpasswordconf: "",
  });

  const [loginError, setLoginError] = useState<string>("");
  const [registerError, setRegisterError] = useState<string>("");
  const [registerSuccess, setRegisterSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");
    setRegisterError("");
    setRegisterSuccess("");
    setLoginSuccess("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const responseText = await response.text();

      try {
        const data = JSON.parse(responseText);

        if (!response.ok) {
          throw new Error(data.message || "Giriş başarısız");
        }
        setLoading(true);
        setLoginSuccess(data.message || "Giriş başarılı!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } catch (jsonError) {
        if (response.ok) {
          setLoading(true);
          setLoginSuccess(responseText);

          setTimeout(() => {
            router.push("/");
          }, 1500);
        } else {
          throw new Error(responseText);
        }
      }
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Beklenmeyen hata");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRegisterError("");
    setRegisterSuccess("");
    setLoginError("");

    if (registerData.password !== registerData.regpasswordconf) {
      setRegisterError("Şifreler eşleşmiyor");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: registerData.name,
        surname: registerData.surname,
        mail: registerData.mail,
        phone: registerData.phone.toString(),
        password: registerData.password,
        role: "User",
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseText = await response.text();

      try {
        const responseData = JSON.parse(responseText);

        if (!response.ok) {
          throw new Error(responseData.message || "Kayıt başarısız");
        }

        setRegisterData({
          name: "",
          surname: "",
          mail: "",
          phone: "",
          password: "",
          regpasswordconf: "",
        });
        setRegisterSuccess("Kayıt başarılı! Giriş yönlendiriliyorsunuz...");

        setTimeout(() => {
          router.push("/");
        }, 1500);
      } catch (jsonError) {
        if (response.ok) {
          setRegisterSuccess(responseText);
          setTimeout(() => {
            router.push("/");
          }, 1500);
        } else {
          throw new Error(responseText);
        }
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Bilinmeyen hata";

      if (errorMessage.includes("Phone")) {
        setRegisterError("Geçerli bir telefon numarası giriniz (5XXXXXXXXX)");
      } else if (errorMessage.includes("Mail")) {
      } else {
        setRegisterError(errorMessage.replace(/"/g, ""));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Hoş Geldiniz
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex justify-center">
              <Image
                src="/assets/img/login.svg"
                alt="Giriş"
                width={200}
                height={150}
                className="mb-6"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mail" className="text-gray-700">
                  E-posta
                </Label>
                <Input
                  id="mail"
                  type="email"
                  placeholder="ornek@mail.com"
                  value={loginData.mail}
                  onChange={(e) =>
                    setLoginData({ ...loginData, mail: e.target.value })
                  }
                  required
                  className="focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Parola
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                  className="focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {loginError && (
              <p className="text-red-600 text-sm text-center">{loginError}</p>
            )}
            {loginSuccess && (
              <p className="text-green-600 text-sm text-center">
                {loginSuccess}
              </p>
            )}

            <CardFooter className="pt-6">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                GİRİŞ YAP
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Aramıza Katılın
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="flex justify-center">
              <Image
                src="/assets/img/register.svg"
                alt="Kayıt"
                width={200}
                height={150}
                className="mb-6"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Adınız
                </Label>
                <Input
                  id="name"
                  placeholder="Ad"
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="surname" className="text-gray-700">
                  Soyadınız
                </Label>
                <Input
                  id="surname"
                  placeholder="Soyad"
                  value={registerData.surname}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      surname: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mail" className="text-gray-700">
                  E-posta
                </Label>
                <Input
                  id="mail"
                  type="email"
                  placeholder="ornek@mail.com"
                  value={registerData.mail}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, mail: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="5XX XXX XXXX"
                  value={registerData.phone}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, "");
                    setRegisterData({ ...registerData, phone: numericValue });
                  }}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Parola
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="regpasswordconf" className="text-gray-700">
                  Parola Tekrar
                </Label>
                <Input
                  id="regpasswordconf"
                  type="password"
                  placeholder="••••••••"
                  value={registerData.regpasswordconf}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      regpasswordconf: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {registerError && (
              <p className="text-red-600 text-sm text-center">
                {registerError}
              </p>
            )}
            {registerSuccess && (
              <p className="text-green-600 text-sm text-center">
                {registerSuccess}
              </p>
            )}
            <CardFooter className="pt-6">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                KAYIT OL
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
