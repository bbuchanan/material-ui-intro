import React, { useContext } from "react";

import { AppBar, Tabs, Tab } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

import { ExerciseContext } from "../../context";

const footer = ({ category, width }) => {
  const { muscles, onCategorySelect } = useContext(ExerciseContext);

  const index = category ? muscles.findIndex(group => group === category) + 1 : 0;
  const onIndexSelect = (e, index) => onCategorySelect(index === 0 ? "" : muscles[index - 1]);

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== "xs"}
        variant={width === "xs" ? "scrollable" : "standard"}
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withWidth()(footer);
