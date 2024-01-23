import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function SecondPage() {
    const params = useLocalSearchParams();
    const { name, noun, event } = params;
    const today = new Date().toLocaleDateString();

    return (
        <SafeAreaView style={Styles.subContainer}>
            <View style={Styles.hallPassContainer}>
                <Text style={Styles.verticalText}>Hall Pass</Text>
            </View>
            <View style={Styles.contentContainer}>
                <Text style={Styles.titleText}>Mad Libs</Text>
                <Text style={Styles.dateText}>DATE: {today}</Text>
                <Text style={Styles.paragraph}>
                    <Text style={Styles.userText}>{name} </Text>
                    <Text>is too cool for </Text>
                    <Text style={Styles.userText}>{noun} </Text>
                    <Text>class. Instead, they will be attending the </Text>
                    <Text style={Styles.userText}>{event}</Text>
                    <Text>.</Text>
                </Text>
                <View style={Styles.signatureBox}>
                    <Text style={Styles.signatureLabel}>SIGNED:</Text>
                    {/* The rest of the box remains empty for a signature */}
                </View>
            </View>
        </SafeAreaView>
    );
}
