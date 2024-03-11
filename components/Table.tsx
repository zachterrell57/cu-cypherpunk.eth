"use client";

import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { SubnameRow } from "@/types";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const columnHelper = createColumnHelper<SubnameRow>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ethAddress", {
    header: "ETH Address",
    cell: (info) => info.getValue(),
  }),
];

type TableProps = {
  data: SubnameRow[];
};

type PaginationState = {
  pageIndex: number;
  pageSize: number;
};

const Table = ({ data }: TableProps) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="flex w-full max-w-5xl flex-col items-center justify-center text-sm text-white">
      <table className="w-full table-fixed overflow-hidden rounded-t-lg">
        <thead className="bg-[#404040]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4  text-start">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-primary-dark">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-primary-gray-light hover:text-primary-dark"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="truncate p-4 text-start ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-full justify-center gap-2 border-t border-primary-gray-light bg-primary-dark p-4 tablet:justify-start">
        <button
          className="rounded border p-1 hover:bg-primary-gray-light"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronDoubleLeftIcon className="h-4 w-4" />
        </button>
        <button
          className="rounded border p-1 hover:bg-primary-gray-light"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          className="rounded border p-1 hover:bg-primary-gray-light"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
        <button
          className="rounded border p-1 hover:bg-primary-gray-light"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronDoubleRightIcon className="h-4 w-4" />
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <span>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Table;
