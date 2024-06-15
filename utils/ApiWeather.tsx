import WeatherData from "../interfaces/Weather";

export default class ApiWeather
{
    private URL: string = 'http://api.openweathermap.org/data/2.5/weather?';
    private API_KEY;
    private lat;
    private lon;
    
    constructor(API_KEY: string, lat: number, lon: number)
    {
        this.API_KEY = API_KEY;
        this.lat = lat;
        this.lon =  lon;
    }


    public async getData()
{
    try {
        const response = await fetch(`${this.URL}lat=${this.lat}&lon=${this.lon}&appid=${this.API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Wystąpił błąd ${error}`);
        return null;
    }
}


}