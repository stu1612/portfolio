// npm
import Image from "next/image";

// files
import stu1612 from "../public/stu_img.jpg";

export default function Landing() {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="font-sans text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-200 font-thin  md:text-8xl">
        Stu Bolderson
      </h2>
      <h3 className="font-sans text-2xl py-2 text-yellow-600 md:text-3xl">
        React Frontend Developer
      </h3>
      <p className="font-sans text-md py-5 leading-8  text-zinc-100 max-w-xl mx-auto md:text-xl">
        Currently freelancing building React / Next js applications as well as
        developing figma designs.
      </p>

      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={stu1612} alt="test" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
