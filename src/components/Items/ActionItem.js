import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid, Platform } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ActionItem = ({ title, iconName, action }) => {
    return <TouchableOpacity
                style={styles.container}
                activeOpacity={0.75}
                onPress={() => {
                    Platform.OS === 'android'
                    ? ToastAndroid.show(title === 'More' ? title : `${title} Money`, ToastAndroid.SHORT)
                    : alert(title === 'More' ? title : `${title} Money`)
                }}
            >
        {
            action === 'topup'
            ?
                <View style={{height: 35, width: 35, marginBottom: 15}}>
                    <View style={styles.topupContainer}>
                        <Foundation name={iconName} size={22} color='#0944f1' />
                    </View>
                    <View style={styles.blueContainer}></View>
                </View>
            :
                <View style={[styles.iconContainer, { borderRadius: iconName == 'dollar' ? 40/2 : 40/4 }]}>
                    {
                        iconName === 'dots-horizontal'
                        ? <MaterialCommunityIcons name={iconName} size={25} color='#0944f1' />
                        : <Foundation name={iconName} size={30} color='#0944f1' />
                    }
                    {
                        action &&
                        <Feather
                            name={action === 'send' ? 'arrow-up-right': 'arrow-down-left'}
                            style={styles.actionArrow}
                            size={24}
                            color="#0944f1"
                        />
                    }
                </View>
        }
        <Text>
            {title}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c7d3fb',
        height: 35,
        width: 35,
        marginBottom: 15
    },
    actionArrow: {
        position: 'absolute',
        top: -7,
        right: -7
    },
    topupContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 30/2,
        backgroundColor: '#c7d3fb',
        zIndex: 1,
        borderColor: 'white',
        borderWidth: 2
    },
    blueContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#0944f1',
        height: 22,
        width: 22,
        borderRadius: 22/2,
    }
})

export default ActionItem ;