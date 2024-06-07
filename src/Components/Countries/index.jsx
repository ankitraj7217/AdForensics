import React, { memo } from "react";
import CustomPieChart from "../CustomPieChart";
import {
  generateRandomRadiusForPieChart
} from "../../Utils/countriesUtils";

const Countries = ({ countriesData }) => {
  
  const randomRadiusObj = generateRandomRadiusForPieChart(countriesData);

  return (
    <section className="countries">
      Countries
      <CustomPieChart data={countriesData} radiusObj={randomRadiusObj} />
    </section>
  );
};

export default memo(Countries);