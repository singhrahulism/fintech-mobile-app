import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ActionItem from '../Items/ActionItem'

const ActionMenu = () => {
    return <View style={styles.container}>
        <ActionItem title={'Transfer'} iconName={'dollar'} action={'send'} />
        <View style={styles.separatorContainer} />
        <ActionItem title={'Receive'} iconName={'dollar'} action={'receive'} />
        <View style={styles.separatorContainer} />
        <ActionItem title={'Top Up'} iconName={'dollar'} action={'topup'} />
        <View style={styles.separatorContainer} />
        <ActionItem title={'More'} iconName={'dots-horizontal'}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 25,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: -65
    },
    separatorContainer: {
        height: '80%',
        borderLeftWidth: 0.4,
        borderLeftColor: '#bcbcbc'
    }
})

export default ActionMenu ;