import Link from "next/link";

export default function Links(){
    const myLinks = [
        {
            href: "http:www.google.com",
            text: "Meu currículo"
        },
        {
            href: "http:www.google.com",
            text: "Meu Linkedin"
        },
        {
            href: "http:www.google.com",
            text: "Meu GitHub"
        },
    ]



    return(
        <div>
            <p>Links complementares</p>

            <div>
                {myLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="flex flex-col gap-3 bg-secondaryColor text-xl text-black py-6 rounded-lg hover:bg-secondaryColorLight">{link.text}</Link>
                ))}
            </div>

        </div>
    );
}