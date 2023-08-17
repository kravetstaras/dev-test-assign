import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BreadCrumbs, HeaderContainer, HeaderImg, HeaderItem, HeaderLogo } from "./styles/Header";
import { HeroContainer, HeroImg } from "./styles/Hero";
import { Button } from "./styles/Shared/Button";
import { SecondaryText, Title } from "./styles/Shared/Text";
import BACK_ARROW from "./svg/BackArrow";
import Analytics from "./components/Analytics";

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer>
        <HeaderItem>
          <HeaderImg src="/images/icon.jpg" />
          <BreadCrumbs>
            <BACK_ARROW /> <label>Back to Results</label>
          </BreadCrumbs>
        </HeaderItem>
        <HeaderLogo src="/images/logo.png" />
        <HeaderItem>
          <Button>Contact Ogilvy</Button>
          <HeaderImg src="/images/avatar.jpg" />
        </HeaderItem>
      </HeaderContainer>
      <HeroContainer>
        <HeroImg src="/images/logo.png" />
        <Title size="20px">Ogilvy</Title>
        <SecondaryText marginBottom="15px">10 years · New York</SecondaryText>
        <SecondaryText marginBottom="40px">
          In the beginning, there was one Ogilvy, the company founded by David Ogilvy in 1948. Today, there is again one
          Ogilvy, in 83 countries and 132 offices. We are one doorway to a creative network, re-founded to make brands
          matter in a complex, noisy, hyper-connected world.
        </SecondaryText>
        <Button>Contact Ogilvy</Button>
      </HeroContainer>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
