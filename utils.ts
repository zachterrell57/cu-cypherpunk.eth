import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenAddress(address: string, length: number = 6): string {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    throw new Error("Invalid Ethereum address");
  }

  const safeLength = Math.max(4, Math.min(length, address.length - 2));
  const start = address.slice(0, safeLength + 2);
  const end = address.slice(-safeLength);

  return `${start}...${end}`;
}
