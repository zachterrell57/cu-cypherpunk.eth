import Hero from "@/components/Hero";
import SubnameList from "@/components/SubnameList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center gap-28 bg-[#FAFAFA] pt-4">
        <Hero />

        <section className="flex w-full flex-col items-center gap-6 px-2 text-center">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-zen text-2xl font-medium">
              Explore web3 with a name
            </h2>
            <p className="font-medium text-secondary-dark">
              cu-cypherpunk.eth is an initiative to empower future leaders with
              web3 education and citizenship.
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-8 px-8">
            <div className="border-light flex w-full flex-col items-center justify-center gap-2 rounded-lg border bg-white p-4 tablet:w-64">
              <Image src="/avatar.svg" alt="Icon 1" height={60} width={60} />
              <div className="flex flex-col">
                <span>jack.</span>
                <span className="text-primary-gray-light">
                  .cu-cypherpunk.eth
                </span>
              </div>
            </div>
            <div className="border-light flex w-full flex-col items-center justify-center gap-2 rounded-lg border bg-white p-4 tablet:w-64">
              <Image src="/avatar.svg" alt="Icon 1" height={60} width={60} />
              <div className="flex flex-col">
                <span>nancy.</span>
                <span className="text-primary-gray-light">
                  .cu-cypherpunk.eth
                </span>
              </div>
            </div>
            <div className="border-light flex w-full flex-col items-center justify-center gap-2 rounded-lg border bg-white p-4 tablet:w-64">
              <Image src="/avatar.svg" alt="Icon 1" height={60} width={60} />
              <div className="flex flex-col">
                <span>gloria.</span>
                <span className="text-primary-gray-light">
                  .cu-cypherpunk.eth
                </span>
              </div>
            </div>
          </div>
        </section>

        <SubnameList />
      </main>
    </>
  );
}
