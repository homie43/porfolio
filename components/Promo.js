import Nav from "./Nav";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import devImg from "../public/dev-ed-wave.png";
// import avatar from "../public/avatar.png";

const Promo = ({ darkMode, setDarkMode }) => {
  return (
    <section className="min-h-screen">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 nt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={devImg} layout="fill" objectFit="cover" alt="Фото" />
      </div>
      <div className="pt-6 text-center space-y-4">
        <h2 className="text-5xl py-2 text-teal-400 md:text-6xl ">Владимир</h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Forntend Developer
        </h3>
        <p className="py-4 leading-7 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
          nesciunt. Ipsam nisi, aliquid enim reiciendis dolor sequi vitae quidem
          quam maiores fuga minus asperiores sint facere quis?
        </p>
      </div>
      <div className="flex justify-center py-3 text-3xl gap-5 text-gray-700 dark:text-gray-400">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/vladimir-kopylov-03734b258/"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/homie43"
        >
          <AiFillGithub />
        </a>
      </div>
    </section>
  );
};

export default Promo;
