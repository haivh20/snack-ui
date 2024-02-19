"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/store/useCart";
import { ShoppingBag, HeartIcon, User } from "lucide-react";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import UserProfile from "./user-profile";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart();
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/favorites")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <HeartIcon size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>

      <UserProfile />
    </div>
  );
};

export default NavbarActions;
