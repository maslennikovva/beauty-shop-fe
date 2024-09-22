import {StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, Button} from 'react-native';
import { useState } from "react";
import stylesSign from "../styles/StylesSign"

export default function SignIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {};

        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Submitted");
            setUsername("");
            setPassword("");
            setErrors({});
        }
    };

    return (
        <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={100} style={styles.container}>
            <View style = {styles.form}>
                <Image source={require('../assets/logo.png')} style = {styles.logo}/>
                <Text style={styles.text} > Логин </Text>
                <TextInput
                    style = {styles.input}
                    placeholder='Введите электронный адрес'
                    value={username}
                    onChangeText={setUsername} />
                { errors.username ? (
                    <Text style = {styles.errorText}>{errors.username} </Text>
                ) : null
                }
                <Text style={styles.text} > Пароль </Text>
                <TextInput
                    style = {styles.input}
                    placeholder='Введите номер телефона'
                    secureTextEntry={true}
                    value = {password}
                    onChangeText={setPassword} />
                { errors.password ? (
                    <Text style = {styles.errorText}>{errors.password} </Text>
                ) : null
                }
                <Pressable style={styles.button} onPress={() => {handleSubmit()}}>
                    <Text style = {styles.textforbutton}> Войти </Text>
                </Pressable>
            </View>
            <Pressable  color ={"black"}>
                <Text style = {styles.textforbutton2}> Регистрация </Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    form: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: '0',
            height: '2',
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black',
    },
    input:{
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        paddingHorizontal: 5,
        padding: 5,
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'black',
        height: 40,
        width: '100%',
    },
    textforbutton: {
        color: "white",
        fontSize: 16,
        paddingHorizontal: 125,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    logo:{
        width: 150,
        height: 150,
        padding: 10,
        alignSelf: 'center',
        marginBottom: 2,
    },
    errorText:{
        fontSize: 10,
        color: 'red',
        marginBottom: 10,
    },
    textforbutton2: {
        color: "grey",
        fontSize: 14,
        paddingHorizontal: 130,
        paddingVertical: 10,
        fontWeight: 'semibold'
    },
});
