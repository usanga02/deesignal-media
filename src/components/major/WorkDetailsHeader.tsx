import React, { useEffect, useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

type Props = {
  title: string;
  imgUrl: string;
  gallery: string[];
  videoUrl?: string;
};

const WorkDetailsHeader = ({ title, imgUrl, gallery, videoUrl }: Props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  function getYoutubeVideoId(url: string): string | null {
    // Regular expression to match YouTube video URL patterns
    const youtubeRegex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]{11})$/;

    // Extract video ID from the URL
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return match[1]; // Return the extracted video ID
    }

    return null; // Return null if no video ID is found
  }

  function getCategoryFromUrl(url: string): string | null {
    const category = url.split("/")[2].replace(/_/g, " ");
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    width:
      viewportWidth < 400
        ? "310"
        : viewportWidth < 470
        ? "350"
        : viewportWidth < 560
        ? "450"
        : "510",
    height: viewportWidth > 400 ? "300" : "200",
    playerVars: {
      autoplay: 0,
    },
  };

  let img2Url: string | null = "";
  let videoId: string | null = "";
  const driveRegex =
    /^(https?:\/\/)?(www\.)?drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+\/?/i;

  if (videoUrl) {
    if (videoUrl.match(driveRegex)) {
      img2Url = `https://drive.google.com/uc?export=view&id=${
        videoUrl?.match(/\/d\/([^/]+)\//)![1]
      }`;
    } else {
      videoId = getYoutubeVideoId(videoUrl);
    }
  } else if (gallery.length > 1) {
    img2Url = `https://drive.google.com/uc?export=view&id=${
      gallery[1]?.match(/\/d\/([^/]+)\//)![1]
    }`;
  }

  const img1Url = `https://drive.google.com/uc?export=view&id=${
    gallery[1]?.match(/\/d\/([^/]+)\//)![1]
  }`;

  return (
    <div className="md:px-16 px-8 mt-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600"
      >
        <TbArrowBackUp />
        <span className="text-sm font-semibold md:text-base">
          Back to {getCategoryFromUrl(location)}
        </span>
      </button>

      <div>
        <h1 className="font-druk-wide leading-relaxed text-2xl md:text-4xl md:w-[600px] mt-8 md:mb-5">
          {title}
        </h1>

        <div className="grid grid-cols-2 md:flex md:flex-row justify-between gap-5 mt-3 md:mt-14 items-center">
          <img
            src={imgUrl}
            className="object-cover col-span-1 order-2 md:order-1 object-center h-[180px] w-full md:h-[650px] md:w-[450px]"
            alt=""
          />

          <img
            src={img1Url}
            className="object-cover col-span-1 order-3 md:order-2 h-[180px] w-full md:h-[500px] md:w-[320px]"
            alt=""
          />

          <div className="md:-mt-[400px] col-span-2 order-1 md:order-3">
            {videoUrl ? (
              videoUrl.match(driveRegex) ? (
                <video src={img2Url} width={550} typeof="video/moc" controls />
              ) : (
                <YouTube
                  videoId={videoId as string}
                  // className="w-full"
                  opts={options}
                />
              )
            ) : (
              <img src={img2Url} width={450} className="object-cover" alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsHeader;
