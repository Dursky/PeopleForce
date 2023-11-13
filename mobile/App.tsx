import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './store';
import {Root} from './Screens/Root';
import Posts from './Screens/Posts';
import {PostDetails} from './Screens/PostDetails';
import {AddPost} from './Screens/AddPost';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Posts'} // default: Root
        >
          <Stack.Screen name="Root" component={Root} />
          <Stack.Screen name="PostDetails" component={PostDetails} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="AddPost" component={AddPost} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
