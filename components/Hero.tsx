"use client";

import { useForm } from "react-hook-form";
import ArbitrumBadge from "./ArbitrumBadge";
import { useAccount } from "wagmi";
import { cn } from "@/utils";
import { useState } from "react";
import ErrorBadge from "./ErrorBadge";
import LoadingBadge from "./LoadingBadge";
import SuccessBadge from "./SuccessBadge";
import SuccessModal from "./SuccessModal";

const Hero = () => {
  const [showMintSuccess, setShowMintSuccess] = useState(false);
  const [showAccountError, setShowAccountError] = useState(false);
  const [showNameTakenError, setShowNameTakenError] = useState(false);
  const [showTransactionRejectedError, setShowTransactionRejectedError] =
    useState(false);
  const [showCheckingName, setShowCheckingName] = useState(false);
  const [showWaitingForTransaction, setShowWaitingForTransaction] =
    useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  //  TODO: stronger types
  const onSubmit = () => {
    if (!address) {
      setShowAccountError(true);
      return;
    }

    const name = getValues("name");

    // TEST
    if (name == "minted") {
      setShowMintSuccess(true);
      return;
    }
    if (name == "checking") {
      setShowCheckingName(true);
      return;
    }
    if (name == "waiting") {
      setShowWaitingForTransaction(true);
      return;
    }
    if (name == "taken") {
      setShowNameTakenError(true);
      return;
    }
    if (name == "rejected") {
      setShowTransactionRejectedError(true);
      return;
    }

    setShowSuccessModal(true);
  };

  const { address } = useAccount();

  return (
    <div className="flex h-full min-h-screen w-full max-w-4xl grow flex-col items-center justify-center gap-10 bg-[url('/main-background.svg')] bg-cover bg-center px-2 pt-48">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <ArbitrumBadge />
        <h1 className="w-full font-zen text-2xl font-medium text-primary-dark tablet:text-4xl">
          A name for Rebels
        </h1>
        <p className="text-base font-semibold text-secondary-dark">
          Register a free ENS subname. Tradable on Opensea.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-2"
      >
        <div className="flex flex-col gap-2 tablet:flex-row">
          <div className="group flex w-full rounded-lg border has-[:focus]:border-primary-blue">
            <input
              {...register("name", { required: true, minLength: 4 })}
              type="text"
              placeholder="Choose a name"
              className="w-full rounded-l-lg  border-r pl-4 outline-none"
            />

            <div className="rounded-r-lg bg-white p-4">
              <span className="text-nowrap text-sm font-semibold text-primary-gray-light">
                cu-cypherpunk.eth
              </span>
            </div>
          </div>

          <button
            type="submit"
            className={cn(
              "w-full rounded-lg  p-4 font-semibold tablet:w-64",
              address
                ? "bg-primary-blue hover:bg-primary-blue-light hover:text-primary-dark"
                : "bg-gray-200 text-gray-400",
            )}
          >
            Mint
          </button>
        </div>
        <p className="text-xs font-medium text-primary-gray-light">
          <span>Minimum 4 characters. </span>
          {!address && <span>Connect Wallet to Mint.</span>}
        </p>
      </form>

      <div className="h-16">
        {showMintSuccess && <SuccessBadge text="Mint Successful" />}
        {showAccountError && <ErrorBadge text="Connect wallet to mint" />}
        {showNameTakenError && <ErrorBadge text="Name Taken" />}
        {showTransactionRejectedError && (
          <ErrorBadge text="Transaction Rejected Error" />
        )}
        {showCheckingName && <LoadingBadge text="Checking name" />}
        {showWaitingForTransaction && (
          <LoadingBadge text="Waiting for transaction" />
        )}
      </div>

      {showSuccessModal && (
        <SuccessModal
          name={getValues("name")}
          open={showSuccessModal}
          setOpen={setShowSuccessModal}
        />
      )}
    </div>
  );
};

export default Hero;
