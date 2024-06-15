import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Switch, Text, Alert } from 'react-native';
import { editEventURL } from '../data/ApiURL';

const EditEventForm = ({ eventId }: { eventId: string }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isHoliday, setIsHoliday] = useState(false);
    const [coroku, setCoroku] = useState(false);

    useEffect(() => {
        // Pobierz dane wydarzenia, które chcesz edytować
        fetch(`${editEventURL}/${eventId}`)
            .then(response => response.json())
            .then(data => {
                setName(data.name);
                setDate(data.date);
                setDescription(data.description);
                setIsHoliday(data.isHoliday);
                setCoroku(data.coroku);
            })
            .catch((error) => {
                Alert.alert(`Błąd: ${error}`);
            });
    }, [eventId]);

    const handleSubmit = () => {
        fetch(`${editEventURL}/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                date: date,
                description: description,
                isHoliday: isHoliday,
                coroku: coroku,
            }),
        })
        .then(response => response.json())
        .then(data => {
            Alert.alert('Wydarzenie zaktualizowane!', `ID wydarzenia: ${data.id}`);
        })
        .catch((error) => {
            Alert.alert(`Błąd: ${error}`);
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
            <Button title="Aktualizuj" onPress={handleSubmit} />
        </View>
    );
};

export default EditEventForm;