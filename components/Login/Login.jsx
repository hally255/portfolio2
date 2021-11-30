import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

export default function Login(props){

    const user = props.route.params.username;
    const pass = props.route.params.password;
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function checkLogin() {
        if (username == user && password == pass) {
            props.navigation.replace("Profile");
        }
    }

    return (
        <View style={styles.container}>
            <Text h4 style={styles.header}>Username</Text>
            <Input 
                onChangeText={setUsername}
                value={username}
            />
            <Text h4 style={styles.header}>Password</Text>
            <Input 
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <Button title="Login" buttonStyle={styles.button} onPress={() => {checkLogin()}} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        margin: 'auto',
        marginBottom: '250px',
        marginTop: '150px'
    },
    header: {
        textAlign: 'center',
        marginTop: '30px'
    },
    button: {
        width: '100%',
        marginTop: '50px'
    }
})