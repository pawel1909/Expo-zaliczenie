import React, {useEffect, useState, useCallback } from "react";
import { View, Modal, Text } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { StyleSheet } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";



import DayView from "./DayView";
import DayDetails from "./DayDetails";

import MarkedDates from "../interfaces/MarkedDate";

import ApiService from "../utils/ApiService";
import { eventsURL } from "../data/ApiURL";

const apiService = new ApiService(eventsURL);

const CalendarView: React.FC = () => {
    const [markedDates, setMarkedDates] = useState<MarkedDates>({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState<DateData | null>(null);

    const closeDetails = () => setSelectedDay(null);

    useFocusEffect(
        useCallback(() =>{
            apiService.markedForCalendar().then(marked => {setMarkedDates(marked)})
        },[])
      );

    return (
        <View>
            <Calendar
                markedDates={markedDates}
                onDayPress={(day) => { setSelectedDay(day); setModalVisible(true); }}
            />
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                
                onRequestClose={() => setModalVisible(false)}
            >
               <View style={styles.modalBackground}>
               <DayView day={selectedDay} event={selectedDay && markedDates[selectedDay.dateString] ? markedDates[selectedDay.dateString].event : null} onClose={() => setModalVisible(false)} /> 
               </View>
            </Modal> */}
            <DayDetails 
                day={selectedDay} 
                event={selectedDay && markedDates[selectedDay.dateString] ? markedDates[selectedDay.dateString].event : null} 
                onClose={closeDetails}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Tutaj ustawiasz kolor tła modala
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CalendarView;