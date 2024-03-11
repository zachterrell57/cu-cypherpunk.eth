"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { cn } from "@/utils";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isCurrentRoute = (route: string) => {
    return pathname === route;
  };

  return (
    <Disclosure
      as="nav"
      className="bg-primary-gray shadow w-full rounded-lg px-2 max-w-5xl">
      {({ open }) => (
        <>
          <div className="w-full px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex justify-between w-full">
                <div className="flex flex-shrink-0 items-center">
                  <img src="/logo.svg" alt="cu-cypherpunk.eth" />
                </div>
                <div className="flex gap-4">
                  <div className="hidden tablet:flex">
                    <button
                      onClick={() => router.push("/")}
                      className={cn(
                        "inline-flex items-center px-1 pt-1 text-base font-medium text-white",
                        isCurrentRoute("/")
                          ? "text-white"
                          : "text-primary-gray-light"
                      )}>
                      Mint
                    </button>
                  </div>
                  <div className="hidden tablet:flex">
                    <button
                      onClick={() => router.push("/records")}
                      className={cn(
                        "inline-flex items-center px-1 pt-1 text-base font-medium text-white",
                        isCurrentRoute("/records")
                          ? "text-white"
                          : "text-primary-gray-light"
                      )}>
                      Records
                    </button>
                  </div>
                  <div className="hidden tablet:flex justify-center items-center">
                    <ConnectButton />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex items-center tablet:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 w-full">
              <Disclosure.Button
                as="a"
                onClick={() => router.push("/")}
                className={cn(
                  "block p-4 text-base hover:bg-primary-gray-light font-medium text-white hover:text-primary-dark",
                  isCurrentRoute("/") ? "text-white" : "text-primary-gray-light"
                )}>
                Mint
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                onClick={() => router.push("/records")}
                className={cn(
                  "block p-4 text-base hover:bg-primary-gray-light font-medium text-white hover:text-primary-dark",
                  isCurrentRoute("/records")
                    ? "text-white"
                    : "text-primary-gray-light"
                )}>
                Records
              </Disclosure.Button>
              <div className="pt-4 flex items-center w-full justify-center border-t border-primary-gray-light">
                <ConnectButton />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
