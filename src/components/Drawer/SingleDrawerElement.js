import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const SingleDrawerElement = ({ iconName }) => {
    return <View style={styles.container}>
        <TouchableOpacity
            style={styles.elementContainer}
            activeOpacity={0.55}
        >
            <FontAwesome5 name={iconName} size={22} color="black" />
            <Text style={{paddingLeft: 10}}>This is SingleDrawerElement</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'red',
        borderBottomWidth: 1
    },
    elementContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default SingleDrawerElement ;