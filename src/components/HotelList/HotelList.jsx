import { React, useState } from "react";
import { HotelCard } from "./Card/HotelCard";
import { useSelector } from "react-redux";
import { Pagination } from "./Pagination";
import { SortingInput } from "./SortingInput";
import { SearchInput } from "./SearchInput";

export const HotelList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentPageRecords = useSelector((state) =>
    state.hotelData.value.slice(indexOfFirstRecord, indexOfLastRecord)
  );

  const totalLength = useSelector((state) => state.hotelData.value.length);

  const nPages = useSelector((state) =>
    Math.ceil(state.hotelData.value.length / recordsPerPage)
  );

  return (
    <>
      <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-none">
          <div className="overflow-hidden bg-gray-50 shadow sm:rounded-lg">
            <div className="flex items-center rounded-t-xl justify-between border-b border-gray-200  bg-white px-4 py-3 sm:px-6">
              <SortingInput />
              <SearchInput />
            </div>
            <ul>
              {currentPageRecords.map((data, idx) => {
                return (
                  <div key={idx}>
                    <div>
                      <HotelCard hotel={data} />
                    </div>
                  </div>
                );
              })}
            </ul>
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              recordsPerPage={recordsPerPage}
              totalLength={totalLength}
            />
          </div>
        </div>
      </div>
    </>
  );
};
