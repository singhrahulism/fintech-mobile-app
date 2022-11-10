import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const SingleAvatarSimple = ({ source, name }) => {
    return <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <Image style={styles.avatarStyle} source={source} />
        </View>
        <Text>{name}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        alignItems: 'center'
    },
    avatarContainer: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 80/2,
        marginBottom: 10
    },
    avatarStyle: {
        height: 60,
        width: 'auto',
        aspectRatio: 1
    }
})

export default SingleAvatarSimple ;