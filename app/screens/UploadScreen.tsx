import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ScrollView } from 'react-native';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { FIREBASE_AUTH } from '../../firebaseConfig';

const UploadScreen = () => {
    const [text, setText] = useState('');
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        const textsRef = collection(db, 'texts');

        const unsubscribe = onSnapshot(textsRef, (querySnapshot) => {
            const updatedTexts = [];
            querySnapshot.forEach((doc) => {
                updatedTexts.push({
                    id: doc.id,
                    text: doc.data().text,
                });
            });
            setTexts(updatedTexts);
        });

        return () => unsubscribe();
    }, []);

    const addTextToFirestore = async () => {
        try {
            await addDoc(collection(db, 'texts'), {
                text,
            });
            setText('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <>
            <View style={{ alignSelf: 'flex-end' }}>
                <Button onPress={() => FIREBASE_AUTH.signOut()} title='SignOut' />
            </View>
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.title}>Upload Text</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter text"
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                />
                <Button title="Send" onPress={addTextToFirestore} />
                <Text style={{
                    fontSize: 30, marginTop: 20,
                    alignContent: 'flex-start'
                }}>Text from firestore:</Text>
                <FlatList
                    data={texts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Text style={styles.textItem}>{item.text}</Text>
                    )}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,


    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    textItem: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10
    },
});

export default UploadScreen;
