import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';
import DeckItem from './DeckItem';

export default function Deck(props) {

    const user = {
        username: props.route.params.username,
    }

    const example = [
        {
            name: 'Blue Eyes White Dragon',
            attribute: 'Light',
            level: 8,
            monsterType: 'Dragon',
            index: 1
        },
        {
            name: 'Dark Magician',
            attribute: 'Dark',
            level: 7,
            monsterType: 'Spellcaster',
            index: 2
        }
    ];

    const data = props.route.params.deck;

    return (
        <View>
            <Text h2 style={styles.header}>{user.username}'s Deck List</Text>
            <Button title='Add to Deck List' onPress={() => {
                props.navigation.navigate('Add to Deck List')
            }} />
            <View style={styles.deck}>
                <FlatList
                    data={example}
                    renderItem={({ item, index }) => {
                        return (
                            <DeckItem
                                name={item.name}
                                attribute={item.attribute}
                                level={item.level}
                                monsterType={item.monsterType}
                                index={item.index}
                                key={index}
                            />
                        )
                    }}
                />
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <DeckItem
                                name={item.name}
                                attribute={item.attribute}
                                level={item.level}
                                monsterType={item.monsterType}
                                index={item.index}
                                key={index}
                            />
                        )
                    }}
                />
            </View>
            <Button title='Profile' onPress={() => {
                props.navigation.navigate('Profile')
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginBottom: '15px'
    },
    deck: {
        marginBottom: '100px'
    }
})