import React from 'react';
import Main from './components/main/Main'
import {Global} from './global-style';

const App = () => {
  return (
    <>
    <Global>
      <Main />
    </Global>
    </>
  );
}
export default App;