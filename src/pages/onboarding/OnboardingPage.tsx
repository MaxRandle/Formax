import { Box, Heading } from "../../components";
import { Page, PageContent } from "../../layouts";
import { OnboardingForm } from "../../OnboardingForm";

export const OnboardingPage: React.FC = () => {
  return (
    <Page>
      <Box
        as={PageContent}
        container
        style={{
          width: "100%",
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
