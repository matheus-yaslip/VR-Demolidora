"use cliente";

import Image from "next/image";
import Link from "next/link";


type EcoPost ={
    id: number;
    day: string;
    month:string;
    title: string;
    text:string;
    image:string
    
}

const POSTS: EcoPost[ ] =[
{
    id: 1,
    day: "29",
    month: "Nov",
    title: "Demolição com responsabilidade ambiental",
    text:
      "Executamos demolições controladas, reduzindo poeira, ruídos e destinando corretamente os resíduos, preservando o meio ambiente.",
    image: "/imgs/eco.webp",
  },
  {
    id: 2,
    day: "12",
    month: "Dez",
    title: "Terraplanagem focada na preservação do solo",
    text:
      "Nossos processos evitam erosão, protegem áreas verdes e garantem o manejo correto do solo durante toda a obra.",
    image: "/imgs/card1.jpg",
  },
  {
    id: 3,
    day: "03",
    month: "Jan",
    title: "Obras que respeitam o futuro",
    text:
      "Aliamos tecnologia e consciência ambiental para minimizar impactos e contribuir com um desenvolvimento sustentável.",
    image: "/imgs/card2.jpg",
  },
];

export default function Four(){
    return(
<section className="ecoSection">
    <div className="ecoContainer">
        <div className="ecoHeader">
            <div className="ecoHeaderText">
                <span className="ecoKicker">Sustentabilidade </span>
                <h2 className="ecoTitle"> Nosso cuidado com o  meio ambiente</h2>
            </div>

            <Link href="#" className="ecoButton">
            Ver mais
            </Link>
        </div>

        <div className="ecoGrid">
            {POSTS.map((post) => (
                <article key={post.id} className="ecoCard">
                    <div className="ecoImageWrap">
                        <div className="ecoDate">
                            <strong>{post.day}</strong>
                            <span>{post.month}</span>
                        </div>

                        <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="ecoImage"
                  sizes="(max-width: 900px) 90vw, 380px"
                />

                </div>

                <div className="ecoContent">
                    <h3>{post.title}</h3>
                    <p>{post.text}</p>

                  <Link href="#" className="ecoReadMore">
                  Saiba mais 
                  </Link>
                </div>
                </article>
            ))};
        </div>
    </div>
</section>
    );
}