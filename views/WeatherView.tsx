import React, {useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location';
import { useFocusEffect } from "@react-navigation/native";

import { API_KEY } from "../data/APIWeather";
import ApiWeather from "../utils/ApiWeather";
import WeatherData from "../interfaces/Weather";

const WeatherView: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Nie ma dostępu do lokalizacji');
                    return;
                }
    
                let location = await Location.getCurrentPositionAsync({});
                const lat: number = location.coords.latitude;
                const lon: number = location.coords.longitude;
                const apiWeather = new ApiWeather(API_KEY, lat, lon);
                const data = await apiWeather.getData();
                setWeatherData(data);
            };
            fetchData();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informacje o pogodzie w {weatherData?.name}</Text>
            {weatherData && (
                <View style={styles.dataContainer}>
                    <Text style={styles.dataText}>Temperatura: {weatherData.main.temp}K</Text>
                    <Text style={styles.dataText}>Wilgotność: {weatherData.main.humidity}%</Text>
                    <Text style={styles.dataText}>Ciśnienie: {weatherData.main.pressure} hPa</Text>
                    <Text style={styles.dataText}>Prędkość wiatru: {weatherData.wind.speed} m/s</Text>
                    <Text style={styles.dataText}>Kierunek wiatru: {weatherData.wind.deg}°</Text>
                    <Text style={styles.dataText}>Zachmurzenie: {weatherData.clouds.all}%</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    dataContainer: {
        margin: 10,
        padding: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
    },
    dataText: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 5,
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
});

export default WeatherView;
