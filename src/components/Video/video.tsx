import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {ContainerVideo, StyledIframe} from './video.style'

function VideoPlayer() {
  const videoId = 'f1-jV9Qwwf0'; 
  const [play, setPlay] = useState(false);

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${play ? 1 : 0}&mute=1`;

  return (
    <ContainerVideo className='containerVideo'>
        <section className='cotainerTitulo'>
            <div>
              <h2>Sobre Nos</h2>
            </div>
        </section>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible: boolean) => {
            if (isVisible && !play) {
              setPlay(true);
            }
          }}
      >
        <StyledIframe
       
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></StyledIframe>
      </VisibilitySensor>
    </ContainerVideo>
  );
}



export default VideoPlayer;