interface Weather {
    id: number; // Unikalny identyfikator warunków pogodowych
    main: string; // Grupa parametrów pogodowych (deszcz, śnieg, ekstremalne itp.)
    description: string; // Opis warunków pogodowych
    icon: string; // Identyfikator ikony pogodowej
}

interface Main {
    temp: number; // Temperatura (w kelwinach)
    feels_like: number; // Odczuwalna temperatura (w kelwinach)
    temp_min: number; // Minimalna temperatura (w kelwinach)
    temp_max: number; // Maksymalna temperatura (w kelwinach)
    pressure: number; // Ciśnienie atmosferyczne (w hPa)
    humidity: number; // Wilgotność (%)
}

interface Wind {
    speed: number; // Prędkość wiatru (w m/s)
    deg: number; // Kierunek wiatru (w stopniach)
}

interface Clouds {
    all: number; // Zachmurzenie (%)
}

interface Sys {
    type: number; // Typ stacji pogodowej
    id: number; // Identyfikator stacji pogodowej
    country: string; // Kod kraju (np. PL dla Polski)
    sunrise: number; // Czas wschodu słońca (UNIX timestamp)
    sunset: number; // Czas zachodu słońca (UNIX timestamp)
}

interface WeatherData {
    coord: {
        lon: number; // Długość geograficzna
        lat: number; // Szerokość geograficzna
    };
    weather: Weather[]; // Tablica z warunkami pogodowymi
    base: string; // Podstawa, na której oparte są dane pogodowe
    main: Main; // Główne parametry pogodowe
    visibility: number; // Widoczność (w metrach)
    wind: Wind; // Dane o wietrze
    clouds: Clouds; // Dane o chmurach
    dt: number; // Czas, w którym dane zostały wygenerowane (UNIX timestamp)
    sys: Sys; // Dodatkowe informacje o stacji pogodowej
    timezone: number; // Przesunięcie czasu lokalnego względem UTC (w sekundach)
    id: number; // Identyfikator miasta
    name: string; // Nazwa miasta
    cod: number; // Kod statusu HTTP
}

export default WeatherData;