"use client";

import Image from "next/image";

async function fetchCustomers(){
  const res = await fetch("http:localhost:3000/api/login",{
    cache: "no-store",
  });
  const data = await res.json();
  return data.customers;
}

export default function Home() {
  return (
    <div className="w-screen">
      <div className="bg-black text-white p-2 flex items-center justify-center">
        訪問介護時間管理
      </div>
    </div>
  );
}
