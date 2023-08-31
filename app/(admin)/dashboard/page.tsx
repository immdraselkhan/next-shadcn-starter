import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/utils/theme-toggle";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <ThemeToggle />
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Client
      </Link>
      <p className="text-2xl text-center font-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius culpa
        eaque praesentium nostrum non nobis consectetur nam animi velit quia
        voluptatum maiores provident, consequuntur qui est at! Corrupti, nulla
        temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus veniam assumenda blanditiis iusto? Praesentium laudantium
        incidunt nesciunt debitis, fugiat sit error tempore maxime consequuntur
        non neque beatae, quod eius eaque.
      </p>
      <h1 className="text-[150px] font-black">Admin Area</h1>
    </>
  );
}
