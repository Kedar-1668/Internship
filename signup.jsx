import { StyleSheet, ImageBackground, StatusBar, Text, Image, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email Address'
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder='Confirm Password'
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Signup'
                    onPress={() => { }}
                />
                <Button
                    title='Go back to get started'
                    onPress={() => navigation.navigate('Welcome')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    button: {
        marginBottom: 50,
        
    },
});

export default Signup;
