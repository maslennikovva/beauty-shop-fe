import { Image, Text, View, TextInput,  Pressable} from "react-native";
import * as React from "react"
import BouncyCheckboxGroup, {CheckboxButton} from "react-native-bouncy-checkbox-group";
import {useState} from "react";
import stylesSign from "../styles/StylesSign"


    const SignUp = ({navigation}) => {

        const [username, setUsername] = useState("")
        const [password1, setPassword1] = useState("")
        const [password2, setPassword2] = useState("")
        const [name, setName] = useState("")
        const [surname, setSurname] = useState("")
        const [lastName, setLastName] = useState("")
        const [errors, setErrors] = useState({})

        const validateForm = () => {
            let errors = {};

            if (!username) errors.username = "Username is required";
            if (!password1) errors.password1 = "Password is required";
            if (!password2) errors.password2 = "Password is required";
            if (!name) errors.name = "Name is required";
            if (!surname) errors.surname = "Surname is required";


            setErrors(errors);
            return Object.keys(errors).length === 0;
        };


        const handleSubmit = () => {
            if (validateForm()) {
                console.log("Submitted");
                setUsername("");
                setPassword1("");
                setPassword2("");
                setSurname("")
                setName("")
                setLastName("")
                setErrors({});
            }
        };

        return (
            <View style={stylesSign.container}>
                <View style={stylesSign.form}>
                    <Image source={require('../assets/logo.png')} style={stylesSign.logo}/>
                    <Text style={stylesSign.text}> Личная информация </Text>
                    <TextInput
                        style={stylesSign.input}
                        placeholder='Введите имя*'
                        value={name}
                        onChangeText={setName}
                    />
                    { errors.name ? (
                        <Text style = {stylesSign.errorText}>{errors.name} </Text>
                    ) : null
                    }
                    <TextInput
                        style={stylesSign.input}
                        placeholder='Введите фамилию*'
                        value={surname}
                        onChangeText={setSurname}/>
                    { errors.surname ? (
                        <Text style = {stylesSign.errorText}>{errors.surname} </Text>
                    ) : null
                    }
                    <TextInput
                        style={stylesSign.input}
                        placeholder='Введите отчество'
                        value = {lastName}/>
                    <BouncyCheckboxGroup
                        data={verticalStaticData}
                        style={{flexDirection: "row", justifyContent: "space-between"}}
                        onChange={(selectedItem: CheckboxButton) => {
                            console.log("SelectedItem: ", JSON.stringify(selectedItem));
                        }}
                    />
                    <TextInput
                        style={stylesSign.input2}
                        placeholder='Введите электронный адрес'
                        value = {username}
                        onChangeText={setUsername}/>
                    { errors.username ? (
                        <Text style = {stylesSign.errorText}>{errors.username} </Text>
                    ) : null
                    }
                    <TextInput
                        style={stylesSign.input}
                        placeholder='Введите пароль'
                        value={password1}
                        onChangeText={setPassword1}/>
                    { errors.password1 ? (
                        <Text style = {stylesSign.errorText}>{errors.password1} </Text>
                    ) : null
                    }
                    <TextInput
                        style={stylesSign.input}
                        placeholder='Повторите пароль'
                        value = {password2}
                        onChangeText={setPassword2}/>
                    { errors.password2 ? (
                        <Text style = {stylesSign.errorText}>{errors.password2} </Text>
                    ) : null
                    }
                    <Pressable style={stylesSign.button} onPress={() => handleSubmit()}>
                        <Text style={stylesSign.textForButton}>Зарегистрироваться</Text>
                    </Pressable>
                </View>

            </View>
        );
    };

const _iconStyle = (borderColor: string) => ({
    height: 15,
    width: 15,
    borderRadius: 20,
    borderColor: borderColor,
});

const verticalStaticData: CheckboxButton[] = [
    {
        id: 0,
        textComponent: <Text> мужчина </Text>,
        fillColor: 'black',
        unFillColor: 'black',
        iconStyle: _iconStyle('#fbbfbb'),
        textStyle: {textDecorationLine: "none", color : "black",},
        style: {flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", },
        iconImageStyle: stylesSign.iconImageStyle,
    },
    {
        id: 1,
        textComponent: <Text> женщина </Text>,
        fillColor: 'black',
        unFillColor: 'black',
        iconStyle: _iconStyle('#afb5f5'),
        textStyle: {textDecorationLine: "none",},
        style: stylesSign.verticalStyle,
        iconImageStyle: stylesSign.iconImageStyle,
    },
    {
        id: 2,
        textComponent: <Text> не указан </Text>,
        fillColor: 'black',
        unFillColor: 'black',
        iconStyle: _iconStyle('#cab6f4'),
        textStyle: {textDecorationLine: "none",},
        style: stylesSign.verticalStyle,
        iconImageStyle: stylesSign.iconImageStyle,
    },
];

export default SignUp;

