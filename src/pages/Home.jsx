import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home");

  const { greeting, description } = t("Home");

  return (
    <div className="App">
      <h1>Home</h1>
      <div className="App-header">
        <h1>{greeting}</h1>
        <h2>{description.heading1}</h2>
        <div>
          <Trans
            values={{ variable: "Home" }} // this is the dynamic setting variable
            components={{ 1: <b /> }}
          >
            {description.paragraph1}
          </Trans>
        </div>
      </div>
    </div>
  );
}
