import Button from "@/app/components/Button";
import Github from "@iconify-icons/tabler/brand-github-filled";
import Mail from "@iconify-icons/tabler/mail-filled";
import Blog from "@iconify-icons/fa6-solid/blog";
import Bilibili from "@iconify-icons/tabler/brand-bilibili";

export default function Social() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center space-x-5 md:space-x-8">
      <Button
        title="Blog"
        label="Blog"
        href="https://blog.pzj.us.kg/"
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
