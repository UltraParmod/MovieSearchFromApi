import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Movie = () => {
    const [searchText, setSearchText] = useState('')
    const [movielist, setMovieList] = useState()



    // heandle function 
    const handleInputChange = (inputText) => {
        setSearchText(inputText)
    }

    // heandle btn Text

    const handleBtnText = async () => {
        // console.log(searchText)

        const res = await fetch(`https://www.omdbapi.com/?apikey=4cc25d5d&s=${searchText}`)
        const movieData = await res.json()
        // console.log(movieData.Search)
        setMovieList(movieData.Search)
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder='find a movie here..' placeholderTextColor={'gray'} style={styles.searchInput} value={searchText} onChangeText={handleInputChange} />
            <View style={styles.searchBtn}>

                <Button title='Search Movie ' onPress={handleBtnText} />
            </View>

            <View>
                {
                    movielist && <Text style={{ color: 'black', margin: 20, fontSize: 20, color: 'blue', fontWeight: 'bold' }}>{movielist?.length} Movie Found...</Text>
                }

                <View style={{ flex: .9, }}>
                    <FlatList
                        data={movielist}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ alignSelf: 'center', margin: 20, }}>
                                    <Image style={{ width: 300, height: 200, resizeMode: 'cover' }} source={{ uri: item?.Poster }} />
                                    <Text style={{ color: 'black', fontSize: 18 }}>{item?.Title}</Text>
                                    <Text style={{ color: 'black', fontSize: 16 }}>{item?.Year}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Movie

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        width: '90%',
        borderColor: '#ccc',
        borderWidth: .5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: 'black'
    },
    searchBtn: {
        width: '50%',
        marginTop: 20
    }
})