"use client"

import Image from "next/image";
import Link from "next/link";


export default function HeroMachines() {
    return (


        <section className="heroMach">
            <div className="herMach__topbar">
                <div className="heroMach__topInner">
                    <div className="heroMach__logos">
                        <span className="heroMach__logo"></span>
                        <span className="heroMach__logo"></span>
                        <span className="heroMach__logo"></span>
                        <span className="heroMach__logo"></span>
                        <span className="heroMach__logo"></span>
                        <span className="heroMach__logo"></span>
                    </div>
                </div>
            </div>


            <div className="heroMach__stage">
                <div className="heroMach__stageInner">
                    <div className="heroMach__copy">
                        <h2 className="heroMach__headline">
                            O que é Terraplanagem? <br />
                            <br />
                            
                        </h2>

                        <p className="hermoMach__text">
                            Terraplanagem é um termo menos usual para se referir à terraplenagem, que significa ato ou efeito de nivelamento e pavimentação, encher de terra os vãos de um terreno para ele ficar plano. Consiste em uma técnica usada no âmbito da construção.

                        </p>

                        <div className="heroMach__actions">
                            <Link href="/contato" className="heroMach__btn">
                                Saiba mais 
                            </Link>
                        </div>
                    </div>

                    <div className="heroMach__visual">
                        <div className="heroMach__imgWrap">
                            <Image
                                src="/imgs/trator-2.webp"  // troque para a sua imagem
                                alt="Escavadeira"
                                fill
                                priority
                                className="heroMach__img"
                                sizes="(max-width: 900px) 92vw, 620px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
