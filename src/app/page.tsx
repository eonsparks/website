import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl lg:text-4xl items-center font-bold">
        my name is melvin.
      </h2>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about"></Link>
          </li>
          <li>
            <Link href="/projects"></Link>
          </li>
        </ul>
      </nav>
      <div className="text-[14px] lg:text-[18px] text-gray-500">
        <h1>
          hi, i&apos;m <span className="font-bold text-black">melvin</span>, a
          software engineer passionate about creating innovative AI solutions.
          i&apos;m inspired by visionaries like jim simons and patrick collins.
        </h1>

        <p>
          i&apos;ve got experience in python, machine learning and i&apos;m
          always pushing myself to learn more. whether it&apos;s building new
          tech or solving complex problems, i&apos;m driven by a desire to make
          things better and smarter.
        </p>

        <p>
          outside of tech, i&apos;m a big anime fan, especially drawn to
          characters with dark, layered personalities. there&apos;s something
          captivating about villains like lelouch lamperouge, eren yeager, light
          yagami, and madara uchiha—they&apos;re not just villains, they&apos;re
          masterminds with complex motivations. i find a lot of inspiration in
          their stories, using that intrigue to fuel my creativity in tech.
        </p>

        <p>
          if you&apos;re into AI, tech, anime, or just want to build something
          cool together, feel free to reach out! let&apos;s chat and see what we
          can create.
        </p>
      </div>

      <div className="flex gap-0.5 items-center max-w-full flex-wrap">
        <Image src="/locked-in.gif" width={88} height={31} alt="" />
        <Image src="/lelouch.gif" width={88} height={31} alt="" />
        <Image src="/sea.gif" width={88} height={31} alt="" />
        <Image src="/retroanime.gif" width={88} height={31} alt="" />
        <Image src="/light.gif" width={88} height={31} alt="" />
        <Image src="/locked-in.gif" width={88} height={31} alt="" />
        <Image src="/retrointernet.gif" width={88} height={31} alt="" />
      </div>

      <div className="min-h-20 flex items-center  text-white z-[1] border-y-black border-y w-full">
        <div className="w-[95%] flex items-center justify-center md:justify-between mx-auto text-xs md:text-sm -tracking-wider text-zinc-900 dark:text-zinc-400">
          <p className="text-black hover:text-orange-500">© 2024 melvin.</p>
          <p className="hidden md:block hover:text-green-500">
            thank you for visiting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
