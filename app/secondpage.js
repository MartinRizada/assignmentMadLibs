import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function SecondPage() {
    const params = useLocalSearchParams();
    const { name, noun, event } = params;
    const today = new Date().toLocaleDateString();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hallPassContainer}>
                <Text style={styles.verticalText}>Hall Pass</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.titleText}>Mad Libs</Text>
                <Text style={styles.dateText}>DATE: {today}</Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.userText}>{name} </Text>
                    <Text>is too cool for </Text>
                    <Text style={styles.userText}>{noun} </Text>
                    <Text>class. Instead, they will be attending the </Text>
                    <Text style={styles.userText}>{event}</Text>
                    <Text>.</Text>
                </Text>
                <View style={styles.signatureBox}>
                    <Text style={styles.signatureLabel}>SIGNED:</Text>
                    {/* The rest of the box remains empty for a signature */}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
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

    // ... (rest of your styles)
});
