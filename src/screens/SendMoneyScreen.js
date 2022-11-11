import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SECONDARY_COLOR } from '../data/constants';
import TransactionView from '../components/Menus/TransactionView'
import DialPad from '../components/InputMethods/DialPad';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const SendMoneyScreen = ({ route }) => {

    const [amount, setAmount] = useState('0.00')

    const navigation = useNavigation()
    const { details } = route.params

    const handleAmount = (digit) => {
        if(digit === -1)
        {
            setAmount(amount => (amount/10).toFixed(2))
        }
        else
        {
            setAmount(amount => (amount*10+digit/100).toFixed(2))
        }
    }

    const handlePress = async() => {
        if(amount === '0.00' || amount === 0)
        {
            ToastAndroid.show('Amount is 0', ToastAndroid.SHORT)
        }
        else
        {
            ToastAndroid.show('Money Sent!', ToastAndroid.SHORT)
        }
    }

    return <View style={styles.container}>
        <View style={styles.actionContainer}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.actionIconContainer}
                onPress={() => navigation.goBack()}
            >
                <AntDesign name="arrowleft" size={24} color='black' />
            </TouchableOpacity>
            <View style={styles.actionIconContainer}>
                <AntDesign name="adduser" size={24} color="black" />
            </View>
        </View>
        <View style={{marginHorizontal: 30}}>
            <TransactionView details={details} hidePrice={true} />
        </View>
        <View style={{marginHorizontal: 30, marginTop: 20}}>
            <Text style={{fontSize: 18, marginBottom: 20}}>Amount</Text>
            <Text style={{fontSize: 45, fontWeight: 'bold'}}>${amount}</Text>
        </View>
        <DialPad handlePress={digit => handleAmount(digit)} />
        <PrimaryButton handlePress={handlePress} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
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
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 55/2
    }
})

export default SendMoneyScreen ;