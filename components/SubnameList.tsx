import { SubnameRow } from "@/types";
import Table from "./Table";
import { data } from "@/data";

const SubnameList = async () => {
  async function fetchSubnames(): Promise<SubnameRow[]> {
    return data;
  }

  return (
    <section className="flex px-2 py-12 flex-col w-full items-center justify-center text-center gap-6 bg-primary-gray">
      <h2 className="text-2xl font-zen font-medium text-primary-blue">
        Subnames minted
      </h2>
      <Table data={await fetchSubnames()} />
    </section>
  );
};

export default SubnameList;
