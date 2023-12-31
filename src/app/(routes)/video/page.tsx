import { VideoGeneration as video } from '@/constants';

import Heading from '@/components/heading';
import VideoBody from './components/video-body';

const VideoPage = () => {
  const { title, api, showReset, icon, bgColor, textColor } = video;

  return (
    <div className='flex h-full flex-col'>
      <Heading
        title={title}
        api={api}
        showReset={showReset}
        icon={icon}
        bgColor={bgColor}
        textColor={textColor}
      />
      <VideoBody />
    </div>
  );
};

export default VideoPage;
