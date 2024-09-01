import Image from "next/image";
import Avatar from "./avatar.webp";
import { Button } from "./components/Button";
import Mark from "./components/Mark";
import TypedText from "./components/TypedText";
import Github from "@iconify-icons/tabler/brand-github-filled";
import Mail from "@iconify-icons/tabler/mail-filled";
import Blog from "@iconify-icons/fa6-solid/blog";
import Bilibili from "@iconify-icons/tabler/brand-bilibili";

function Social() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center space-x-5 md:space-x-8">
      <Button
        title="Blog"
        label="Blog"
        href="https://blog.pzjawa.us.kg/"
        icon={Blog}
      ></Button>
      <Button
        title="Github"
        label="Github"
        href="https://github.com/pzjawa"
        icon={Github}
      ></Button>
      <Button
        title="Mail"
        label="Mail"
        href="mailto:pzjawa@qq.com"
        icon={Mail}
      ></Button>
      <Button
        title="Bilibili"
        label="Bilibili"
        href="https://space.bilibili.com/1919386217"
        icon={Bilibili}
      ></Button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-[50px] bg-blue-100 bg-background_mobile bg-auto bg-right-bottom bg-no-repeat md:bg-background dark:bg-slate-800">
      <div className="flex flex-col space-x-5 md:flex-row">
        <div className="relative mx-auto">
          <Image
            className="size-36 rounded-full outline outline-4 -outline-offset-1 outline-[#2a4050]"
            src={Avatar}
            alt="avatar"
          />
          <div className="ring-5 absolute bottom-0 right-0 mb-1 mr-1 h-8 w-8 rounded-full border-4 bg-dot_yellow ring-inset ring-white"></div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-5xl/snug dark:text-white">
            Hi,
            <br />
            I&apos;m <Mark>pzjawa</Mark>
            <TypedText text="学生，ACGN爱好者" />
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}
