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
    <div className="w-full flex flex-col items-center justify-center text-white text-sm max-w-5xl gap-2">
      <table className="w-full overflow-hidden rounded-t-lg table-fixed">
        <thead className="bg-[#404040]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4  text-start">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-primary-dark">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 text-start truncate">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-full gap-2 justify-center tablet:justify-start">
        <button
          className="border rounded p-1 hover:bg-primary-gray-light"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}>
          <ChevronDoubleLeftIcon className="h-4 w-4" />
        </button>
        <button
          className="border rounded p-1 hover:bg-primary-gray-light"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          className="border rounded p-1 hover:bg-primary-gray-light"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          <ChevronRightIcon className="h-4 w-4" />
        </button>
        <button
          className="border rounded p-1 hover:bg-primary-gray-light"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}>
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
