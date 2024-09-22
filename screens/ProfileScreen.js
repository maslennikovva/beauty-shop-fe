import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Pressable} from 'react-native';
import styles from '../styles/StylesProfile';



const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Мой аккаунт</Text>
            <View style={styles.profilephoto}>
                <Image style={styles.image} source={require('../assets/profile_photo.png')}/>
                <View>
                    <Text style={styles.name}>Полина Масленникова</Text>
                    <Text style={styles.telephone}>+375 (33) 390-88-47</Text>
                </View>
                <Text style={styles.name}>Мои данные</Text>
            </View>
        </View>
    );
};

export default ProfileScreen;
