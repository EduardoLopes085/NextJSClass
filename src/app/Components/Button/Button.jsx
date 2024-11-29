import Link from "next/link";

export default function Button({textButton}){
    return <Link href={""} 
    target="_blank" 
    className="w-fit bg-secondaryColor text-black px-6 py-3 rounded-full hover:bg-secondaryColorLight">
        {textButton}
    </Link>
}