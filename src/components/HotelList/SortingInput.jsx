import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DownIcon } from "../../lib/helpers/Icons";
import { useDispatch } from "react-redux";
import {
  sortAZ,
  sortZA,
  sortPriceAsc,
  sortPriceDesc,
} from "./Store/hotelDataSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sortings = [
  { name: "Price: low to high", sorting: sortPriceAsc() },
  { name: "Price: high to low", sorting: sortPriceDesc() },
  { name: "A to Z", sorting: sortAZ() },
  { name: "Z to A", sorting: sortZA() },
];

export const SortingInput = () => {
  const dispatch = useDispatch();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-[10px] text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          Sorting
          <DownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortings.map((sort, idx) => {
              return (
                <Menu.Item key={sort.name}>
                  {({ active }) => (
                    <button
                      onClick={() => dispatch(sort.sorting)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      {sort.name}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
