import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Pressable} from 'react-native';
import styles from '../styles/StylesProfile';

import {SCREEN_TITLES} from "./ScreenTitles";
import CartScreen from "./CartScreen";
import {NavigationContainer} from "@react-navigation/native";



const ProfileScreen = ({navigation}) => {

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Мой аккаунт</Text>
            <View style={styles.profilephoto}>
                <Image style={styles.image} source={require('../assets/profile_photo.png')}/>
                <View>
                    <Text style={styles.name}>Полина Масленникова</Text>
                    <Text style={styles.telephone}>+375 (33) 390-88-47</Text>
                </View>
            </View>
            <Image style = {styles.line} source={require('../assets/line.png')}/>
            <View style={styles.viewforpressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('Cart')}>
                    <Text style = {styles.textforpressable1}> Корзина </Text>
                    <Image style = {styles.iconforcart} source={require('../assets/cart_icon.png')}/>
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('Favourites')}>
                    <Text style = {styles.textforpressable2}> Избранное </Text>
                    <Image style = {styles.iconforfavourites} source={require('../assets/favourites.png')}/>
                </Pressable>
            </View>
            <Text style={styles.text2}>Мои данные</Text>
        </View>
    );
};

export default ProfileScreen;
