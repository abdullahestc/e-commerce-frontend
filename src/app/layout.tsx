"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GrBasket } from "react-icons/gr";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaAlignJustify,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const options = [
    { value: "option1", label: "seçenek 1" },
    { value: "option2", label: "seçenek 2" },
    { value: "option3", label: "seçenek 3" },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <header className="w-full bg-zinc-200 text-white p-4 shadow-lg sticky top-0 left-0 z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Link href="/">
              <svg
                id="logo-70"
                width="78"
                height="30"
                viewBox="0 0 78 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                  className="ccustom"
                  fill="#394149"
                ></path>{" "}
                <path
                  d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                  className="ccustom"
                  fill="#394149"
                ></path>{" "}
              </svg>
            </Link>
            <div className="h-8 w-[2px] bg-black hidden md:block"></div>{" "}
          </div>
          <div className="flex items-center gap-2 hidden md:flex">
            <Select>
              <SelectTrigger className="bg-white text-black w-[400px]">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent position="popper">
                {options.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Ne aramıştınız?"
              className="bg-white text-black w-[450px]"
            />
            <Button className="bg-white text-black hover:text-white">
              Ara
            </Button>
          </div>
          <div className="flex items-center gap-2 hidden md:flex">
            <Link href="/basketpage">
              <GrBasket className="text-black" size={25} />
            </Link>
            <div className="h-8 w-[2px] bg-black hidden md:block"></div>{" "}
            <Avatar>
              <Link href="/userpage">
                <AvatarImage src="https://github.com/shadcn.png" alt="user" />
              </Link>
            </Avatar>
          </div>
          <button onClick={toggleDrawer} className="md:hidden text-white">
            <FaAlignJustify className="text-black" />
          </button>
        </div>
        <div
          className={`fixed inset-0 z-40 transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-[300px] bg-white p-6 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-black text-xl">Menü</h2>
              <button onClick={toggleDrawer} className="text-black">
                X
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Select>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Seçiniz" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {options.map(({ value, label }) => (
                    <SelectItem value={value}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="Ne aramıştınız?"
                className="bg-white text-black"
              />
              <Button className="bg-white text-black hover:text-white w-full">
                Ara
              </Button>
              <div className="flex items-center gap-4 mt-6">
                <Avatar>
                  <AvatarImage src="assets/img/basket-img.png" alt="basket" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="user" />
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-zinc-200 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <Link href="/">
                <svg
                  id="logo-70"
                  width="78"
                  height="30"
                  viewBox="0 0 78 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                    className="ccustom"
                    fill="#394149"
                  ></path>
                  <path
                    d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                    className="ccustom"
                    fill="#394149"
                  ></path>
                </svg>
              </Link>
              <p className="text-sm text-gray-500">
                İnovatif ürünler ve mükemmel hizmetler ile müşterilerimize
                kaliteli bir alışveriş deneyimi sunuyoruz.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Site İçi Gezinti
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    İletişim
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    Gizlilik Politikası
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Sosyal Medya
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="text-gray-700 hover:text-blue-500 flex items-center gap-2"
                >
                  <FaFacebook className="text-xl" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-700 hover:text-blue-500 flex items-center gap-2"
                >
                  <FaInstagram className="text-xl" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="text-gray-700 hover:text-blue-500 flex items-center gap-2"
                >
                  <FaTwitter className="text-xl" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-gray-700 hover:text-blue-500 flex items-center gap-2"
                >
                  <FaLinkedinIn className="text-xl" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-4 text-black">
                İletişim
              </h3>
              <p className="text-sm text-gray-500">E-posta: info@example.com</p>
              <p className="text-sm text-gray-500">
                Telefon: +90 555 555 55 55
              </p>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>&copy; 2025. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
