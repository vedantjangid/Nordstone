// import { View, Text, Button } from 'react-native'
// import React, { useEffect } from 'react'
// import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../firebaseConfig'

// import { useState, useRef } from 'react';
// import { Platform } from 'react-native';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: false,
//         shouldSetBadge: false,
//     }),
// });


// // Import the required libraries


// // Function to request notification permission



// interface RouterProps {
//     navigation: NavigationProp<any | any>
// }
// const List = ({ navigation }: RouterProps) => {

//     const [expoPushToken, setExpoPushToken] = useState('');
//     const [notification, setNotification] = useState(false);
//     const notificationListener = useRef();
//     const responseListener = useRef();

//     useEffect(() => {
//         registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//         notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//             setNotification(notification);
//         });

//         responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//             console.log(response);
//         });

//         return () => {
//             Notifications.removeNotificationSubscription(notificationListener.current);
//             Notifications.removeNotificationSubscription(responseListener.current);
//         };
//     }, []);


//     return (
//         <>
//             <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
//                 <Button onPress={() => FIREBASE_AUTH.signOut()} title='SignOut' />
//             </View>
//             <View style={{ flex: 1, alignItems: 'center', }}><Button
//                 title="Notify"
//                 onPress={async () => {
//                     await schedulePushNotification();
//                 }}
//             /></View>

//             {/* <View
//                 style={{
//                     flex: 1,
//                     alignItems: 'center',
//                     justifyContent: 'space-around',
//                 }}>
//                 <Text>Your expo push token: {expoPushToken}</Text>
//                 <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                     <Text>Title: {notification && notification.request.content.title} </Text>
//                     <Text>Body: {notification && notification.request.content.body}</Text>
//                     <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
//                 </View>

//             </View> */}
//         </>
//     )
// }


// async function schedulePushNotification() {
//     await Notifications.scheduleNotificationAsync({
//         content: {
//             title: "You've got mail! 📬",
//             body: 'Here is the notification body',
//             data: { data: 'goes here' },
//         },
//         trigger: { seconds: 0.1 },
//     });
// }

// async function registerForPushNotificationsAsync() {
//     let token;

//     if (Platform.OS === 'android') {
//         await Notifications.setNotificationChannelAsync('default', {
//             name: 'default',
//             importance: Notifications.AndroidImportance.MAX,
//             vibrationPattern: [0, 250, 250, 250],
//             lightColor: '#FF231F7C',
//         });
//     }

//     if (Device.isDevice) {
//         const { status: existingStatus } = await Notifications.getPermissionsAsync();
//         let finalStatus = existingStatus;
//         if (existingStatus !== 'granted') {
//             const { status } = await Notifications.requestPermissionsAsync();
//             finalStatus = status;
//         }
//         if (finalStatus !== 'granted') {
//             alert('Failed to get push token for push notification!');
//             return;
//         }
//         token = (await Notifications.getExpoPushTokenAsync()).data;
//         console.log(token);
//     } else {
//         alert('Must use physical device for Push Notifications');
//     }

//     return token;
// }

// export default List


import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const List = () => {
    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        }, 1000); // Close the alert after 1 second (1000 milliseconds)
    };

    return (
        <>
            <View style={{ alignSelf: 'flex-end' }}>
                <Button onPress={() => FIREBASE_AUTH.signOut()} title='SignOut' />
            </View>
            <View style={styles.container}>
                <Button title="Notify" onPress={showAlert} />
                {alertVisible && (
                    <View style={styles.alert}>
                        <Text style={styles.alertText}>This is an alert</Text>
                    </View>
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alert: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        padding: 10,
        borderRadius: 5,
    },
    alertText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default List;
