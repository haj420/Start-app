// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

// Color palette based on START Advertising
const theme = {
  primary: '#003366',    // Deep blue from their branding
  secondary: '#FF6B00',  // Orange accent
  background: '#FFFFFF', 
  text: '#333333',
  lightGray: '#F5F5F5'
};

// Basic navigation structure for MVP
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Base styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  header: {
    backgroundColor: theme.primary,
    padding: 20,
  },
  title: {
    color: theme.background,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: theme.secondary,
    padding: 15,
    borderRadius: 5,
  }
});