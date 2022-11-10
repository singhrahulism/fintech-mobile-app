import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TransactionsScreen = () => {
    return <View style={styles.container}>
        <Text>This is TransactionsScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TransactionsScreen ;