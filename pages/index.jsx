import Head from "next/head";
import Image from "next/image";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
// import { BsFillMoonStarsFill } from "react-icons/bs";

import img from "../public/game.jpeg";
import { Navbar, Landing } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stu1612 | React Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-zinc-800 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar />
          <Landing />
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-yellow-600 ">Abit about me</h3>
            <p className="text-md py-2 leading-8  dark:text-gray-200">
              After trying and learning backend and frontend technologies such
              as python and vanilla js, I came across{" "}
              <span className="text-teal-500">React </span> which i love!
            </p>
            <p className="text-md py-2 leading-8  text-gray-200">
              Since doing a <span className="text-teal-500">React Native</span>{" "}
              app for a start up business and getting my hands dirty it has
              guided me to learn more about react hooks, global state managment,
              safe typing and good software architecture.
            </p>
            <p className="text-md py-2 leading-8  text-gray-200">
              After recently completing an Intensive React Front End course with
              Novare Potential focusing on{" "}
              <span className="text-teal-500">
                React Hooks, Sass, Typescript, Firebase, Figma
              </span>{" "}
              , it has provided me with a better understanding in developing
              applications. I am now building apps with{" "}
              <span className="text-teal-500">Next JS</span> whilst building in{" "}
              <span className="text-teal-500">CMS platforms like Hygraps</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white flex-1">
              <Image src={img} alt="test" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={img} alt="test" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={img} alt="test" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8  text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8  text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img}
                alt="test"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img}
                alt="test"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img}
                alt="test"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img}
                alt="test"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img}
                alt="test"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img}
                alt="test"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}