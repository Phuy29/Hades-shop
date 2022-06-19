import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Search = () => {
  const { openSearch, setOpenSearch } = useContext(CartContext);
  return (
    <Transition.Root show={openSearch} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setOpenSearch(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="inset-0 absolute overflow-hidden">
            <div className="fixed inset-y-0 max-w-full pl-10 right-0">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration:700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration:700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className=" w-[480px]">
                  <div className="flex flex-col h-screen bg-white overflow-y-scroll shawdow-xl">
                    <div className="flex-1 overflow-y-auto py-[100px] px-16 ">
                      <div className="flex justify-between items-center">
                        <Dialog.Title className="uppercase text-14 text-gray-900">
                          Cart
                        </Dialog.Title>
                        <div className="ml-6 h-7 flex items-center">
                          <button
                            type="button"
                            className="-mx-2 px-2 text-gray-400 hover:text-gray-800"
                            onClick={() => setOpenSearch(false)}
                          >
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-16">
                        <input
                          type="text"
                          placeholder="Search in Hades ..."
                          className="w-full p-5 bg-gray-300 focus:bg-gray-100 placeholder:text-gray-600 placeholder:uppercase border-none outline-none block border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Search;
