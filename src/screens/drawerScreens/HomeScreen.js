import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import SingleDrawerElement from '../../components/Drawer/SingleDrawerElement';

const HomeScreen = () => {
    return <View style={styles.container}>
        <View style={styles.drawerHeaderContainer}>
            <Text>
                Menus
            </Text>
            <View style={styles.closeContainer}>
                <EvilIcons name="close" size={30} color="black" />
            </View>
        </View>
        <View style={styles.drawersContainer}>
            <SingleDrawerElement iconName={'home'} />
            <SingleDrawerElement iconName={'file-invoice-dollar'} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight+40,
        marginHorizontal: 20,
        borderColor: 'red',
        borderWidth: 1
    },
    drawerHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    closeContainer: {
        // backgroundColor: '#f3f4f6'
        backgroundColor: 'white',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50/2
    },
    drawersContainer: {
        marginTop: 50
    }
})

export default HomeScreen ;