"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";
import React from "react";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Loader";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScroll();
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div
      className={`p-6 ${
        scrolled && "border-b shadow-lg"
      } sticky top-0 bg-white dark:bg-[#1f1f1f] z-99 flex justify-between items-center`}
    >
      <div className="md:flex items-center hidden">
        <div className="relative w-12 h-12 dark:hidden">
          <Image src="/logo.svg" fill alt="logo" />
        </div>
        <div className="relative w-12 h-12 hidden dark:block">
          <Image src="/logo-dark.svg" fill alt="logo" />
        </div>
        <span className="text-xl font-bold">Jasper</span>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto gap-6">
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            {" "}
            {!isAuthenticated && !isLoading && (
              <div>
                <SignInButton mode="modal">
                  <Button>Log In</Button>
                </SignInButton>
              </div>
            )}{" "}
            {isAuthenticated && !isLoading && (
              <div className="flex items-center gap-2">
                <Button>
                  <Link href="/documents">Enter Jasper</Link>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
