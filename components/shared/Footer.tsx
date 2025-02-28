import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <footer className="px-5 py-3 shadow-sm font-mono tracking-tight font-medium border-t">
      <nav className="flex justify-between items-center">
        <Link href="/" className="p-[2px] bg-fuchsia-400 rounded-[2px]">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="invert h-10 w-10"
            priority
          />
        </Link>

        <div className="flex items-center gap-5">
          <ThemeToggle />
        </div>
      </nav>
    </footer>
  )
}

export default Footer
