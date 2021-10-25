import {
  FeaturedSolutionsWrapper, CardListWrapper,
  FeaturesSolutionSection, FeaturesSolutionSectionTitle,
  FeaturedSolutionsSectionImage
} from './featuredSolutions.styles.js';
import { Button, Card } from '../../components';

const FeaturedSolutions = () => {
  return (
    <FeaturedSolutionsWrapper>
      <CardListWrapper>
        <Card
          title="Vision"
          description="restore and improve combustion engine performance"
          image="http://www.biosurgeasia.com/wp-content/uploads/2020/10/vision-155x155-1.jpg"
        />
        <Card
          title="Invent"
          description="KM+ Advanced Nano Technology creates solutions"
          image="http://www.biosurgeasia.com/wp-content/uploads/2018/07/navigation-home-offerbox-icon3.png"
        />
        <Card
          title="Improve"
          description="continuous improvement on engine performance"
          image="https://www.biosurgeasia.com/wp-content/uploads/2018/07/navigation-home-offerbox-icon1.png" />
      </CardListWrapper>

      <FeaturesSolutionSection>
        <FeaturesSolutionSectionTitle>Featured Solutions</FeaturesSolutionSectionTitle>
        <FeaturedSolutionsSectionImage src="http://www.biosurgeasia.com/wp-content/uploads/2020/10/Solutions-with-wording.png" />
        <Button primary>Go to Solutions Page</Button>
      </FeaturesSolutionSection>
    </FeaturedSolutionsWrapper>
  )
}

export default FeaturedSolutions
