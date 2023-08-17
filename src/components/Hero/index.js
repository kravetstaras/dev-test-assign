import { HeroContainer, HeroImg } from "../../styles/Hero";
import { Button, MailLink } from "../../styles/Shared/Button";
import { SecondaryText, Title } from "../../styles/Shared/Text";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src="/images/logo.png" />
      <Title size="20px">Ogilvy</Title>
      <SecondaryText marginBottom="15px">10 years · New York</SecondaryText>
      <SecondaryText marginBottom="40px">
        In the beginning, there was one Ogilvy, the company founded by David Ogilvy in 1948. Today, there is again one
        Ogilvy, in 83 countries and 132 offices. We are one doorway to a creative network, re-founded to make brands
        matter in a complex, noisy, hyper-connected world.
      </SecondaryText>
      <MailLink href="mailto:abc@example.com">
        <Button>Contact Ogilvy</Button>
      </MailLink>
    </HeroContainer>
  );
};
export default Hero;
