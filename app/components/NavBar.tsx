import NextImage from "@/public/next.svg"
import Image from "next/image"
export default function NavBar() {
    return (
        <header>
            <nav className="nav">
                <Image
                    src={NextImage}
                    alt="NextJS"
                    className="nav--img"
                />
            </nav>
        </header>
    );
}
