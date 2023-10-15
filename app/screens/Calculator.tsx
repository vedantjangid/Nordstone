import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CalculatorScreen = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operation, setOperation] = useState('addition');
    const [result, setResult] = useState('');

    const calculateResult = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Please enter valid numbers');
            return;
        }

        let calculatedResult;

        switch (operation) {
            case 'addition':
                calculatedResult = num1 + num2;
                break;
            case 'subtraction':
                calculatedResult = num1 - num2;
                break;
            case 'multiplication':
                calculatedResult = num1 * num2;
                break;
            default:
                setResult('Invalid operation');
                return;
        }

        setResult(`Result: ${calculatedResult}`);
    };

    return (
        <View style={styles.container}>
            <Text>Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter number 1"
                onChangeText={(text) => setNumber1(text)}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter number 2"
                onChangeText={(text) => setNumber2(text)}
                keyboardType="numeric"
            />
            <RNPickerSelect
                onValueChange={(itemValue) => setOperation(itemValue)}
                items={[
                    { label: 'Addition', value: 'addition' },
                    { label: 'Subtraction', value: 'subtraction' },
                    { label: 'Multiplication', value: 'multiplication' },
                ]}
                style={pickerSelectStyles}
                value={operation}
            />
            <Button title="Calculate" onPress={calculateResult} />
            <Text style={styles.result}>{result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        padding: 5,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
    },
});

export default CalculatorScreen;
