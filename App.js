import splash from "./screen/splash";
import home from "./screen/home";
import login from "./screen/login";
import register from "./screen/register";
import history from "./screen/history";


import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={splash}
          options={{ headerShown : false }}
        />
         <Stack.Screen
          name="home"
          component={home}
          options={{headerShown : false}}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{headerShown : false}}
        />
        <Stack.Screen
          name="register"
          component={register}
          options={{headerShown : false}}
        />
        <Stack.Screen
          name="history"
          component={history}
          options={{headerShown : false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}