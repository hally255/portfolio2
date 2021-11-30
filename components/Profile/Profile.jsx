import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

export default function Profile(props) {

    const user = {
        username: props.route.params.username,
        password: props.route.params.password
    }

    return (
        <View style={styles.container}>
            <Text h1 style={styles.header}>Profile Page</Text>
            <Text h3 style={styles.header}>Welcome {user.username}</Text>
            <View>
                <Button title='Deck List' onPress={() => {
                    props.navigation.navigate('Deck List')
                }} />
                <Button title='Log Out' onPress={() => {
                    props.navigation.navigate('Login', {username: username, password: password})
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        margin: 'auto',
        marginBottom: '250px',
        marginTop: '150px'
    },
    header: {
        textAlign: 'center',
        marginBottom: '50px'
    }
})