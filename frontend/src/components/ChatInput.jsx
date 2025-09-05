import { IoIosSend } from "react-icons/io";
const ChatInput = ({ input, setInput, sendMessage, isLoading, isDarkMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 sm:p-6 ">
      <div
        className={`flex flex-row sm:flex-row border-2 rounded-3xl  ${
          isDarkMode
            ? "bg-gray-700 border-gray-600 text-white"
            : "bg-white border-gray-200 text-black "
        }`}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className={`flex-grow m-1 p-3 sm:p-4 rounded-xl focus:outline-none  ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-200 text-black "
          } `}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`m-1 px-4 sm:py-4 rounded-xl ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-200 text-black "
          } hover:opacity-80 transition-opacity duration-200 `}
        >
          <IoIosSend className="icons-style" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
