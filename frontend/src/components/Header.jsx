import { FaBars } from "react-icons/fa";

const Header = ({ isDarkMode, onMenuClick }) => {
  return (
    <div
      className={`w-full flex justify-between items-center px-4 py-3 sm:px-6 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } border-b border-gray-200`}
    >
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <FaBars className="icons-style" />
      </button>

      <img src="./Logo.png" alt="Chat Ai logo" className="w-[48px]" />
    </div>
  );
};

export default Header;
