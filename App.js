import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { API_KEY } from './util/weatherApiKey';

export default function App() {
  const initialState = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: ''
  };

  const [loadingState, setLoadingState] = useState(initialState);

  useEffect(() => {
    // Fires then component is created;
    getLocationAsync();
    if (loadingState.latitude && loadingState.longitude) {

      setTimeout(() => {
        // Mock Data for testing
        setLoadingState({
          ...loadingState,
          temperature: 268.15,
          weatherCondition: "Clear",
          isLoading: false
        });
      }, 3000);

      /*    REAL API
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loadingState.latitude}&lon=${loadingState.longitude}&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setLoadingState({
          ...loadingState,
          temperature: result.main.temp,
          weatherCondition: result.weather[0].main,
          isLoading: false
        })
      })
      .catch(err => {
        setLoadingState({...loadingState, error: '🐥 Failed while fetching the weather. 🐥'});
      });
      */
    }
  }, []);

  getLocationAsync = async() => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setLoadingState({...loadingState, error: '🦙Permission for location is not granted.🦙'});
    }
    let location = await Location.getCurrentPositionAsync({});

    const { latitude, longitude } = location.coords;

    setLoadingState({...loadingState, latitude, longitude});
  };

  return (
    <View style={styles.container}>
    { loadingState.isLoading ?
        <Text>Fetching Weather</Text>
        :
        <Weather
          temperature={loadingState.temperature}
          weatherCondition={loadingState.weatherCondition}
        />
    }
    <Text>{loadingState.error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});