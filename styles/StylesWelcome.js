import {Dimensions, StyleSheet} from "react-native";


const StylesWelcome = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        flex: 1,
        height: '100%',
        opacity: 0.9
    },
    pressable1: {
        color: 'black',
        backgroundColor: 'pink',
        marginTop: 600,
        paddingVertical: 15,
        borderRadius: 15,
        width: '80%',
        alignSelf: "center"
    },
    pressable2: {
        color: 'black',
        backgroundColor: 'pink',
        marginTop: 10,
        paddingVertical: 15,
        borderRadius: 15,
        width: '80%',
        alignSelf: "center"
    },
    text: {
        fontSize: 18,
        marginBottom: 0,
        fontWeight: 'semibold',
        alignSelf: 'center',

    }
})

export default StylesWelcome;