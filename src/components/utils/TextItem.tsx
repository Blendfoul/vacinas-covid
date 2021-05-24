import React from "react";
import {useSound} from "../../hooks/soundHook";
import {Typography} from "@material-ui/core";
import CovidContext from "../../store/CovidContext";
import {Variant} from "@material-ui/core/styles/createTypography";

interface TextItemProps {
  soundPath: string;
  variant?: "inherit" | Variant | undefined;
  className?: string | undefined;
  color?: "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary";
}

const TextItem: React.FC<TextItemProps> = ({children, soundPath, ...other}) => {
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
          <Typography {...other}
            onMouseEnter={() => enabled ? startSound() : null}
            onMouseLeave={() => enabled ? stopSound() : null}>{children}</Typography>
        )
      }
    </CovidContext.Consumer>
  );
}

export default TextItem;
