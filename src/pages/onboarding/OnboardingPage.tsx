import { Box } from "../../components";
import { Page, PageContent } from "../../layouts";

export const OnboardingPage: React.FC = () => {
  return (
    <Page>
      <Box
        as={PageContent}
        container
        style={{
          marginTop: `2rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
          "> * + *": {
            paddingTop: `2rem`,
          },
        }}
        md={{ paddingLeft: `2rem`, paddingRight: `2rem` }}
      >
        <h1>{`Onboarding`}</h1>
        <h1>{`Onboarding`}</h1>
        <h1>{`Onboarding`}</h1>
      </Box>
    </Page>
  );
};
