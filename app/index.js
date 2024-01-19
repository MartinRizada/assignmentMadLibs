
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet,Pressable, View, Text, TextInput, Button, SafeAreaView } from 'react-native';

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
        <SafeAreaView style={styles.main}>
        
            <View style={styles.title}>
                <Text style={styles.instructions}>How To Play Mad Libs Hall Pass</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNoun}
                    value={noun}
                    placeholder="Noun"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEvent}
                    value={event}
                    placeholder="An Event"
                />
                <Pressable onPress={handleNavigate}>
                <Link
                    style={styles.button1}
                    href={{
                        pathname: "/secondpage",
                        params: { name, noun, event }
                        
                    }} asChild>
                        <Text>Make My Hall Pass</Text>
                </Link>
                </Pressable>
                <View style={styles.button2}><Button title="Clear" color="#FF0000" onPress={handleClear} /></View>
            </View>
        </SafeAreaView>
    );
}

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
    container: {
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
        marginLeft: 18,
        backgroundColor: 'lightblue',
        borderRadius: 20,
        padding: 20,
    },
    button2: {
        marginTop: 25,
        width: 100,
    },

});



