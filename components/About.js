import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Обо мне:</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Привет! В разработку я пришел из банковской сферы.
        </p>
      </div>

      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image
            className="m-auto"
            src={design}
            width={100}
            height={100}
            alt="Design"
          />
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            Современные Frontend решения
          </h3>
          <p className="py-2">Делаю крутой UI исходя из ваших потребностей</p>
          <h4 className="py-4 text-teal-600">Использую:</h4>
          <ul className="no-underline">
            <li className="text-gray-800 py-1">Photoshop</li>
            <li className="text-gray-800 py-1">Illustrator</li>
            <li className="text-gray-800 py-1">Figma</li>
          </ul>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image
            className="m-auto"
            src={code}
            width={100}
            height={100}
            alt="Code"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Чистый код</h3>
          <p className="py-2">Мой код прост и выразителен как проза 😂</p>
          <h4 className="py-4 text-teal-600">Принципы:</h4>
          <ul className="no-underline">
            <li className="text-gray-800 py-1">DRY</li>
            <li className="text-gray-800 py-1">YAGNI</li>
            <li className="text-gray-800 py-1">KISS</li>
          </ul>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image
            className="m-auto"
            src={consulting}
            width={100}
            height={100}
            alt="Consulting"
          />
          <h3 className="text-lg font-medium pt-8 pb-2  ">Простота во всем</h3>
          <p className="py-2">
            Если есть вопросы, то смело задвай, хоть один и тот же по 100 раз.
            Буду рад с тобой его обсудить.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
