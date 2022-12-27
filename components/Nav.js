import { BsFillMoonStarsFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">HOMIE43</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl mr-8" />
        </li>
        <li className="transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-xl">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded"
            href="https://resume.io/r/ohEhsmZPK"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
