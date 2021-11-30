import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';

export default function DeckItem(props) {

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>{props.name}</Card.Title>
                <Divider />
                <View style={styles.cardDetails}>
                    <Text style={styles.cardHead}>Attribute</Text>
                    <Text>{props.attribute}</Text>
                    <Text style={styles.cardHead}>Level</Text>
                    <Text>{props.level}</Text>
                    <Text style={styles.cardHead}>Monster Type</Text>
                    <Text>{props.monsterType}</Text>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '300px',
    },
    cardTitle: {
        fontSize: '18px',
    },
    cardHead: {
        fontSize: '16px',
        textDecorationLine: 'underline',
        marginTop: '10px'
    },
    cardDetails: {
        marginLeft: '15px',
        marginTop: '5px',
        marginBottom: '5px'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})