import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import MenuHeading from '../Headers/MenuHeading';

const SendAgain = () => {
    return <View style={styles.container}>
        <MenuHeading title={'Send Again'} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 20
    }
})

export default SendAgain ;