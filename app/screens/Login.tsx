// import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
// import React, { lazy } from 'react'
// import { useState } from 'react'
// import { FIREBASE_APP, FIREBASE_AUTH } from '../../firebaseConfig'
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

// const Login = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [loading, setLoading] = useState(false)
//     const auth = FIREBASE_AUTH;

//     const signIn = async () => {
//         setLoading(true)
//         try {
//             const response = await signInWithEmailAndPassword(auth, email, password)
//             console.log(response)
//         } catch (error: any) {
//             console.log(error)
//             alert('sign in failed ' + error.message)
//         }
//         finally {
//             setLoading(false)
//         }
//     }

//     const signUp = async () => {
//         setLoading(true)
//         try {
//             const response = await createUserWithEmailAndPassword(auth, email, password)
//             alert('check your email')
//             console.log(response)
//         } catch (error: any) {
//             console.log(error)
//             alert('registration failed' + error.message)
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <View style={Styles.container}>
//             <KeyboardAvoidingView behavior='padding'>
//                 <TextInput value={email} style={Styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
//                 <TextInput value={password} secureTextEntry={true} style={Styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
//                 {
//                     loading ? <ActivityIndicator size='large' color='#0000ff' /> :
//                         <>
//                             <Button title='Login' onPress={signIn} ></Button>
//                             <Button title='Create Account' onPress={signUp} ></Button>
//                         </>
//                 }
//             </KeyboardAvoidingView>

//         </View>
//     )
// }

// export default Login

// const Styles = StyleSheet.create(
//     {
//         container: {
//             marginHorizontal: 20,
//             flex: 1,
//             justifyContent: 'center'
//         }
//         ,
//         input: {
//             marginVertical: 4,
//             height: 50,
//             borderWidth: 1,
//             borderRadius: 4,
//             padding: 10,
//             backgroundColor: '#fff'
//         }
//     }
// )


import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Image } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../firebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error: any) {
            console.log(error)
            alert('Sign in failed: ' + error.message)
        }
        finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            alert('Check your email')
            console.log(response)
        } catch (error: any) {
            console.log(error)
            alert('Registration failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    const resetPassword = async () => {
        if (!email) {
            alert('Please enter your email address.')
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent. Check your email for instructions.')
        } catch (error: any) {
            console.log(error)
            alert('Password reset failed: ' + error.message)
        }
    }

    return (
        <View style={Styles.container}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={require('../../assets/adaptive-icon.png')} // Replace with the actual path to your image
                    style={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center' }} // Set the width and height as per your requirements
                />
                <Text style={{ fontSize: 37, paddingBottom: 20 }}>Welcome back.</Text>
            </View>
            <KeyboardAvoidingView behavior='padding'>

                <TextInput value={email} style={Styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput value={password} secureTextEntry={true} style={Styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
                {
                    loading ? <ActivityIndicator size='large' color='#0000ff' /> :
                        (
                            <>
                                <View style={{ marginVertical: 10, marginTop: 20 }}>
                                    <Button
                                        color='#121330' // Set button color to #121330
                                        title='Login'
                                        onPress={signIn}
                                        titleStyle={{ color: 'white' }} // Set text color to white
                                    />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Button
                                        color='#121330' // Set button color to #121330
                                        title='Create Account'
                                        onPress={signUp}
                                        titleStyle={{ color: 'white' }} // Set text color to white
                                    />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Button
                                        color='#121330' // Set button color to #121330
                                        title='Forgot Password'
                                        onPress={resetPassword}
                                        titleStyle={{ color: 'white' }} // Set text color to white
                                    />
                                </View>
                            </>
                        )
                }
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const Styles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 20,
            flex: 1,
            justifyContent: 'center',

        },
        input: {
            marginVertical: 4,
            height: 50,
            borderWidth: 1,
            borderRadius: 4,
            padding: 10,
            backgroundColor: '#fff'
        },
        button: {
            margin: 10
        }
    }
)
