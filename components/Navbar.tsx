"use client";
import React from "react";
import { Play, Zap } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Clerk = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return (
      <SignedIn>
        <UserButton />
      </SignedIn>
    );
  }
  return (
    <SignedOut>
      <SignInButton />
    </SignedOut>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 backdrop-blur-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-[900] text-orange font-sans">AIVENTURE</div>

        {/* Right side content */}
        <div className="flex items-center space-x-6">
          <Clerk />
          {/* Actions remaining */}
          <div className="flex items-center text-white">
            <Zap className="w-5 h-5 mr-1 text-accent" />
            <span className="font-medium">5</span>
          </div>

          {/* Play button */}
          <Button className="bg-orange text-dark font-heading font-bold">
            <Play className="w-4 h-4 mr-1" />
            Start
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
