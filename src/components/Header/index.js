import { BreadCrumbs, HeaderContainer, HeaderImg, HeaderItem, HeaderLogo } from "../../styles/Header";
import { Button, MailLink } from "../../styles/Shared/Button";
import BACK_ARROW from "../../svg/BackArrow";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem>
        <HeaderImg src="/images/icon.jpg" />
        <BreadCrumbs>
          <BACK_ARROW /> <label>Back to Results</label>
        </BreadCrumbs>
      </HeaderItem>
      <HeaderLogo src="/images/logo.png" />
      <HeaderItem>
        <MailLink href="mailto:abc@example.com">
          <Button>Contact Ogilvy</Button>
        </MailLink>
        <HeaderImg src="/images/avatar.jpg" />
      </HeaderItem>
    </HeaderContainer>
  );
};
export default Header;
