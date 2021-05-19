import React from 'react';

interface CovidStore {
  enabled?: boolean;
  setEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CovidContext = React.createContext({} as CovidStore);

export default CovidContext;
