import NextImage from "@/public/next.svg"
export default function NavBar() {
    return (
        <header>
            <nav className="nav">
                <img className="nav--img" src={NextImage} />
            </nav>
        </header>
    );
}
