import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { PRIMARY_COLOR, SECONDARY_COLOR,  } from '../../data/constants'

const TransactionType = ({ title, isActive, handlePress }) => {
    return <TouchableOpacity
                style={[styles.container, {
                        backgroundColor: isActive ? PRIMARY_COLOR : SECONDARY_COLOR
                }]}
                activeOpacity={0.6}
                onPress={handlePress}
            >
        <Text style={{
            color: isActive ? 'white' : 'black',
            fontSize: 14
        }}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10
    }
})

export default TransactionType ;