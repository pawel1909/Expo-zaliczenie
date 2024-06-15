import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Events from "../interfaces/Events";

interface DayViewProps
{
    day: any;
    event: Events | any;
    onClose: () => void;
}

const DayView: React.FC<DayViewProps> = ({day, event, onClose}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{day.dateString}</Text>
            {
                event ? (
                    <View>
                        <Text style={styles.eventName}>Wydarzenie: {event.name}</Text>
                        <Text style={styles.eventDetails}>Opis: {event.description}</Text>
                        <Text style={styles.eventDetails}>Organizator: {event.manager}</Text>
                        <Text style={styles.eventDetails}>Czy to święto? {event.isHoliday ? 'Tak' : 'Nie'}</Text>
                        <Text style={styles.eventDetails}>Czy coroczne? {event.coroku ? 'Tak' : 'Nie'}</Text>
                        <Button title="Zamknij" onPress={onClose} />
                    </View>
                ) : (
                    <View>
                        <Text style={styles.noEvent}>Dziś nic się nie dzieje</Text>
                        <Button title="Dodaj" onPress={onClose} />
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventDetails: {
        fontSize: 16,
    },
    noEvent: {
        fontSize: 16,
        color: 'red',
    },
});

export default DayView;
