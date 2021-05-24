import React from "react";
import {createStyles, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {useSound} from "../../hooks/soundHook";
import CovidContext from "../../store/CovidContext";

interface SummaryItem {
  soundPath: string;
  text: string[];
}

const useStyles = makeStyles(() => createStyles({
  text: {
    textAlign: 'justify'
  },
}));

const SummaryItem: React.FC<SummaryItem> = ({soundPath, text}) => {
  const classes = useStyles();
  const {sound} = useSound(soundPath);

  function stopSound() {
    sound!.pause();
    sound!.currentTime = 0;
  }

  function startSound() {
    sound!.play();
  }

  return (
    <CovidContext.Consumer>
      {
        ({enabled}) => (
          <List
            onMouseEnter={() => enabled ? startSound() : null}
            onMouseLeave={() => enabled ? stopSound() : null}
          >
            {text.map(textItem => <ListItem><ListItemText primary={textItem} className={classes.text}/></ListItem>)}
          </List>
        )
      }
    </CovidContext.Consumer>
  );
}

export default SummaryItem;
