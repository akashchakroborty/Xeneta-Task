import React from 'react';
import './app.scss';
import OriginDestination from '../Components/OriginDestination/OriginDestination.container';
import RatesWrapper from '../Components/RatesWrapper/RatesWrapper.container';

const App: React.FC = () => {
  return (
    <div>
      <OriginDestination />
      <RatesWrapper />
    </div>
  );
};

export default App;
