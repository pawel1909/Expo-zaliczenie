import Location from 'expo-location';

const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return {
            lat: 21.37,
            lon: 69.420
        };
    }

    let location = await Location.getCurrentPositionAsync({});
    return {
        lat: location.coords.latitude,
        lon: location.coords.longitude
    };
};

export default getLocation;