import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="main--dev">
      <NavBar />
      <div>
        <h1>This is First Next JS Project on Vercel</h1>
      </div>
    </div>
  );
}
