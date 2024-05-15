"use client";

import CryptoPrices from "@/components/cryptoPricess";
import { GrMoney } from "react-icons/gr";
const Home = () => {
  return (
    <div className="px-[2.5rem] py-[3.2rem]">
      <div className="flex items-center ">
        <GrMoney size={32} color="#09B77B" />
        <h1 className="text-[2.4rem] pl-[0.3rem]">currencies</h1>
      </div>
      <CryptoPrices />
    </div>
  );
};

export default Home;
