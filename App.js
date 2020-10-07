import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginPage from './src/pages/Login'

// Controle de navegções
const AppNavigator = createStackNavigator({

  'Main': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem-Vindos!'
    }
  }

}, {/*STYLE*/
  defaultNavigationOptions:{
    title: 'Séries',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#6c22f7',
      borderBottomWidth: 5,
      borderBottomColor: '#c5c5c5',
    },
    headerTitleStyle:{
      color: '#fff',
      fontSize: 30,
      textAlign: "center"
    }
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;