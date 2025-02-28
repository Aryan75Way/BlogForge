import Link from "next/link";
import Image from "next/image";
import { CirclePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = async () => {
  return (
    <header className="px-5 py-3 shadow-sm font-mono tracking-tight font-medium">
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
          <SignedIn>
            <>
              <Button className="text-md" asChild>
                <Link href="/blog/create">
                  <span className="max-sm:hidden">Create</span>
                  <CirclePlus className="size-6 sm:hidden" />
                </Link>
              </Button>

              <SignedIn>
                <Button variant={"secondary"} className="text-md" asChild>
                  <SignOutButton>
                    <div>
                      <p className="max-sm:hidden">Sign out</p>
                      <LogOut className="size-6 sm:hidden text-red-500" />
                    </div>
                  </SignOutButton>
                </Button>
              </SignedIn>

              <UserButton />
            </>
          </SignedIn>
          <SignedOut>
            <Button asChild>
              <SignInButton />
            </Button>
            <Button asChild variant={"secondary"}>
              <SignUpButton />
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
