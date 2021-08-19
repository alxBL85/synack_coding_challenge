import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

import { getEngineColor, getItemTitle, getItemLink } from '../../config';
import ListItemLink from '../ListItemLink';

import './index.css';

const IndividualResult = ({result}) => {
    const titleKey = getItemTitle(result.searchEngine);
    const linkKey = getItemLink(result.searchEngine) 
    const title = result[titleKey];
    const link = result[linkKey];

    return (
        <ListItem className = "individualResult">
        <ListItemAvatar>
          <Avatar  style={{backgroundColor: getEngineColor(result.searchEngine) }}>
          <SearchIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemLink href ={ link }>
        <ListItemText primary={ title } secondary={ link } />
        </ListItemLink>
      </ListItem>
    );
};

export default IndividualResult;