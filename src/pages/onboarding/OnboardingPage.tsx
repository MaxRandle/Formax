import { css } from "styled-components";
import { Box, Heading } from "../../components";
import { BoxTest } from "../../components/box/BoxTest";
import { Page, PageContent } from "../../layouts";
import { OnboardingForm } from "../../OnboardingForm";

export const OnboardingPage: React.FC = () => {
  return (
    <Page>
      {/* <BoxTest
        as={PageContent}
        container
        style={`
        margin-top: 2rem;
        
        `}
      >
        <h1>{`Onboarding`}</h1>
        <OnboardingForm />
      </BoxTest> */}
      <Box
        as={PageContent}
        container
        style={{
          marginTop: `2rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
          "> * + *": {
            marginTop: `2rem`,
          },
        }}
        md={{ paddingLeft: `2rem`, paddingRight: `2rem` }}
      >
        <Heading as="h2" level={2}>{`Onboarding`}</Heading>
        <OnboardingForm />
      </Box>
    </Page>
  );
};
