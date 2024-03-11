"use client";

import { UserRecord } from "@/types";
import { useState } from "react";
import { set, useForm } from "react-hook-form";

type Props = {
  userRecord: UserRecord;
};

type FormValues = {
  avatar: string;
  description: string;
  location: string;
  twitter: string;
  website: string;
};

const RecordsForm = ({ userRecord }: Props) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setShowSuccess(true);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="avatar" className="font-bold">
          Avatar
        </label>
        <input
          id="avatar"
          type="text"
          defaultValue={userRecord.avatar}
          className="rounded-lg bg-[#FAFAFA] p-2 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="font-bold">
          Description
        </label>
        <input
          id="description"
          type="text"
          defaultValue={userRecord.description}
          className="rounded-lg bg-[#FAFAFA] p-2 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="location" className="font-bold">
          Location
        </label>
        <input
          id="location"
          type="text"
          defaultValue={userRecord.location}
          className="rounded-lg bg-[#FAFAFA] p-2 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="twitter" className="font-bold">
          X / Twitter
        </label>
        <input
          id="twitter"
          type="text"
          defaultValue={userRecord.twitter}
          className="rounded-lg bg-[#FAFAFA] p-2 text-sm"
          {...register("twitter")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="website" className="font-bold">
          Website
        </label>
        <input
          id="website"
          type="url"
          defaultValue={userRecord.website}
          className="rounded-lg bg-[#FAFAFA] p-2 text-sm"
          {...register("website")}
        />
      </div>

      <button
        type="submit"
        className="block w-min rounded-lg bg-primary-blue px-4 py-2 text-base font-medium text-primary-dark hover:bg-primary-blue-light hover:text-primary-dark"
      >
        Save
      </button>

      {showSuccess && (
        <div className="rounded-lg bg-green-100 p-2 text-sm text-green-600">
          Success
        </div>
      )}
    </form>
  );
};

export default RecordsForm;
