// npm
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="p-10 mb-12 flex justify-between items-center ">
      <ul className="text-4xl flex justify-center gap-16 py-3  text-zinc-500">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillYoutube />
      </ul>
      <ul>
        <li>
          <a
            className="bg-gradient-to-r bg-yellow-600 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
