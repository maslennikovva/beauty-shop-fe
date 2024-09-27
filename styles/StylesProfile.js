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
        marginTop: 5,
    },
    text2:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    },
    profilephoto:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: '#F1ADAF',
        borderRadius: 30,
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
        marginLeft: 13,
    },
    telephone:{
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 2,
    },
    line: {
        marginTop: 30,
        width: 350,
        height: 2,
    },
    pressable: {
        backgroundColor: '#F1ADAF',
        opacity: 0.75,
        flexDirection: "row",

        justifyContent: "space-around",
        borderRadius: 15,
        marginTop: 20,
        width: 130,
        height: 30,
        alignContent: "center",

    },
    iconforcart:{
        width: 22,
        height: 24,
        marginTop:4,
    },
    iconforfavourites:{
        width: 26,
        height: 28,
        marginTop:4,
    },
    textforpressable1: {
        fontWeight: "bold",
        color: "black",
        marginLeft: 16,
        fontSize: 15,
        alignSelf: 'center',

    },
    textforpressable2: {
        fontWeight: "bold",
        color: "black",
        marginLeft: 6,
        fontSize: 15,
        alignSelf: 'center',

    },
    viewforpressables:{
        flexDirection: "row",
        justifyContent: "space-around",

    }

});

export default StylesWelcome;