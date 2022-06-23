import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { search } from "../../services/searchService";
import { CartContext } from "../Context/CartContext";

const Search = () => {
  const { openSearch, setOpenSearch } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef();

  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      const result = await search(debounceValue);

      setSearchResult(result);
    };

    fetchApi();
  }, [debounceValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

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

        <div className="fixed inset-y-0 w-[500px] pl-10 right-0">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration:700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration:700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel>
              <div className="flex flex-col h-screen bg-white overflow-y-scroll shawdow-xl">
                <div className="flex-1 overflow-y-auto pt-[100px] px-16 ">
                  {/* Search heading */}
                  <div className="flex justify-between items-center">
                    <Dialog.Title className="uppercase text-14 text-gray-900">
                      Search
                    </Dialog.Title>
                    <div className="ml-6 h-7 flex items-center">
                      <button
                        type="button"
                        className="-mx-2 px-2 text-gray-400 hover:text-gray-800"
                        onClick={() => {
                          setOpenSearch(false);
                        }}
                      >
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Search input */}
                  <div className="mt-16">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search in Hades ..."
                      className="relative uppercase w-full shadow-md p-5 mb-2 bg-gray-200 focus:bg-gray-100 placeholder:text-gray-600 placeholder:uppercase border-none outline-none block border-gray-300"
                      value={searchValue}
                      onChange={handleChange}
                      onFocus={() => setShowResult(true)}
                    />
                    {searchValue && (
                      <button
                        className="absolute right-24 top-[215px]"
                        onClick={handleClear}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Search result   */}
                  {searchResult.length > 0 && showResult && (
                    <div>
                      {searchResult.map((item) => {
                        return (
                          <Link to="/product" key={item.id}>
                            <div className="flex justify-between items-center text-14 border-b border-gray-100 pt-2 pb-5">
                              <div>
                                <p>{item.full_name}</p>
                                <p>
                                  {item.nickname}
                                  <span>₫</span>
                                </p>
                              </div>
                              <div>
                                <img
                                  src={item.avatar}
                                  alt=""
                                  className="w-11"
                                />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Search;
