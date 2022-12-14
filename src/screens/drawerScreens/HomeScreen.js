import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import ActionMenu from '../../components/Menus/ActionMenu';
import HomeHeader from '../../components/Headers/HomeHeader';
import SendAgain from '../../components/Items/SendAgain';
import SendAgainMenu from '../../components/Menus/SendAgainMenu';
import Transactions from '../../components/Menus/Transactions';
import MadeBy from '../../components/Footers/MadeBy';

const HomeScreen = () => {

    return <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <HomeHeader />
        <ActionMenu />
        <SendAgain title={'Send Again'} />
        <SendAgainMenu />
        <SendAgain title={'Transactions'} />
        <Transactions />
        <MadeBy />
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 25
    },
    actionIconContainer: {
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#479bfb',
        borderRadius: 55/2
    },
    redDotContainer: {
        position: 'absolute',
        right: 18,
        top: 15,
        borderColor: 'white',
        backgroundColor: 'red',
        borderWidth: 1,
        height: 8,
        width: 8,
        borderRadius: 8/2,
        zIndex: 1
    },
    headerLabelContainer: {
        borderColor: 'red',
        borderWidth: 1,
        alignItems: 'center'
    }
})

export default HomeScreen ;