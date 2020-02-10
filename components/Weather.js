import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Weather = (props) => {
    const { temperature, weatherCondition } = props;
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <MaterialCommunityIcons
                size={48}
                name="weather-hurricane"
                color={'#fff'}
            />
            <Text style={styles.headerText}>{temperature}</Text>
            <Text style={styles.headerText}>Temperature</Text>
        </View>

        <View style={styles.bodyContainer}>
            <Text style={styles.title}>{weatherCondition}</Text>
            <Text style={styles.subtitle}>It hurts my eyes</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 48,
        color: '#fff'
    },
    container: {
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: '#66bb6a'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },

    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});

export default Weather;
