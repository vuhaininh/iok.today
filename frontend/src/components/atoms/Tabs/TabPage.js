import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import TabPanel from './TabPanel';
const TabPage = props => {
  const { items } = props;
  const renderTabs = items => {
    return items.map((item, index) => {
      return <Tab label={item.label} key={index} />;
    });
  };
  const renderPanels = (items, value) => {
    return items.map((item, index) => {
      return (
        <TabPanel value={value} index={index} key={index}>
          {item.component}
        </TabPanel>
      );
    });
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={value}
        onChange={handleChange}
      >
        {renderTabs(items)}
      </Tabs>
      {renderPanels(items, value)}
    </Paper>
  );
};

export default TabPage;
