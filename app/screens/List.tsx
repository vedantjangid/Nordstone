import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import Details from './Details'


interface RouterProps {
    navigation: NavigationProp<any | any>
}
const List = ({ navigation }: RouterProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => navigation.navigate('Details')} title='Details' />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title='SignOut' />
        </View>
    )
}

export default List