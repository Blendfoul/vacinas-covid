import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core";
import * as content from '../../assets/content.json';
import DrawerItem from "./DrawerItem";

interface DrawerContentProps {
  toggle: () => void;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: 250,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      height: '100%'
    }
  })
);

const DrawerContent: React.FC<DrawerContentProps> = ({toggle}) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {
        content.list.map((item, index) => (
          <DrawerItem key={`item-${item.name}`} item={item} toggle={toggle}/>
        ))
      }
    </div>
  )
};

export default DrawerContent;
