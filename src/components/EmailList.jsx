import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EmailCard from "./EmailCard";
import "./EmailList.css";

export default function EmailList() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      image: "bg-blue-100",
      from: "Annie Lynch",
      subject: "Aliquam erat volutpat",
      body: `Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "2:12PM",
    },
    {
      id: 2,
      image: "bg-red-100",
      from: "Dribbble Team",
      subject: "How are you getting on?",
      body: `Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "3:30PM",
      isSelected: true,
    },
    {
      id: 3,
      image: "bg-green-100",
      from: "Harry Kim",
      subject: "Pellentesque habitant morbi tristique",
      body: `Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.`,
      hasAttachment: false,
      time: "11:15AM",
    },
    {
      id: 3,
      image: "bg-green-100",
      from: "Harry Kim",
      subject: "Pellentesque habitant morbi tristique",
      body: `Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.`,
      hasAttachment: false,
      time: "11:15AM",
    },
  ]);
  return (
    <div className="flex flex-col bg-white w-6/12 mr-1 px-0 h-full">
      <div className="flex items-center py-4 px-6 bg-white  rounded-tr-lg">
        <span className="text-m  bg-gray-100 rounded-lg p-2">Inbox</span>
        <div className="ml-2 w-5 h-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-100 flex items-center justify-center text-xs font-normal text-white">
          3
        </div>
        <FontAwesomeIcon
          icon={faPlus}
          className="px-3 py-3 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 text-white  ml-auto"
        />
      </div>
      <div className="px-6 pb-3 bg-white">
        <span className="text-xs text-gray-700">Recent</span>
        <FontAwesomeIcon
          icon={faCaretDown}
          className="text-gray-700 text-xs ml-2"
        />
      </div>
      <div className="flex flex-col px-6 pb-6 overflow-y-auto bg-white">
        {emails.map((email, index) => (
          <EmailCard key={email.id} {...email} />
        ))}
      </div>
    </div>
  );
}
