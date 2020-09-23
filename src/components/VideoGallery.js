import React from 'react'
import ReactPlayer from 'react-player'
import style from 'styled-components'
//import { Layout } from "./layout"

const PlayerWrapper = style.div`
  position: relative;
  flex-direction: row;
  display: flex;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  @media(max-width: 600px) {
    flex-direction: column;
    padding: 1rem;
  }
  .container {
    width: 100%;
    height: auto;
    @media(min-width: 600px) {
      width: 50%;
    margin: 10px;
    padding: 10px;
    }
  }
  p {
    padding: 20px 10px;
  }
}`

const VideoGallery = ({videos}) => {
  console.log("videos", videos)

  return (
    <PlayerWrapper>
      {videos.map((video, index) => {
        console.log(video)
        return (
          <div className="container">
            <ReactPlayer
              className="player"
              key={index}
              url={video.videoUrl}
              poster={video.src}
              controls
            />
            <p>{video.title}</p>
          </div>
        )
      })}
    </PlayerWrapper>
  )
}

export default VideoGallery