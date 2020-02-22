import React from 'react';

import { Link } from 'found';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

import {
  LocalGroceryStore,
  PeopleAlt,
  RecordVoiceOver,
  ShowChart,
  BarChart,
  Settings,
} from '@material-ui/icons';
import { withTranslation } from 'react-i18next';

const SideNavigation = props => {
  const { t } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const sideNavItems = [
    {
      to: '/tags',
      key: t('side-navigation.overview'),
      icon: <BarChart />,
    },
    {
      to: '/products',
      key: t('side-navigation.products'),
      icon: <LocalGroceryStore />,
    },
    {
      to: '/create-tag',
      key: t('side-navigation.customers'),
      icon: <RecordVoiceOver />,
    },
    {
      to: '/tags',
      key: t('side-navigation.employees'),
      icon: <PeopleAlt />,
    },
    {
      to: '/tags',
      key: t('side-navigation.finance'),
      icon: <ShowChart />,
    },
    {
      to: '/settings',
      key: t('side-navigation.settings'),
      icon: <Settings />,
    },
  ];
  const createSideNavItems = sideNavItems => {
    return sideNavItems.map((item, index) => {
      return (
        <Link to={item.to} key={item.key} className="gray">
          <ListItem
            button
            selected={selectedIndex === index}
            onClick={event => handleListItemClick(event, index)}
          >
            <ListItemIcon className="minWidth3">
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.key} />
          </ListItem>
        </Link>
      );
    });
  };
  return (
    <Box>
      <List component="nav">{createSideNavItems(sideNavItems)}</List>
    </Box>
  );
};

export default withTranslation()(SideNavigation);
