import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default function AddDeckCard(props) {

    const [name, setName] = useState('');
    const [attribute, setAttribute] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState('');
    const [id, setID] = useState(0);
    const [deck, setDeck] = useState([]);
    //sets the whole deck

    return (
        <View>
            <View style={styles.container}>
                <Input placeholder="Monster Name" onChangeText={setName} />
                <Input placeholder="Attribute" onChangeText={setAttribute} />
                <Input placeholder="Level" onChangeText={setLevel} />
                <Input placeholder="Type" onChangeText={setType} />
                <Button title="Add Monster" onPress={() => {
                    setID(id + 1);
                    let tempArray = {
                        name: name,
                        attribute: attribute,
                        level: level,
                        monsterType: type,
                        index: id
                    };
                    setDeck(deck.concat(tempArray));
                    console.log(deck);
                }} />
            </View>

            <Button title='Full Deck List' onPress={() => {
                props.navigation.navigate('Deck List', { deck })
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        margin: 'auto',
        marginBottom: '250px',
        marginTop: '150px'
    }
})