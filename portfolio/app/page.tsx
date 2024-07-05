"use client";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiX, SiLinkedin, SiInstagram } from "react-icons/si";
import { FlipWords } from "@/components/ui/flip-words";
import PersonalLogo from "@/images/ALogo.png"
import Image from 'next/image';
import ShiftingCountdown from "@/components/ui/countdown";


export default function Home()  {

  return (
    <main>
    <ShiftingCountdown/>

    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
    </main>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};
const words = ["Full-stack Developer", "Hackathoner", "CS Student"];

const HeaderBlock = () => (
  
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://media.licdn.com/dms/image/D5603AQFxK93ddOGIHw/profile-displayphoto-shrink_800_800/0/1698589668950?e=1725494400&v=beta&t=6fHJcEkbeBOiEetwqxtxjxBv70ibeRED_hw2Uuvf1w8"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-2xl md:text-4xl font-medium leading-tight">
      Hi, I am Aaron.
      <span className="text-zinc-400">
        I am a <FlipWords words={words} className="text-yellow-500 text-2xl md:text-4xl"/> <br />

      </span>
    </h1>
    <a
      href="/projects"
      className="flex items-center gap-1 text-yellow-500 hover:underline"
    >
      View My Projects <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-600 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/aaronliew7/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-neutral-600 md:col-span-3"
    >
      <a
        href="https://github.com/AaronLiew77"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-indigo-500 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/44.ron/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-neutral-900 md:col-span-3"
    >
      <a
        href="https://x.com/4aronliew"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building impactful stuff.{" "}
      <span className="text-zinc-400">
        I love building applications with React, but I have experience in other programming languages too!
      </span>
      <a
      href="/skills"
      className="flex items-center gap-1 text-yellow-500 hover:underline text-sm mt-2"
    >
      View My Skills <FiArrowRight />
    </a>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Ampang, Selangor</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Drop your email here!</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Submit
      </button>
    </form>
  </Block>
);

const Logo = () => {
  return (
    <div className="mx-auto mb-12">
      <Image
        src={PersonalLogo}
        alt="Personal Logo"
        width={150}  // Adjust this value to match your desired width
        height={150} // Adjust this value to maintain the aspect ratio
        className="mx-auto"
      />
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Developed with NextJS 14.
        
      </p>
    </footer>
  );
};