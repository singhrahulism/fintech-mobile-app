import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR } from '../../data/constants'

const PrimaryButton = ({ useIndicator, handlePress }) => {
    return <TouchableOpacity
                style={styles.container}
                activeOpacity={0.85}
                onPress={handlePress}
            >
        <Text style={{color: 'white'}}>Confirm</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 12
    }
})

export default PrimaryButton ;