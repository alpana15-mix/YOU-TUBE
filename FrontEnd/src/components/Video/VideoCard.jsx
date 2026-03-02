import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="w-full cursor-pointer hover:scale-105 transition duration-200">
      
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt="thumbnail"
        className="w-full rounded-xl"
      />

      {/* Video Info */}
      <div className="mt-2">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2">
          {video.title}
        </h3>

        <p className="text-gray-500 text-xs md:text-sm">
          {video.channel}
        </p>

        <p className="text-gray-500 text-xs">
          {video.views} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;