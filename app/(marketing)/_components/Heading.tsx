"use client";

import React from "react";
import { Spinner } from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="flex flex-col gap-4 sm:gap-8 items-center max-w-[1024px] mx-auto">
      <h1 className="text-3xl text-center font-bold sm:text-5xl md:text-6xl">
        Your ideas, documents & plans unified. Welcome to{" "}
        <span className="underline">Jasper</span>.
      </h1>
      <p className="text-center sm:text-xl">
        Jasper is the connected workspace where better, faster work happens.
      </p>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <div>
          {!isAuthenticated && !isLoading ? (
            <SignInButton mode="modal">
              <Button>
                Get Jasper free
                <ArrowRight className="ml-1" />
              </Button>
            </SignInButton>
          ) : (
            <Button>
              <Link href="/documents">Enter Jasper</Link>
              <ArrowRight className="ml-1" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Heading;
