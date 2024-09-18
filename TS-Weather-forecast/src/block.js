const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;
const { useState, useEffect } = wp.element;

registerBlockType('ts-weather-forecast/block', {
    title: 'Weather Forecast',
    icon: 'cloud',
    category: 'widgets',
    attributes: {
        city: {
            type: 'string',
            default: 'London' // Default London city name
        },
        date: {
            type: 'string',
            default: new Date().toISOString().split('T')[0] // Default to today's date
        },
        weather: {
            type: 'object',
            default: {}
        }
    },
    edit: ({ attributes, setAttributes }) => {
        const { city, date, weather } = attributes;
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            if (city && date) {
                setLoading(true);
                fetch(`/wp-json/ts-weather-forecast/v1/weather?city=${city}&date=${date}`)
                    .then(response => response.json())
                    .then(data => {
                        setAttributes({ weather: data });
                        setLoading(false);
                    });
            }
        }, [city, date]);

        return (
            <div className="weather-forecast-block">
               <TextControl
                    className="city-input"
                    label="Enter the City"
                    value={city}
                    onChange={(newCity) => setAttributes({ city: newCity })}
                />
                <TextControl
                    className="date-input"
                    label="Enter the Date (YYYY-MM-DD)"
                    value={date}
                    onChange={(newDate) => setAttributes({ date: newDate })}
                />
               <h4>Weather forecast of {city} on {date}</h4>
                {loading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    weather.main && (
                        <div className="weather-info">
                            <p className="temperature">
                                <img src="http://openweathermap.org/img/w/10d.png" alt="Weather icon" /> {weather.main.temp} °C
                            </p>
                            <p className="condition">{weather.weather[0].description}</p>
                        </div>
                    )
                )}
            </div>
        );
    },
    save: ({ attributes }) => {
        const { city, date, weather } = attributes;
        return (
            <div className="weather-forecast-block">
                <h2>Weather forecast of {city} on {date}</h2>
                {weather.main && (
                    <div className="weather-info">
                        <p className="temperature">
                                <img src="http://openweathermap.org/img/w/10d.png" alt="Weather icon" /> {weather.main.temp} °C
                            </p>
                        <p className="condition">{weather.weather[0].description}</p>
                    </div>
                )}
            </div>
        );
    }
});
