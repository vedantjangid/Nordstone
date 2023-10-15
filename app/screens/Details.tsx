import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig';

const Details = () => {
    return (
        <>
            <View style={{ alignSelf: 'flex-end' }}>
                <Button onPress={() => FIREBASE_AUTH.signOut()} title='SignOut' />
            </View>
            <View style={styles.container}>

                <Text style={styles.title}>All That I Could Make in 3 Days</Text>
                <Text style={styles.description}>
                    I was a bit busy, and I didn't have much time to invest in it, but here's what I created in just three days.
                </Text>
            </View>
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
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Details;
