import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native'

const MadeBy = () => {
    return <View style={styles.container}>
        <TouchableOpacity
            onPress={() => Linking.openURL('instagram://user?username=reactnativeundefined')}
        >
            <Text style={styles.byContainer}>React Native Code by @reactnativeundefined</Text>
        </TouchableOpacity>
        <View style={{height: 4}} />
        <TouchableOpacity
            onPress={() => Linking.openURL('instagram://user?username=syaifulrijalr')}
        >
            <Text style={styles.byContainer}>App UI by @syaifulrijalr</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    byContainer: {
        fontSize: 12
    }
})

export default MadeBy ;