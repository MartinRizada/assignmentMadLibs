
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {Alert,Pressable, View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import Styles from '../styles/page-styles';


const strings = {
    instructionsString: "Let's make you a unique Hall Pass! \n\n To begin, please fill in the blanks with a Name, a Noun, and an Event.",
    nameString: "Name (e.g., Darwin)",
    nounString: "Noun (e.g., Science)",
    eventString: "An Event e.g., (Chess Club)"
};

export default function firstPage() { 
    const [name, setName] = useState('');
    const [noun, setNoun] = useState('');
    const [event, setEvent] = useState('');

    const handleClear = () => {
        setName('');
        setNoun('');
        setEvent('');
    };

    return (
        <SafeAreaView style={Styles.main}>
        
            <View style={Styles.title}>
                <Text style={Styles.instructions}>{strings.instructionsString}</Text>
            </View>
            <View style={Styles.mainContainer}>
                <TextInput
                    style={Styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder={strings.nameString}
                    placeholderTextColor="#c7c7cd" 
                    selectionColor ="brown"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setNoun}
                    value={noun}
                    placeholder={strings.nounString}
                    placeholderTextColor="#c7c7cd" 
                    selectionColor="brown"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setEvent}
                    value={event}
                    placeholder={strings.eventString}
                    placeholderTextColor="#c7c7cd" 
                    selectionColor="brown"
                />
                <Pressable>
                <Link
                    style={Styles.button1}
                    href={{
                        pathname: "/secondpage",
                        params: { name, noun, event }
                        
                    }} asChild>
                        <Text style={Styles.text1 }>Make My Hall Pass</Text>
                </Link>
                </Pressable>
                <View ><Pressable style={Styles.button2} title="Clear" onPress={handleClear} >
                    <Text style={Styles.clearText}>Clear</Text>
                </Pressable></View>
            </View>
        </SafeAreaView>
    );
}
