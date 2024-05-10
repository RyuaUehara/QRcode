"use client";

import CameraJsQR2 from "@/app/componets/CameraJsQR2";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white h-screen flex justify-center items-center">
      <div className="w-screen">
        <div className="bg-black text-white p-2 flex items-center justify-center">
          訪問介護時間管理
        </div>
        <div className="flex h-screen items-center justify-center">
          <CameraJsQR2 />
        </div>
      </div>
    </section>
  );
}
