import {
  AnalyticsKeyValue,
  AnalyticsLine,
  CardContainer,
  CardIcon,
  GoodBarTitle,
  GoodCardBar,
  Indicator,
  Line,
  NiceCardBar,
  NiceCardBarBorder,
} from "../../styles/Shared/Card";
import { SecondaryText, Title } from "../../styles/Shared/Text";
import FLARE from "../../svg/Flare";

const Card = ({ img, title, descritpion, analytics, type }) => {
  return (
    <CardContainer>
      <CardIcon src={img} />
      <Title $uppercase>{title}</Title>
      <SecondaryText marginBottom={"40px"} $card>
        {descritpion}
      </SecondaryText>
      {analytics.map((analytic, index) => (
        <AnalyticsLine key={index}>
          <Line>
            <Indicator value={analytic.value}></Indicator>
          </Line>
          <AnalyticsKeyValue>
            <Title className={`${analytic.value ? "red" : "disabled"}`}>{analytic.title}</Title>
            <Title className={`${analytic.value ? "red" : "disabled"}`}>{analytic.value * 100}%</Title>
          </AnalyticsKeyValue>
        </AnalyticsLine>
      ))}

      {type === "Nice" ? (
        <NiceCardBar>
          <NiceCardBarBorder></NiceCardBarBorder>
          <Title className="blue">Nice!</Title>
          <SecondaryText>Ogilvy is managing businesses of a similar size to yours.</SecondaryText>
        </NiceCardBar>
      ) : (
        <GoodCardBar>
          <FLARE />
          <GoodBarTitle>
            <Title className="blue">Things are looking good!</Title>
            <SecondaryText>Ogilvy has experience working with the same type of business as yours.</SecondaryText>
          </GoodBarTitle>
        </GoodCardBar>
      )}
    </CardContainer>
  );
};
export default Card;
