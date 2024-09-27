import {Button, Image, ImageBackground, View, StyleSheet, Dimensions, Pressable, Text} from "react-native";
import * as React from "react";
import {SCREEN_TITLES} from "./ScreenTitles";
import styles from "../styles/StylesWelcome";

const HomeScreen = ({navigation}) => {

    return (
        <ImageBackground style = {styles.container} source={require('../assets/backround.jpg')}>
            <View >
                <Pressable style={styles.pressable1}
                           onPress={() =>
                               navigation.navigate(SCREEN_TITLES.SIGN_IN)
                }>
                    <Text style={styles.text}> Войти </Text>
                </Pressable>
                <Pressable style={styles.pressable2}
                           onPress={() =>
                               navigation.navigate(SCREEN_TITLES.SIGN_UP)
                }>
                    <Text style={styles.text}> Зарегистрироваться </Text>
                </Pressable>
                <Pressable style={styles.pressable2}
                           onPress={() =>
                               navigation.navigate(SCREEN_TITLES.TAB_NAVIGATION)
                           }>
                    <Text style={styles.text}> Навигация </Text>
                </Pressable>
             </View>
        </ImageBackground>

    );
};


export default HomeScreen;