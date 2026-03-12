"use client";

import Image from "next/image";
import Link from "next/link";
import TitlePage from "@/components/TitlePage";

import {

  Wrench,
  HardHat,
  UserCog,
  Package,
  Truck,
  ArrowUpRight,
} from "lucide-react";

export default function FleetTeamSection() {
  const METRICS = [
    { value: "50+", label: "Certified Equipment Operators" },
    { value: "100+", label: "Premium Equipment Available" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "130+", label: "Projects Supported Daily" },
  ];

  const CREW = [
    { uid: "1", photo: "/imgs/sobre1.jpg", fullName: "James Anderson", role: "Fleet Operations Manager" },
    { uid: "2", photo: "/imgs/sobre2.jpg", fullName: "Sophia Martinez", role: "Senior Equipment Engineer" },
    { uid: "3", photo: "/imgs/sobre3.jpg", fullName: "Michael Johnson", role: "Heavy Machinery Specialist" },
  ];

  const SERVICES = [
    {
      id: "1",
      icon: "22",
      title: "Aluguel de equipamentos pesados",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
    },
    {
      id: "2",
      icon: <Wrench size={22} />,
      title: "Equipe de Reparos de Máquinas",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
    },
    {
      id: "3",
      icon: <HardHat size={22} />,
      title: "Treinamento de Segurança no Local",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
    },
    {
      id: "4",
      icon: <UserCog size={22} />,
      title: "Suporte a Operadores Qualificados",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
    },
    {
      id: "5",
      icon: <Package size={22} />,
      title: "Fornecimento de Ferramentas Industriais",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
    },
    {
      id: "6",
      icon: <Truck size={22} />,
      title: "Entrega de Equipamentos",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
    },
  ];

  const title = "Sobre nós terraplanagem ";

  return (
    <>
      <TitlePage title={title} />

      {/* ===== SERVICES SECTION ===== */}
      <section className="rentalServices">
        <div className="container">
          <div className="servicesHeader">
            <div className="left">
              <span className="kicker">
                <span className="dot" />
                Services
              </span>
              <h2 className="title">Nossos serviços de aluguel</h2>
            </div>

            <div className="right">
              <p className="subtitle">
                Oferecemos uma ampla gama de equipamentos pesados ​​e serviços de aluguel para impulsionar suas operações de construção,
                logística e industriais — com segurança e eficiência.
              </p>

              <Link href="#" className="btnServices">
                Veja todos os Serviços
              </Link>
            </div>
          </div>

          <div className="servicesGrid">
            {SERVICES.map((s) => (
              <article key={s.id} className="serviceCard">
                <div className="iconCircle">{s.icon}</div>

                <h3 className="cardTitle">{s.title}</h3>
                <p className="cardDesc">{s.desc}</p>

                <Link href={s.href} className="readMore">
                  Saiba mais<ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUA SEÇÃO EXISTENTE ===== */}
      <section className="fleetSection">
        <div className="statsWrapper">
          <div className="statsBar">
            {METRICS.map((item, index) => (
              <div key={index} className="statItem">
                <h3 className="statValue">{item.value}</h3>
                <p className="statLabel">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="headerRow">
            <div className="left">
              <span className="kicker">Nossos especialista</span>
              <h2 className="title">
                A Equipe Profissional<br /> Atrás da nossa frota.
              </h2>
            </div>

            <div className="right">
              <p>
                Profissionais experientes dedicados a fornecer soluções seguras, eficientes e
                para equipamentos pesados, dentro do prazo.
              </p>

              <Link href="#" className="cta">
                Veja toda a equipe
              </Link>
            </div>
          </div>

          <div className="teamGrid">
            {CREW.map((person) => (
              <div key={person.uid} className="card">
                <div className="imageWrapper">
                  <Image src={person.photo} alt={person.fullName} fill className="image" />
                </div>

                <div className="cardBody">
                  <h3>{person.fullName}</h3>
                  <p>{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




    </>
  );
}