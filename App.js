import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Course from './src/screens/course';
import Contact from './src/screens/contact';
import About from './src/screens/about';
import UserData from './src/screens/userData';
import CourseDetails from './src/screens/CourseDetails';

// importing fonts
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
  
} from '@expo-google-fonts/josefin-sans';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';


export default function App() {
  const Stack = createNativeStackNavigator();
  // it return object which contain all stack properties/features
  // use font like this
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  // check our fonts load or not
  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          {/* <Stack.Screen name='Home' component={Home} /> */}
          {/* what if i want to sent props to the home component */}
          <Stack.Screen 
          name='Home'
          options={{
            headerShown:false
          }}
          >
              {(props) => <Home {...props} title={'Application'} />}
          </Stack.Screen>
          
          {/* course screen */}
          <Stack.Screen name='Course' component={Course} options={{
            headerTitle:'Courses',
            headerTitleStyle:{
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitleAlign: 'center'
          }} />

          {/* contact screeen */}
          <Stack.Screen name='Contact' component={Contact} options={{
            headerTitle:'Contact us',
            headerTitleStyle:{
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitleAlign: 'center'
          }}  />

          {/* about screen */}
          <Stack.Screen name='About' component={About} options={{
            headerTitle:'About',
            headerTitleStyle:{
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitleAlign: 'center'
          }}  />

          {/* userdata screen */}
          <Stack.Screen name='Students' component={UserData} options={{
            headerTitle:'Students',
            headerTitleStyle:{
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitleAlign: 'center'
          }}  />

          {/* Course Details */} 
          <Stack.Screen name='CourseDetails' component={CourseDetails} options={{
            headerTitle:'CourseDetails',
            headerTitleStyle:{
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitleAlign: 'center'
          }}  />



      </Stack.Navigator>
    </NavigationContainer>
  );
}


