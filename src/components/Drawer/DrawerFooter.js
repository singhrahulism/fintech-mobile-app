import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const DrawerFooter = () => {
    return <View style={styles.container}>
        <Image
            source={require('../../../assets/drawerFooter.png')}
            style={styles.footerImageContainer}
        />
        <Text style={{ fontSize: 16, fontWeight:'bold' }}>
            &nbsp;sunmoon.
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 30,
        paddingLeft: 15,
        alignItems: 'center'
    },
    footerImageContainer: {
        height: 45,
        width: 'auto',
        aspectRatio: 1
    }
})

export default DrawerFooter ;