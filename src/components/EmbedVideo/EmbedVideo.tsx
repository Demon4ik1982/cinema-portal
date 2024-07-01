import ReactPlayer from 'react-player/youtube';

type IProps = {
  props: string
}

const EmbedVideo = (props: string): IProps => {
  return (
    <ReactPlayer url={props} />
  );
}

export default EmbedVideo;
