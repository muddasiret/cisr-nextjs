import { useEffect } from "react";

const YoutubeEmbed = ({ classes, embedLink }) => {
  const url = new URL(embedLink);
  const args = new URLSearchParams(url.search);
  return (
    <iframe
      width="100%"
      className={classes + " rounded-md"}
      title="yt"
      src={"https://www.youtube.com/embed/" + args.get("v")}
    ></iframe>
  );
};

export default YoutubeEmbed;
