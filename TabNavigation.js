import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CartScreen from "./screens/CartScreen";
import FavouriteScreen from "./screens/FavoritesScreen";
import MainScreen from "./screens/MainScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
                <Tab.Screen name = "Favourites" component={FavouriteScreen} options={{ headerShown: false }}/>
                <Tab.Screen name = "Main" component={MainScreen} options={{ headerShown: false }} />
                <Tab.Screen name = "Search" component={SearchScreen} options={{ headerShown: false }}/>
                <Tab.Screen name = "Profile" component={ProfileScreen} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}