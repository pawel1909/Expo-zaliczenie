import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Events from '../interfaces/Events';
import { DateData } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParams } from '../interfaces/NavigatorParams';

interface DayDetailsProps {
  day: DateData | null;
  event: any;
  onClose: () => void;
}

const DayDetails: React.FC<DayDetailsProps> = ({ day, event, onClose }) => {
  if (!day) return null;
  const navigation = useNavigation<StackNavigationProp<NavigatorParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{day.dateString}</Text>
      {event ? (
        <>
          <Text style={styles.eventText}>{event.name}</Text>
          <Text style={styles.descriptionText}>{event.description}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => { /* funkcja dla eventu */ }}>
            <Text style={styles.buttonText}>Edytuj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Zamknij</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
        <Text style={styles.descriptionText}>Niczego tutaj nie ma, chcesz dodać?</Text>
        <TouchableOpacity style={styles.noEventButton} onPress={() => { navigation.navigate('AddEventForm') }}>
            <Text style={styles.buttonText}>Dodaj</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Zamknij</Text>
        </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventText: {
    fontSize: 16,
  },
  descriptionText: { 
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  noEventButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default DayDetails;
