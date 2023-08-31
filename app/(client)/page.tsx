import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/utils/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "default" })}
      >
        Dashboard
      </Link>
      <p className="text-2xl text-center font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
        suscipit aperiam. Sequi odio praesentium autem animi dolores, similique
        tenetur ea laudantium hic ab fugit consequatur voluptatibus
        necessitatibus blanditiis vitae numquam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Fuga, dolorum quas odio rerum molestias
        perferendis ut. Dolor, ea recusandae deserunt nemo autem qui, incidunt,
        quidem laboriosam quasi ipsa consequatur perspiciatis.
      </p>
      <h1 className="text-[150px] font-black">Client Area</h1>
    </>
  );
}
