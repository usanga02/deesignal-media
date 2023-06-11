import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

type Props = {
  title: string;
  imgUrl: string;
  gallery: string[];
  videoUrl?: string;
};

const WorkDetailsHeader = ({ title, imgUrl, gallery, videoUrl }: Props) => {
  const navigate = useNavigate();

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

  const options = {
    width: "560",
    height: "315",
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
        videoUrl.match(/\/d\/([^/]+)\//)![1]
      }`;
    } else {
      videoId = getYoutubeVideoId(videoUrl);
    }
  } else {
    img2Url = `https://drive.google.com/uc?export=view&id=${
      gallery[2].match(/\/d\/([^/]+)\//)![1]
    }`;
  }

  const img1Url = `https://drive.google.com/uc?export=view&id=${
    gallery[1].match(/\/d\/([^/]+)\//)![1]
  }`;

  return (
    <div className="px-16 mt-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600"
      >
        <TbArrowBackUp />
        <span>Back to Wedding Films</span>
      </button>

      <div>
        <h1 className="font-druk-wide leading-relaxed text-4xl w-[600px] mt-8 mb-5">
          {title}
        </h1>

        <div className="flex justify-between gap-5 mt-14 items-center">
          <img
            src={imgUrl}
            className="object-cover object-center h-[650px]"
            width={450}
            alt=""
          />

          <img
            src={img1Url}
            className="object-cover h-[500px]"
            width={320}
            alt=""
          />

          <div className="-mt-[400px]">
            {videoUrl ? (
              videoUrl.match(driveRegex) ? (
                <video src={img2Url} width={550} typeof="video/moc" controls />
              ) : (
                <YouTube videoId={videoId as string} opts={options} />
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
