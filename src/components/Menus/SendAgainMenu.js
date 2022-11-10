import React from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'

import SingleAvatarSimple from '../Items/SingleAvatarSimple'
import { data } from '../../data/dummyData'

const SendAgainMenu = () => {
    return <View style={styles.container}>
        <FlatList
            data={data.filter(item => item.method === 'sent')}
            horizontal
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => {
                return <SingleAvatarSimple source={item.imageSource} name={item.name} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30
    },
    
})

export default SendAgainMenu ;