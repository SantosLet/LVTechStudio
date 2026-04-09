import Link from "next/link";
import { menu } from "./utils/menu";
import Image from "next/image";

type LNavbarProps = {
  onOpen: () => void;
};

export default function LNavbar({ onOpen }: LNavbarProps) {
  return (
    <nav className="lvtech-navbar">
      <div className="container">
        <button onClick={onOpen} className="md:hidden">
          <Image
            src="/icons/menu_icon_black.svg"
            alt="Abrir menu lateral"
            width={0}
            height={0}
            className="h-7 w-auto"
          />
        </button>

        <div className="lvtech-logo">
          <a href="/">
            <Image
              src="/icons/lvtech_logo.svg"
              alt="Logo lvtech"
              width={0}
              height={0}
              className="h-9 4xl:h-10 w-auto"
            />
          </a>
        </div>

        <ul className="navbar-menu hidden md:flex gap-6 text-sm">
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-self-end gap-4">
          <a href="https://www.linkedin.com/in/devleticiagvsantos/" target="_blank">
            <Image
              src="/icons/linkedin_icon_black.svg"
              alt="LinkedIn"
              width={0}
              height={0}
              className="h-5.5 4xl:h-6 w-auto cursor-pointer"
            />
          </a>

          <a href="https://github.com/SantosLet" target="_blank">
            <Image
              src="/icons/github_icon_black.svg"
              alt="Github"
              width={0}
              height={0}
              className="h-5.5 4xl:h-6 w-auto cursor-pointer"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}