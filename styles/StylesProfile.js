import {StyleSheet} from "react-native";

const StylesWelcome = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingVertical:100,
        paddingHorizontal: 20,
    },
    text:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    profilephoto:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        opacity: 0.7,
    },
    image:{
        marginTop: 40,
        marginLeft: 10,
        marginBottom: 40,
        width: 88,
        height: 90,
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 13
    },
    telephone:{
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 2,
    },
});

export default StylesWelcome;