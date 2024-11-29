import Image from "next/image"
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Links from "./Components/Links/Links";

export default function Home() {
    const myName = "Eduardo Lopes"
  return (
    <div className="bg-primaryColor min-h-screen text-white flex flex-col items-center">
      <main className=" w-[95%] lg:max-w-[880px]">
        <header className="flex flex-row items-center justify-between my-10">
          <h1 className="text-3xl text-secondaryColor font-bold">Meus links</h1>
          <Image
            width={120}
            height={120}
            alt="icon"
            src={"./logo.svg"}
            className="bg-secondaryColor p-3 rounded-full"
          />
        </header>

        <section className="flex flex-col gap-8 ">
          <div className="relative h-[300px]">
            <Image
              alt={"minha foto"}
              src={"/pessoa.jpg"}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>

          <p className={"text-2xl font-bold text-secondaryColor"} >Olá, eu sou {myName}</p>

          <p>
            Um apaixonado desenvolvedor ful stack com uma paixão por criar
            soluções digitais inovadoras. Minha jornada começou na universidade,
            onde me formei em Ciência da Computação, e desde então, tenho
            dedicado minha carreira ao aprimoramento contínuo e à entrega de
            projetos excepcionais
          </p>

          <Button textButton={"Fale Comigo"}/>
        </section>

        <section>
          <Card/>
        </section>

        <section>
          <Links/>
        </section>


        <section>
          <p>aaaaaaa</p>
        </section>

      </main>
    </div>
    

  );
}
