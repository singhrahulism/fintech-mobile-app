import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SingleAvatarSimple = ({ details }) => {

    const navigation = useNavigation()

    return <TouchableOpacity
                style={styles.container}
                activeOpacity={0.75}
                onPress={() => navigation.navigate('SendMoney', {details: details})}
            >
        <View style={styles.avatarContainer}>
            <Image style={styles.avatarStyle} source={details.imageSource} />
        </View>
        <Text>{details.name}</Text>
    </TouchableOpacity>
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