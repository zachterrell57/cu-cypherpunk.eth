import Image from "next/image";

const ArbitrumBadge = () => {
  return (
    <div className="rounded-full justify-center items-center bg-white w-auto flex gap-2 px-2">
      <Image
        src="/arbitrum-logo.svg"
        alt="Arbitrum Logo"
        height={24}
        width={21}
      />
      <span className="font-bold text-sm">Minted on Arbitrum</span>
    </div>
  );
};

export default ArbitrumBadge;
