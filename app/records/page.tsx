"use client";

import Footer from "@/components/Footer";
import UserRecords from "@/components/UserRecords";
import { UserRecord } from "@/types";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Records() {
  const { address } = useAccount();
  const router = useRouter();

  function fetchUserRecords(): UserRecord | null {
    return {
      subname: "greg",
      avatar:
        "https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_png,w_168/https%3A%2F%2Fi.seadn.io%2Fgae%2FYsASemS2qwPJK2yI9fmN8HX1-DeIDy9EQxX4KsRk9rkniwn9A7xUyMu_vKR75Oxrs8QAKfIjqdmf6Aw9A9fsehJHWSz2LiNpnV_TPQ%3Fw%3D500%26auto%3Dformat",
      description: "I like hot-beverages and building apps on web3 protocols.",
      address: "0xb4f195e9a982c2ba58988cb2132557378e9e6b08",
      location: "NYC",
      twitter: "https://twitter.com/gregskril",
      website: "https://gregskril.com/",
    };

    return null;
  }

  const records = fetchUserRecords();

  return (
    <>
      <main className="mx-auto flex h-full min-h-screen w-full max-w-5xl flex-col gap-2 px-2 pt-24">
        <h2 className="font-zen text-2xl font-medium">Records</h2>
        <p className="font-medium text-secondary-dark">
          View and update new records
        </p>

        {address ? (
          records ? (
            <UserRecords records={records} />
          ) : (
            <div className="flex h-96 flex-col items-center justify-center gap-4">
              <p className="font-medium text-secondary-dark">
                No name detected
              </p>
              <button
                type="button"
                className="w-64 rounded-lg bg-primary-blue  p-4 font-semibold"
                onClick={() => router.push("/")}
              >
                Mint Name
              </button>
            </div>
          )
        ) : (
          <div className="flex h-96 flex-col items-center justify-center gap-4">
            <p className="font-medium text-secondary-dark">
              Connect wallet to view records
            </p>
            <ConnectButton />
          </div>
        )}
      </main>
    </>
  );
}
