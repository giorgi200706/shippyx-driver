import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import jsonServer from '../api/jsonServer';

const onSubmit = async ( gmail, password, setListnum, navigation) => {
    const drivers1  = await jsonServer.get('/drivers');
    const drivers = drivers1.data;
    for(const i in drivers){
        if(drivers[i].gmail == gmail && drivers[i].password == password){
            setListnum(i);
            console.log(gmail, password)
            navigation.navigate('List');
        }
    }
}

const LogInScreen = ({ navigation }) => {
    const [ gmail, setGmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ listnum, setListnum ] = useState('');

    return (
        <View>
            <Text>გამარჯობა</Text>
            <Text>შედით ექაუნთზე:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false} 
                value={gmail}
                onChangeText={(newValue) => setGmail(newValue)}
            />
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}   
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Button 
                title="log in" 
                onPress={() => onSubmit(gmail, password, setListnum, navigation)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default LogInScreen;