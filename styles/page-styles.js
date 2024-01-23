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
        borderWidth: 1,
        padding: 10,
    },
    button1: {
        marginTop: 25,
        width: 160,
        backgroundColor: 'brown',
        borderRadius: 20,
        padding: 20,
    },
    text1: {
        color: 'white',
    },
    button2: {
        marginTop: 25,
        width: 100,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row', // Align children in a row
        backgroundColor: 'white',
    },
    hallPassContainer: {
        width: 150, // Adjust the width as needed
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f0f0f0', // Different background color for visual separation
    },
    verticalText: {
        transform: [{ rotate: '-90deg' }],
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flex: 1, // Take up the remaining space
        padding: 10,
        marginTop: -300,
        justifyContent: 'center', // Center content vertically
    },

    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    dateText: {
        fontSize: 24,
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 30,
        fontWeight: 'normal',
        lineHeight: 40,
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
        marginTop: 20,  // Make sure the signature box spans the full width
    },
    signatureLabel: {
        position: 'absolute',
        top: 5, // Adjust as needed to position the label above the box
        left: 10, // Adjust as needed to position the label inside the box
        backgroundColor: 'white',
        fontSize: 16,
    },
});

export default styles;