import {
  faBell,
  faEnvelope,
  faFolder,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContentHeader() {
  return (
    <div className="bg-white flex items-center justify-between py-6 px-10 mb-1 shadow-md">
      <div className="bg-gray-100 rounded-lg flex items-center p-2 mr-4 w-2/5">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-xl mr-2"
        />
        <input
          placeholder="Search..."
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center">
        <div className="bg-gray-100 rounded-lg p-2">
          <FontAwesomeIcon icon={faFolder} className=" mx-2" />
          <FontAwesomeIcon icon={faBell} className="mx-2" />
          <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
        </div>
        <div className="w-8 h-8 bg-blue-200 rounded-xl ml-8"></div>
        <span className="font-light text-xs ml-2">Charlie Grant</span>
      </div>
    </div>
  );
}
