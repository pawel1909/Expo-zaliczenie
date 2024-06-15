import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, Switch, Text, Alert } from 'react-native';
import { addEventURL } from '../data/ApiURL';
import { useFocusEffect } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const AddEventForm = () => {
    const route = useRoute();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isHoliday, setIsHoliday] = useState(false);
    const [coroku, setCoroku] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setName('');
            setDate('');
            setDescription('');
            setIsHoliday(false);
            setCoroku(false);
        }, [])
    );

    const handleSubmit = () => {
        fetch(`${addEventURL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                date: date,
                description: description,
                isHoliday: isHoliday,
                coroku: coroku,
                manager: 'pi'
            }),
        })
        .then(response => response.json())
        .then(data => {
            Alert.alert('Wydarzenie dodane!', `ID wydarzenia: ${data.id}`);
            setName('');
            setDate('');
            setDescription('');
            setIsHoliday(false);
            setCoroku(false);
        })
        .catch((error) => {
            Alert.alert(`${error}`);
        });
    };

    return (
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Nazwa"
            />
            <TextInput
                value={date}
                onChangeText={setDate}
                placeholder="Data (YYYY-MM-DD)"
            />
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Opis"
            />
            <View>
                <Text>Święto</Text>
                <Switch
                    value={isHoliday}
                    onValueChange={setIsHoliday}
                />
            </View>
            <View>
                <Text>Coroku</Text>
                <Switch
                    value={coroku}
                    onValueChange={setCoroku}
                />
            </View>
            <Button title="Dodaj" onPress={handleSubmit} />
        </View>
    );
};

export default AddEventForm;
