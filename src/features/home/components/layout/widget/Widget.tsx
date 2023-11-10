import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Search } from "lucide-react";

export default function Widget() {
  return (
    <div id="widget-container" className="basis-1/3 lg:block hidden">
      <div
        id="widget-input"
        className="flex items-center p-2 rounded-3xl mt-3 ml-5 bg-quaternary"
      >
        <div id="searchbar">
          <Search className=" hover:stroke-primary" />
        </div>
        <input
          placeholder="Search"
          type="text"
          className="bg-quaternary border-none indent-2 outline-none"
        />
      </div>
      <div
        id="widget-list"
        className="mt-4 ml-5 p-5 bg-quaternary rounded-2xl max-h-screen"
      >
        <h2 className="font-semibold text-xl">What's Happening?</h2>
        <div className="mb-2 mt-2">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="GoktugYldz8"
            options={{ height: 250 }}
          />
        </div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kanwaitforit"
          options={{ height: 250 }}
        />
      </div>
    </div>
  );
}
