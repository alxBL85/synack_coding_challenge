import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

import { getEngineColor } from '../../config';
import ListItemLink from '../ListItemLink';

import './index.css';

const IndividualResult = ({result}) => {

    return (
        <ListItem className = "individualResult">
        <ListItemAvatar>
          <Avatar  style={{backgroundColor: getEngineColor(result.searchEngine) }}>
          <SearchIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemLink href ={ result.link }>
        <ListItemText primary={result.title} secondary={result.link} />
        </ListItemLink>
      </ListItem>
    );
};

export default IndividualResult;