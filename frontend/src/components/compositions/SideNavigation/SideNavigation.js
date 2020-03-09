import React from 'react';

import { Link } from 'found';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import {
  LocalGroceryStore,
  PeopleAlt,
  RecordVoiceOver,
  ShowChart,
  BarChart,
  Settings,
  HowToReg,
  Business,
} from '@material-ui/icons';
import { withTranslation } from 'react-i18next';

const SideNavigation = props => {
  const { t } = props;
  const [selectedIndex, setSelectedIndex] = React.useState('');
  const handleListItemClick = (event, to) => {
    setSelectedIndex(to);
  };

  const [open, setOpen] = React.useState({});

  const handleNestedClick = parent => {
    setOpen({ parent: !open.parent });
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
      parent: 'customers',
      key: t('side-navigation.customers'),
      icon: <RecordVoiceOver />,
      nested: true,
      children: [
        {
          to: '/icustomers',
          key: t('customers.individual'),
          icon: <HowToReg />,
        },
        {
          to: '/ccustomers',
          key: t('customers.company'),
          icon: <Business />,
        },
      ],
    },

    {
      to: '/staff',
      key: t('side-navigation.staff'),
      icon: <PeopleAlt />,
    },
    {
      to: '/',
      key: t('side-navigation.finance'),
      icon: <ShowChart />,
    },
    {
      to: '/settings',
      key: t('side-navigation.settings'),
      icon: <Settings />,
    },
  ];
  const getItem = item => {
    return (
      <Link to={item.to} key={item.key} className="gray">
        <ListItem
          button
          selected={selectedIndex == item.to}
          onClick={event => handleListItemClick(event, item.to)}
        >
          <ListItemIcon className="minWidth3">
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.key} className="minWidth7" />
        </ListItem>
      </Link>
    );
  };
  const getListItems = listItems => {
    return listItems.map(item => getItem(item));
  };
  const createSideNavItems = sideNavItems => {
    return sideNavItems.map((item, index) => {
      if (item.nested) {
        return (
          <div key={item.key}>
            <ListItem
              button
              onClick={() => handleNestedClick(item.parent)}
            >
              <ListItemIcon className="minWidth3">
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.key} />
            </ListItem>
            <Collapse in={open.parent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {getListItems(item.children)}
              </List>
            </Collapse>
          </div>
        );
      } else return getItem(item);
    });
  };
  return (
    <Box>
      <List component="nav">{createSideNavItems(sideNavItems)}</List>
    </Box>
  );
};

export default withTranslation()(SideNavigation);
