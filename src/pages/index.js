import AnimatedText from "@/Components/AnimatedText";
import { LinkArrow } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profilepic from "../../public/images/profile/Bg-removed SideImage-Main (1).png";
import { RiContactsBookFill } from "react-icons/ri";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transitions from "@/Components/Transitions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahul | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.jpg" />
      </Head>
      <Transitions />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-2 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={Profilepic}
                alt={"DEVELOPER IMAGE"}
                className="w-full h-auto lg:w-full md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Transforming Ideas into Innovative Web Applications with Code and Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a proficient Frontend developer, I bring visions to life through exceptional web applications. Explore my portfolio to see my latest projects, highlighting my expertise in React.js and comprehensive web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <a
                  href="/Vara Rahul Rajana_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  RESUME <LinkArrow />
                </a>
                <Link
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rajanarahul93@gmail.com"
                  target="_blank"
                  className="ml-4 flex items-center bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  CONTACT<RiContactsBookFill className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute w-24 right-8 bottom-8 inline-block">
          <Image src={LightBulb} alt="Bulb" className="w-full h-auto md:hidden" />
        </div>
      </main>
    </>
  );
}
