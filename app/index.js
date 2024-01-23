
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import Styles from '../styles/page-styles';

export default function firstPage() { 
    const [name, setName] = useState('');
    const [noun, setNoun] = useState('');
    const [event, setEvent] = useState('');

  
    const handleNavigate = () => {
        if (!name || !noun || !event) {
            Alert.alert("All fields are required", "Please fill out all the fields to create your Hall Pass.");
            return;
        }
        // The navigation logic will be handled by the Link component since all fields are filled.
    };
    const handleClear = () => {
        setName('');
        setNoun('');
        setEvent('');
    };

    return (
        <SafeAreaView style={Styles.main}>
        
            <View style={Styles.title}>
                <Text style={Styles.instructions}>How To Play Mad Libs Hall Pass</Text>
            </View>
            <View style={Styles.mainContainer}>
                <TextInput
                    style={Styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setNoun}
                    value={noun}
                    placeholder="Noun"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setEvent}
                    value={event}
                    placeholder="An Event"
                />
                <Pressable onPress={handleNavigate}>
                <Link
                    style={Styles.button1}
                    href={{
                        pathname: "/secondpage",
                        params: { name, noun, event }
                        
                    }} asChild>
                        <Text style={Styles.text1 }>Make My Hall Pass</Text>
                </Link>
                </Pressable>
                <View style={Styles.button2}><Button title="Clear" color="#FF0000" onPress={handleClear} /></View>
            </View>
        </SafeAreaView>
    );
}





