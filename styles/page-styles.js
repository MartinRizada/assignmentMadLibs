import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    main: {
        flex: 1
    },
    title: {
        marginTop: 70,
    },
    instructions: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mainContainer: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 15,
    },
    button1: {
        marginTop: 25,
        marginBottom:20,
        width: 160,
        backgroundColor: 'brown',
        borderRadius: 20,
        padding: 20,
    },
    text1: {
        color: 'white',
    },
    button2: {
        borderRadius: 20,
        width: 100,
        width: 160,
        backgroundColor: 'gray',
        borderRadius: 20,
        padding: 20,
    },
    clearText: {
        color: 'white',
        textAlign: 'center',
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row', // Align children in a row
        backgroundColor: 'white',
    },
    hallPassContainer: {
        width: 150, 
        alignItems: 'center',
        justifyContent: 'center',

    },
    verticalText: {
        transform: [{ rotate: '-90deg' }],
        fontSize: 35,
        fontWeight: 'bold',
        color: 'gold',
    },
    contentContainer: {
        flex: 1, // Take up the remaining space
        padding: 10,
        marginBottom: 100,
        justifyContent: 'center', // Center content vertically
    },

    titleText: {
        marginTop: 50,
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 4,
        color: "brown",
    },
    dateText: {
        fontSize: 24,
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 30,
        fontWeight: 'normal',
        lineHeight: 50,
        marginTop: 30,
    },
    userText: {
        fontWeight: 'bold',
    },
    signatureBox: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        marginTop: 70, 
    },
    signatureLabel: {
        position: 'absolute',
        top: 5, 
        left: 10,
        backgroundColor: 'white',
        fontSize: 16,
    },
});

export default styles;