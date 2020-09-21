import React from 'react'
import ReactPlayer from 'react-player'
import style from 'styled-components'
import { Layout } from "../components"

const PlayerWrapper = style.div`
    position: relative;
   display: flex;
   padding: 1rem;
   margin: 0 auto;
   width: 100%;
   height: 100%;
   .player {
      width: 33%;
      padding: 10px;
   }
}`

const video = () => {
  return (
    <Layout>
      <PlayerWrapper>
        <ReactPlayer
          className="player"
          url="https://youtu.be/RA-nSnuKYis"
          controls
        />
        <ReactPlayer
          className="player"
          url="https://youtu.be/5Z1WgnSeee4"
          controls
        />
        <ReactPlayer
          className="player"
          url="https://youtu.be/5Z1WgnSeee4"
          controls
        />
      </PlayerWrapper>
    </Layout>
  )
}

export default video