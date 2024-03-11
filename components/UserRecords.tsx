"use client";

import { shortenAddress } from "@/utils";
import RecordsForm from "./RecordsForm";
import { UserRecord } from "@/types";

const UserRecords = ({ records }: { records: UserRecord }) => {
  return (
    <div className="flex w-full h-full flex-col p-4 justify-center space-y-6 bg-white rounded-lg border border-light">
      <div className="flex flex-col gap-6">
        <img src={records.avatar} className="w-16 h-16 rounded-full" />
        <div className="flex flex-col gap-1">
          <span>
            <span className="font-semibold text-lg">{records.subname}</span>
            <span className="font-medium text-primary-gray-light text-lg">
              .cu-cypherpunk.eth
            </span>
          </span>
          <span className="text-primary-gray-light">
            {shortenAddress(records.address)}
          </span>
        </div>
      </div>

      <hr className="border-border-light" />

      <RecordsForm userRecord={records} />
    </div>
  );
};

export default UserRecords;
