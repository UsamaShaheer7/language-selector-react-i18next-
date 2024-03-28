import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  const { greeting, description } = t("About");

  return (
    <div className="App">
      <h1>About</h1>
      <div className="App-header">
        <h1>{greeting}</h1>
        <h2>{description.heading1}</h2>
        <div>
          <Trans
            values={{ variable: "About" }} // this is the dynamic setting variable
            components={{ 1: <b /> }}
          >
            {description.paragraph1}
          </Trans>
        </div>
      </div>
    </div>
  );
}
