import React, { useEffect, useState } from 'react';
import prayerTimes from './prayer_times.json';
import './App.css';

function App() {
  const [todayTimes, setTodayTimes] = useState(null);

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const key = `${day}${month}`;

    if (prayerTimes[key]) {
      setTodayTimes(prayerTimes[key]);
    }
  }, []);

  if (!todayTimes) {
    return <p>Loading prayer times...</p>;
  }

  return (<div>
    <div className="App">
      <div className='time'>
          <h1 className="big">Fajr:</h1>
          <h1 className="big">{todayTimes.Fajr}</h1>
      </div>
          <br/>
      <div className='time'>
          <h1 className="big">Dhuhr:</h1>
          <h1 className="big">{todayTimes.Dhuhr}</h1>
      </div>
          <br/>
      <div className='time'>
          <h1 className="big">Asr:</h1>
          <h1 className="big">{todayTimes.Asr}</h1>
      </div>
          <br/>
      <div className='time'>
          <h1 className="big">Maghrib:</h1>
          <h1 className="big">{todayTimes.Maghrib}</h1>
      </div>
          <br/>
      <div className='time'>
          <h1 className="big">Isha:</h1>
          <h1 className="big">{todayTimes.Isha}</h1>
      </div>
          <br/>
    </div>
    </div>
  );
}

export default App;
