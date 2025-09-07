import PropTypes from "prop-types";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineTopic } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Sidebar = ({
  suggestions,
  onSuggestionClick,
  isDarkMode,
  isOpen,
  onClose,
  toggleDarkMode,
}) => {
  const [showList, setShowList] = useState(false);

  if (!suggestions) {
    console.error("Suggestions prop is undefined");
    return null; // Prevent rendering if suggestions are not available
  }

  const handleListVisibility = () => {
    setShowList(!showList); //inverting current value
  };

  return (
    <>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed lg:static rounded-tr-3xl shadow-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } top-0 left-0 h-full lg:h-auto w-3/4 sm:w-64 lg:w-1/4 p-4 sm:p-6 z-50 ${
          isDarkMode
            ? "bg-gray-800 text-gray-200"
            : "bg-[#E9EEF5] text-gray-800"
        } transition-all duration-200 ease-in-out lg:transition-none shadow-lg lg:shadow-none overflow-y-auto`}
      >
        <div className="flex items-center lg:hidden mb-6">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <FaXmark className="icons-style fixed top-4 right-7" />
          </button>
        </div>
        {/* Nav */}
        <nav className=" mt-20 px-3 md:px-2">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-row  items-center gap-2">
              <div
                className={`p-2 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                } hover:opacity-80 transition-opacity duration-200`}
              >
                <MdOutlineTopic className="icons-style hover:opacity-80 transition-opacity duration-200" />
              </div>

              <span className="hover:opacity-80 transition-opacity duration-200 ">
                Topics
              </span>
            </div>
            <button onClick={handleListVisibility}>
              {showList ? (
                <IoIosArrowUp className="icons-style hover:opacity-80 transition-opacity duration-200 " />
              ) : (
                <IoIosArrowDown className="icons-style hover:opacity-80 transition-opacity duration-200" />
              )}
            </button>
          </div>
          {showList && (
            <ul className="space-y-4 md:space-y-3">
              {suggestions.map((topic, index) => (
                <li key={index}>
                  <button
                    className={`w-full text-left px-2 py-4 md:py-3 rounded-lg ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-[#A1C9F9]"
                    } transition-all duration-200`}
                    onClick={() => {
                      onSuggestionClick(topic);
                      onClose();
                    }}
                  >
                    {topic}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6">
            <button
              onClick={toggleDarkMode}
              className={`rounded-full ${
                isDarkMode ? "bg-[#1f2a38]" : "bg-[#E9EEF5]"
              } hover:opacity-80 transition-opacity duration-200 flex flex-row gap-2 items-center`}
            >
              {isDarkMode ? (
                <>
                  <div
                    className={`icon-bg ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <MdLightMode className="icons-style" />
                  </div>

                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <div
                    className={`icon-bg ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <MdDarkMode className="icons-style" />
                  </div>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSuggestionClick: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
