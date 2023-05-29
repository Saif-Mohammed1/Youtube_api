import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import axios from "axios";
import { Container, Error, Form, VideosContainer } from "./App.styles";

const PlaylistDownloader = () => {
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [playlistId, setPlaylistId] = useState("");
  const [error, setError] = useState([]);
  // Extract the playlist ID from the URL
  useEffect(() => {
    setError([]);

    if (playlistId) {
      const fetchPlaylist = async () => {
        const playlistIds = playlistId.split("list=")[1];
        try {
          const { data } = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=55&playlistId=${playlistIds}&key=${process.env.REACT_APP_YOUTUBE_API}`
          );
          setPlaylistVideos(data.items);
        } catch (error) {
          setPlaylistVideos([]);
          if (error.response.status === 404) {
            setError(error.response.data.error.errors);
          }
        }
      };
      fetchPlaylist();
    }
  }, [playlistId]);
  const handleDownload = async (video) => {
    const { videoId } = video.snippet.resourceId;
    const videoUrl = `https://cors-anywhere.herokuapp.com/https://www.youtube.com/watch?v=${videoId}`;

    try {
      const response = await axios.get(videoUrl, { responseType: "blob" });
      const videoBlob = new Blob([response.data], { type: "video/mp4" });
      saveAs(videoBlob, `${video.snippet.title}.mp4`);
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setPlaylistId(e.target.playlistId.value);
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        <label id="playlistId">Playlist Link:</label>
        <input
          type="text"
          name="playlistId"
          placeholder="Enter your playlist"
        />
        <input type="submit" value="Download" />
      </Form>
      {playlistId && (
        <Container>
          {/* Display the playlist videos */}
          {playlistVideos.map((video, inx) => {
            const { medium } = video.snippet.thumbnails;
            return (
              <VideosContainer key={video.etag}>
                <img
                  width="120"
                  src={medium.url}
                  alt={video.snippet.title.slice(0, 10)}
                />
                <p>{inx + 1 + "_" + video.snippet.title}</p>
                <button onClick={() => handleDownload(video)}>Download</button>
              </VideosContainer>
            );
          })}
        </Container>
      )}
      {error && error.length > 0 && (
        <>
          <div>
            <Error>
              oops something goes wrong please make sure the URL is correct{" "}
            </Error>
          </div>
        </>
      )}
    </>
  );
};

export default PlaylistDownloader;
