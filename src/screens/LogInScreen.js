import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import jsonServer from '../api/jsonServer';

const getDrivers = async () => {
    const drivers  = await jsonServer.get('/drivers');
    return drivers.data;
};

const onSubmit = ( gmail, password, drivers, accountId, navigation ) => {
    for(const i in drivers._z){
        if(drivers._z[i].gmail == gmail && drivers._z[i].password == password){
            accountId = i;
            navigation.navigate('Main');
        }
    }
}

// {"_A": null, "_x": 0, "_y": 1, "_z": 
//     [
//         {"car-type": "tenti", "gmail": "blabla@gmail.com", "id": 1, "name": "gocha", "number": "597243671", "password": "fy78yb22", "rating": [Object], "registration-date": "16/1/2023"}, 
//         {"car-type": "macivari", "gmail": "blabla@gmail.com", "id": 2, "name": "zaza", "number": "594723672", "password": "lmk8hcn", "rating": [Object], "registration-date": "17/1/2023"}, 
//         {"car-type": "orive", "gmail": "blabla@gmail.com", "id": 3, "name": "zviadi", "number": "597834511", "password": "9i9fn1uh", "rating": [Object], "registration-date": "18/1/2023"}
//     ]
// }

const LogInScreen = ({ navigation }) => {
    var drivers = [];
    var accountId =[];
    const [ gmail, setGmail ] = useState('');
    const [ password, setPassword ] = useState('');

    useEffect(() => {
        drivers = getDrivers();
    }, []);


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
                title="Save Blog Post" 
                onPress={() => onSubmit(gmail, password, drivers, accountId, navigation)}
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