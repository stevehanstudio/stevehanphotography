import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
//import { Layout } from "./layout"

const PlayerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px;
  padding-bottom: 20px;
  margin: 0;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  @media(min-width: 600px) {
    margin: 0 auto;
    padding: 1rem;
    flex-direction: row;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0;
    padding: 0;
    height: auto;
    @media(min-width: 600px) {
      width: 50%;
      margin: 10px;
      padding: 10px;
    }
  }
  p {
    padding: 20px 10px;
    @media(max-width: 600px) {
      padding: 0;
      margin: 0;
//      padding-bottom: 1rem;
      line-height: 1rem;
    }
  }
  .player {
    @media(max-width: 600px) {
      width: 100%;
      max-width: 100vw;
      height: 100%;
    }
  }
}`

const VideoGallery = ({videos}) => {
  //console.log("videos", videos)

  return (
    <PlayerWrapper>
      {videos.map((video, index) => {
        //console.log(video)
        return (
          <div className="container">
            <ReactPlayer
              className="player"
              key={index}
              url={video.videoUrl}
              poster={video.src}
              controls
            />
{/*            <p>{video.title}</p>*/}
          </div>
        )
      })}
    </PlayerWrapper>
  )
}

export default VideoGallery