import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

const CardHeaderTab = ({ title, description }) => {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
};

export default CardHeaderTab;
