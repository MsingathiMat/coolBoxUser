"use client"
import LoginForm from "@/app/AppDomain/Components/Forms/LoginForm";
import PageView from "@/app/FrameWork/Components/WebContainers/PageView";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { useAtom } from 'jotai'
import { userAtom } from "@/app/AppDomain/Store/JotaiAtoms/UserAtom";
function Page() {




  return (
    <PageView className=" bg-AppBg">
      <section className=" CENTER flex-col gap-11">

       
        <Image alt="" src="/assets/logoPrimary.svg" width={55} height={55} />
        <LoginForm />

        <div className=" CENTER flex-row gap-2">
          <FaRegUser className=" text-gray-600 text-sm" />
          <span className=" text-[12px]">
            or you can{" "}
            <Link
              href="/register"
              className=" text-AppPrimary underline hover:text-ApppTertiary hover:cursor-pointer"
            >
              REGISTER
            </Link>
          </span>
        </div>
      </section>
    </PageView>
  );
}

export default Page;
