"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import React, { Suspense, ReactNode } from "react";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { optimism } from "wagmi/chains";

const queryClient = new QueryClient();

export const config = getDefaultConfig({
  appName: "cu-cypherpunk.eth",
  projectId: process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID!,
  chains: [optimism],
  ssr: true,
});

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<></>}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={lightTheme({
              accentColor: "#9EE8D5",
              accentColorForeground: "#171717",
            })}
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Suspense>
  );
};

export default Providers;
