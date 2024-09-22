import {StyleSheet} from "react-native";

const stylesSign = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'pink',
    },
    form:{
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
    logo:{
        width: 150,
        height: 150,
        padding: 10,
        alignSelf: 'center',
        marginBottom: 2,
    },
    text: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black',
    },
    input2:{
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        paddingHorizontal: 5,
        marginTop: 10,
    },
    input:{
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'black',
        height: 40,
        width: '100%',
    },
    textForButton: {
        color: "white",
        fontSize: 16,
        alignSelf: 'center',
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    textStyle: () => ({
        fontSize: 16,
        color: "#757575",
        textDecorationLine: "none",
    }),
    errorText:{
        fontSize: 10,
        color: 'red',
        marginBottom: 10,
        marginTop: 0.1,
    },

    textforbutton: {
        color: "white",
        fontSize: 16,
        paddingHorizontal: 125,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    
    textforbutton2: {
        color: "grey",
        fontSize: 14,
        paddingHorizontal: 130,
        paddingVertical: 10,
        fontWeight: 'semibold'
    },
});

export default stylesSign;