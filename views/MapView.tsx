import React, { useState, useEffect, useCallback } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import Location from 'expo-location';
import { useFocusEffect } from "@react-navigation/native";

import getLocation from "../utils/Location";

const MyMapView:React.FC = () => {
    const [location, setLocation] = useState<any>(null);
    
    useFocusEffect(
        useCallback(() => {
            const fetchLocation = async () => {
                const latlon = await getLocation();
                setLocation(latlon);
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: location? location.lat : 21.37,
                    longitude: location? location.lon : 69.420,
                    latitudeDelta: 2,
                    longitudeDelta: 2,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });

  export default MyMapView;