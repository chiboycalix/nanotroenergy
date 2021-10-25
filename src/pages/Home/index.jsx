import { Banner } from '../../components';
import {
  FeaturedSolutions, LatestProducts, OurMission, ContactUs, Footer
} from '../../Sections';
import {
  HomeWrapper, BannerWrapper,
  FeaturedSolutionsWrapper, LatestProductsSectionWrapper,
  OurMissionSectionsWrapper, ContactUsSectionWrapper, FooterSectionWrapper
} from './home.styles';

const Home = () => {
  return (
    <HomeWrapper>
      <BannerWrapper>
        <Banner />
      </BannerWrapper>
      <FeaturedSolutionsWrapper>
        <FeaturedSolutions />
      </FeaturedSolutionsWrapper>
      <LatestProductsSectionWrapper>
        <LatestProducts />
      </LatestProductsSectionWrapper>
      <OurMissionSectionsWrapper>
        <OurMission />
      </OurMissionSectionsWrapper>
      <ContactUsSectionWrapper>
        <ContactUs />
      </ContactUsSectionWrapper>
      <FooterSectionWrapper>
        <Footer />
      </FooterSectionWrapper>
    </HomeWrapper>
  )
}

export default Home
