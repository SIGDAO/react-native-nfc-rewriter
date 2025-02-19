import './AppOutlets';
import * as React from 'react';
import {Platform, UIManager} from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import AppNavigator from './AppNavigator';
import * as AppContext from './AppContext';

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#965fd4',
  },
};

class App extends React.Component {
  constructor(props) {
    super();
    // explicitly create redux store
    // enable LayoutAnimation for Android
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <AppContext.Provider>
        <PaperProvider theme={CustomDefaultTheme}>
          <AppNavigator />
        </PaperProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
