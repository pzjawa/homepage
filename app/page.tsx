import Image from "next/image";
import avatar from "@/app/image/avatar.webp";
import Mark from "@/app/components/Mark";
import Social from "@/app/components/Social";
import Typed from "@/app/components/Typed";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-blue-100 bg-mio bg-70% bg-right-bottom bg-no-repeat md:bg-auto dark:bg-slate-800">
      <div className="flex flex-col space-x-5 md:flex-row">
        <div className="relative mx-auto">
          <Image
            className="size-36 rounded-full outline outline-4 -outline-offset-1 outline-[#2a4050]"
            src={avatar}
            alt="avatar"
          />
          <div className="ring-5 absolute bottom-0 right-0 mb-1 mr-1 h-8 w-8 rounded-full border-4 bg-dot_yellow ring-inset ring-white"></div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-5xl/snug dark:text-white">
            Hi,
            <br />
            I&apos;m <Mark>pzjawa</Mark>
            <Typed text="学生，ACGN爱好者" />
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}
