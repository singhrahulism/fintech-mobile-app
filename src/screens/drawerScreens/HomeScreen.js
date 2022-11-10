import React, { useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import ActionMenu from '../../components/Menus/ActionMenu';

const HEADER_HEIGHT = 300

const HomeScreen = () => {

    const navigation = useNavigation()

    return <View style={styles.container}>
        <View style={{height: HEADER_HEIGHT}}>
            <ImageBackground
                source={require('../../../assets/homeHeaderBackground.png')}
                style={{flex: 1, paddingTop: StatusBar.currentHeight}}
                resizeMode='cover'
            >
                <View style={styles.actionContainer}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.actionIconContainer}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Ionicons name="ios-menu-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.actionIconContainer}>
                        <View style={styles.redDotContainer}/>
                        <FontAwesome name="bell-o" size={22} color="white" />
                    </View>
                </View>
                <View style={styles.headerLabelContainer}>
                    <Text style={{color: 'white'}}>
                        TOTAL BALANCE
                    </Text>
                    <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold', marginTop: 5}}>
                        $21,902
                    </Text>
                </View>
            </ImageBackground>
            <ActionMenu />
        </View>
    </View>
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