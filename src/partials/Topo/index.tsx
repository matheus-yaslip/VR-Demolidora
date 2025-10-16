"use client";

import { settings } from "@/settings/settings";
import "@/partials/Topo/topo.scss";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

import { useEffect, useState } from "react";
import { josefinSans } from "@/lib/fonts";
import HamburgerMenu from "@/components/HamburgerMenu";
import { MdMail } from "react-icons/md";

const { phoneNumber, whatsappNumber, ddd, whatsappApi, email } = settings;

export default function Topo() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const scroll = window.scrollY;
    setIsFixed(scroll > 100); // 100 é a altura do topo
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]); // ✅ Agora funciona no App Router

  const toggleMobile = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className={isFixed ? "topo fixed" : "topo"}>
        <div className="topo-contato">
          <div className={`base ${josefinSans.className}`}>
            <Link href={`tel:0${ddd}${phoneNumber}`} target="_blank">
              <BsTelephoneForward /> {`(${ddd}) ${phoneNumber}`}
            </Link>
            {whatsappNumber ? (
              <Link href={whatsappApi} target="_blank">
                <FaWhatsapp /> {`(${ddd}) ${whatsappNumber}`}
              </Link>
            ) : (
              ""
            )}
            <Link href={`mailto:${email}`} target="_blank">
              <MdMail /> {`${email}`}
            </Link>
          </div>
        </div>
        <div className="topo-menu">
          <div className="base">
            <Link href="/">
              <Image alt="Imagem" src="/logo.webp" width={200} height={60} />
            </Link>
            <ul className="topo-links">
              <li className="topo-item">
                <Link href="/">Home</Link>
              </li>
              <li className="topo-item">
                <Link href="/contato">Contato</Link>
              </li>
              <li className="topo-item">
                <Link href="/informacoes">+</Link>
              </li>
            </ul>
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMobile} />
          </div>
        </div>
      </div>
      <div className={`menu-mobile ${isMenuOpen ? "open" : ""}`}>
        <ul className="topo-links-mobile">
          <li className="topo-item">
            <Link href="/">Home</Link>
          </li>
          <li className="topo-item">
            <Link href="/contato">Contato</Link>
          </li>
          <li className="topo-item">
            <Link href="/informacoes">+</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
