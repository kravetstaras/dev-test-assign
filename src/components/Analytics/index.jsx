import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnalyticsContainer } from "../../styles/Analytics";
import { TabItem, Tabs } from "../../styles/Shared/Tabs";
import { TABS } from "./Constant";
import AnalyticsCards from "./AnalyticCards";

const Analytics = () => {
  const location = useLocation();

  const MultiRoute = (el, ...paths) => {
    return paths.map((p) => <Route key={p} element={el} path={p} />);
  };

  const isSelected = (tab) => {
    const includes = location.pathname.includes(tab.toLocaleLowerCase());
    return includes || (tab === TABS[0] && location.pathname === "/");
  };

  return (
    <AnalyticsContainer>
      <Tabs>
        {TABS.map((tab) => (
          <TabItem $selected={isSelected(tab)}>
            <Link to={tab.toLowerCase()}>{tab}</Link>
          </TabItem>
        ))}
      </Tabs>
      <Routes>{MultiRoute(<AnalyticsCards />, "*", "/summary")}</Routes>
    </AnalyticsContainer>
  );
};
export default Analytics;
