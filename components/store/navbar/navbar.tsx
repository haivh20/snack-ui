"use client";

import React from "react";
import MainNav from "./main-nav";
import { Button } from "@/components/ui/button";
import useLoginModal from "@/hooks/store/useLoginModal";
import useRegisterModal from "@/hooks/store/useRegisterModal";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const currentUser = {};
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  return (
    <div>
      <div className="border-b">
        <div className="flex h-16 items-center justify-center px-4">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Image src="/images/logo.jpg" alt="logo" width={70} height={70} />
          </div>

          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex gap-3 cursor-pointer">
              {currentUser ? (
                <>
                  <NavbarActions />
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={loginModal.onOpen}>
                    Login
                  </Button>
                  <Button onClick={registerModal.onOpen}>Sign up</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
