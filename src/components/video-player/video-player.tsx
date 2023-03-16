import ReactPlayer from 'react-player';
import { useRef, useEffect } from 'react';

import { VideoPlayerProps } from '../../types/video-player';

const VideoPlayer = (props: VideoPlayerProps) => {
  const {
    videoPlaying = false,
    videoUrl,
    controls = false,
    state,
    onDurationTime,
  } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && state) {
      ref.current.seekTo(state.start, 'seconds');
    }
  }, [state, ref]);

  return (
    <ReactPlayer
      url={videoUrl}
      playing={videoPlaying}
      controls={controls}
      ref={ref}
      onDuration={onDurationTime}
    />
  );
};

export default VideoPlayer;
