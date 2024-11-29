import Image from "next/image";

export default function Card() {
  const habilities = [
    {
      title: "Linguagens de Programação",
      description: "Node.js, React, NextJS",
      image: "/img1.png",
    },
    {
      title: "Bancos de dados",
      description: "mySQL e NoSQL",
      image: "/img2.png",
    },
  ];

  return (
    <div>
      <p className={"text-2xl font-bold text-secondaryColor my-6"} >Minhas habilidades</p>

      <div className="flex flex-col gap-5 lg:flex-row">
      {habilities.map((hability, index) => (
        <div key={index} className="w-full">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              alt="tech1"
              src={hability.image}
              fill
              style={{ objectFit: "cover" }}
            />
            </div>

            <div className="bg-gray-900 flex flex-col gap-4 py-4 px-8">
                <p>{hability.title}</p>
                <p>{hability.description}</p>
            </div>

        </div>
      ))}
      </div>
      
    </div>
  );
}
