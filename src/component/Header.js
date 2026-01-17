import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  return (
    <header className="absolute top-0 left-0 w-full px-8 py-4 flex items-center justify-between z-50 bg-gradient-to-b from-black">
      
      {/* LOGO */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="w-40 md:w-44 cursor-pointer"
        onClick={() => navigate("/browse")}
      />

      {/* RIGHT SECTION */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user.photoURL}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border border-gray-400"
          />

          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
