import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { Supported_GPT_Languages } from "../utils/constants";
import { changeLnguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user; 
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);
  const handleGPT = () => {
    dispatch(toggleGptSearchView());
  }
  const onHandleLanguegeChange = (e) => {
    dispatch(changeLnguage(e.target.value));
  }

  return (
    <header className="fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between z-50 bg-gradient-to-b from-black">
      
      {/* LOGO */}
      <img
        src={LOGO}
        alt="Netflix Logo"
        className="w-60 md:w-50 cursor-pointer"
        onClick={() => navigate("/browse")}
      />

      {/* RIGHT SECTION */}
      {user && (
        <div className="flex items-center gap-4">
          {showGptSearch && <select className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm font-semibold" onChange={onHandleLanguegeChange}>
            {Supported_GPT_Languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>}
          
          <button className="bg-gradient-to-r from-gray-900 from-0% to-violet-900 to- text-white px-4 py-2 rounded-md text-sm font-semibold transition"
          onClick={handleGPT}>{showGptSearch ? "🏠︎" : "GPT Search"}</button>
          <img
            src={user?.photoURL}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border border-gray-400"
          />

          <button
            onClick={handleSignOut}
            className="bg-gradient-to-r from-gray-900 from-0% to-violet-900 to- text-white px-4 py-2 rounded-md text-sm font-semibold transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;