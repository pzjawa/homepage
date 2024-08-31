import Image from "next/image";
import Avatar from "./avatar.webp";
import { Button } from "./components/Button";
import Mark from "./components/Mark";
import TypedText from "./components/TypedText";
import github from "@iconify-icons/tabler/brand-github-filled";
import mail from "@iconify-icons/tabler/mail-filled";
import blog from "@iconify-icons/fa6-solid/blog";
import bilibili from "@iconify-icons/tabler/brand-bilibili";

function Social() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center space-x-5 md:space-x-8">
      <Button
        title="blog"
        label="blog"
        href="https://blog.pzjawa.us.kg/"
        icon={blog}
      ></Button>
      <Button
        title="github"
        label="github"
        href="https://github.com/pzjawa"
        icon={github}
      ></Button>
      <Button
        title="mail"
        label="mail"
        href="mailto:pzjawa@qq.com"
        icon={mail}
      ></Button>
      <Button
        title="bilibili"
        label="bilibili"
        href="https://space.bilibili.com/1919386217"
        icon={bilibili}
      ></Button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-[50px] bg-white dark:bg-slate-800">
      <div className="flex flex-col space-x-5 md:flex-row">
        <div className="relative mx-auto">
          <Image className="size-36 rounded-full" src={Avatar} alt="avatar" />
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
