import Hero from "@/components/Hero";
import SubnameList from "@/components/SubnameList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center gap-32 pt-4 bg-[url('/main-background.svg')] bg-no-repeat bg-cover bg-center">
        <Hero />

        <section className="flex flex-col w-full px-2 items-center text-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-zen font-medium">
              Explore web3 with a name
            </h2>
            <p className="font-medium text-secondary-dark">
              cu-cypherpunk.eth is an initiative to empower future leaders with
              web3 education and citizenship.
            </p>
          </div>

          <div className="flex flex-wrap w-full items-center justify-center px-8 gap-8">
            <div className="flex w-full flex-col p-4 justify-center items-center gap-2 bg-white rounded-lg border border-light tablet:w-64">
              <Image src="/avatar.svg" alt="Icon 1" height={60} width={60} />
              <div className="flex flex-col">
                <span>jack.</span>
                <span className="text-primary-gray-light">
                  .cu-cypherpunk.eth
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col p-4 justify-center items-center gap-2 bg-white rounded-lg border border-light tablet:w-64">
              <Image src="/avatar.svg" alt="Icon 1" height={60} width={60} />
              <div className="flex flex-col">
                <span>nancy.</span>
                <span className="text-primary-gray-light">
                  .cu-cypherpunk.eth
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col p-4 justify-center items-center gap-2 bg-white rounded-lg border border-light tablet:w-64">
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
