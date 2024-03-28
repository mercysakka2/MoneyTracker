import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View>
//       <Text>Money Tracker</Text>
//     </View>
//   );
// };
// export default App;

// const styles = StyleSheet.create({});