import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const StatisticScreen = () => {
    return <View style={styles.container}>
        <Text>This is StatisticScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default StatisticScreen ;