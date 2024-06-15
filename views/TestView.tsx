import React, { useEffect, useState } from "react";
import { Text, View, Button, Platform } from "react-native";

import { API_KEY } from "../data/APIWeather";

import Events from "../interfaces/Events";

import ApiService from "../utils/ApiService";
import ApiWeather from "../utils/ApiWeather";

import { eventsURL } from "../data/ApiURL";
import WeatherData from "../interfaces/Weather";

import DateTimePicker from '@react-native-community/datetimepicker';

const apiService = new ApiService(eventsURL);
const apiWeather = new ApiWeather(API_KEY, 55, 22);


const TestView: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View>
            <View>
                <Button onPress={showDatepicker} title="Wybierz datę" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            {/* ... reszta formularza ... */}
        </View>
    );
}

export default TestView;