const Forecast = ({ forecast }) => {
  const dailyForecast = forecast.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc.find(f => f.date === date)) {
      acc.push({
        temperature: `${item.main.temp}°C`,
        day: new Date(item.dt * 1000).toLocaleDateString("en-EN", { weekday: 'short' }),
        date: date,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
      });
    }
    return acc;
  }, []).slice(0, 5);

  const hourlyForecast = forecast.slice(0, 5).map(item => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    degree: `${item.main.temp}°C`,
    windSpeed: `${item.wind.speed}`
  }));

  return (
    <div className="flex">
      <div className="xl:w-96 w-full mt-6">
        <div className="flex flex-row justify-between items-center px-2">
          <h2 className="text-2xl font-bold text-cyan-300">5 Day Forecast</h2>
        </div>
        <div className="flex flex-row justify-between items-center p-2 bg-[#112b44] rounded-lg mt-2">
          {dailyForecast.map((cast, index) => (
            <div key={index} className="text-center text-white">
              <p className="text-sm font-semibold">{cast.day}</p>
              <img src={cast.icon} alt={`Icon for ${cast.day}`} className="w-10 h-10 mx-auto" />
              <p className="text-lg font-bold">{cast.temperature}</p>
              <p className="text-xs">{cast.date}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#058ffc] to-[#00c4ff] shadow-xl mt-6 mx-4 rounded-lg text-white py-4 px-3">
          <h1 className="text-xl font-semibold text-center">Hourly Forecast</h1>
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap mt-4">
            {hourlyForecast.map((hourcast, index) => (
              <div key={index} className="flex flex-col items-center gap-2 bg-white text-gray-800 rounded-xl p-3 w-28 text-center shadow-md hover:scale-105 transition-transform duration-200">
                <p className="text-sm font-medium">{hourcast.time}</p>
                <img src={hourcast.icon} alt={`Icon for ${hourcast.time}`} className="w-12 h-12 select-none" />
                <p className="text-lg font-bold">{hourcast.degree}</p>
                <p className="text-xs text-gray-600">{hourcast.windSpeed} km/h</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
