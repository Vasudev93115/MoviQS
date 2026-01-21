import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-full flex justify-center mt-16 px-4">
      <form
        className="
          w-full max-w-3xl
          flex flex-col sm:flex-row items-center gap-4
          bg-white/10 backdrop-blur-md
          border border-white/20
          rounded-xl
          p-6
          shadow-xl
        "
      >
        <input
          spellCheck={false}
          type="text"
          placeholder={lang[langKey]?.gptSearchBarPlaceholder}
          className="
            w-full
            px-5 py-4
            rounded-lg
            text-black
            placeholder-gray-500
            outline-none
            focus:ring-2 focus:ring-purple-500
            transition-all duration-200
          "
        />

        <button
          type="submit"
          className="
            w-full sm:w-auto
            px-8 py-4
            rounded-lg
            bg-gradient-to-r from-purple-600 to-indigo-600
            text-white font-semibold
            hover:scale-105 hover:shadow-lg
            active:scale-95
            transition-all duration-200
          "
        >
        {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
