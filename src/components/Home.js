import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Movie App</Text>
            <View style={styles.movieBtn}>

                <Button color={'orange'} title='Explore Movie' onPress={() => navigation.navigate('Movie')} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 20,
        color: 'black'
    },
    movieBtn: {
        width: '80%',
        marginTop: 10
    }
})