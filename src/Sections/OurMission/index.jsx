import {
  OurMissionWrapper, OurMissionTitle,
  UL, LI, LinkWrapper, VideoWrapper
} from './ourMission.styles';
import YouTube from 'react-youtube';

const OurMission = () => {
  return (
    <OurMissionWrapper>
      <OurMissionTitle>Our Mission</OurMissionTitle>
      <UL>
        <LI>to lead the Automotive Aftermarket Industry in creating values for customers and sales channels</LI>
        <LI>to focus on the value of our technology we offer to our consumers, creating efficient properties to improve vehicle performance</LI>
        <LI>to add value to mankind by creating safe products for users and industry players</LI>
        <LI>to green the environment by reducing air pollution</LI>
        <LI>To mitigate climate change by reducing Green House Gases. Reduce Carbon Footprint for earth’s sustainability.</LI>
      </UL>
      <LinkWrapper>Read More about us</LinkWrapper>
      <VideoWrapper>
        <YouTube
          videoId="v=eAfUfKYcvBo"
          opts={{ height: '800', width: '100%' }}
        />
      </VideoWrapper>
      
    </OurMissionWrapper>
  )
}

export default OurMission;
