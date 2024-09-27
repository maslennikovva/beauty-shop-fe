import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "./screens/SignInScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import {SCREEN_TITLES} from "./screens/ScreenTitles";
import SignUp from "./screens/SignUpScreen";
import TabNavigation from "./TabNavigation";
import CartScreen from "./screens/CartScreen";


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={SCREEN_TITLES.WELCOME}
                    component={WelcomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_TITLES.SIGN_IN}
                    component={SignIn}

                />
                <Stack.Screen
                    name={SCREEN_TITLES.SIGN_UP}
                    component={SignUp}
                />
                <Stack.Screen
                    name={SCREEN_TITLES.TAB_NAVIGATION}
                    component={TabNavigation}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>


    );
};

export default App;