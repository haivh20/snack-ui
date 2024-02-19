"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { User, History, Heart, LogOut } from "lucide-react";

import { useRouter } from "next/navigation";

const UserProfile = () => {
  const router = useRouter();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel onClick={() => router.push("/cart")}>
            haiz2k22
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/cart")}>
            <User className="mr-2 h-4 w-4" />
            <span> Thông tin cá nhân</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/cart")}>
            <History className="mr-2 h-4 w-4" />
            <span> Lịch Sử Đơn Hàng</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/cart")}>
            <Heart className="mr-2 h-4 w-4" />
            <span> Yêu Thích</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/cart")}>
            <LogOut className="mr-2 h-4 w-4" />
            <span> Đăng Xuất</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserProfile;
