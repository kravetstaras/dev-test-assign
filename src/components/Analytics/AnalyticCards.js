import { useLocation } from "react-router-dom";
import { CardsContainer } from "../../styles/Shared/Card";
import Card from "../Shared/Card";
import { CARDS_DATA, EMPTY_DATA } from "./Constant";

const AnalyticsCards = () => {
  const location = useLocation();
  const handleGetData = () => {
    const page = location.pathname;
    return page === "/" || page === "/summary" ? CARDS_DATA : EMPTY_DATA;
  };
  return (
    <CardsContainer>
      {handleGetData().map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </CardsContainer>
  );
};
export default AnalyticsCards;
