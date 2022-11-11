import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const DialPad = ({ handlePress }) => {
    return <View style={styles.container}>
        <View style={[styles.rowContainer]}>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(1)}>
                <Text style={{fontSize: 35}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(2)}>
                <Text style={{fontSize: 35}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(3)}>
                <Text style={{fontSize: 35}}>3</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.rowContainer]}>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(4)}>
                <Text style={{fontSize: 35}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(5)}>
                <Text style={{fontSize: 35}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(6)}>
                <Text style={{fontSize: 35}}>6</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.rowContainer]}>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(7)}>
                <Text style={{fontSize: 35}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(8)}>
                <Text style={{fontSize: 35}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(9)}>
                <Text style={{fontSize: 35}}>9</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.rowContainer]}>
            <View style={styles.singleDigitContainer} />
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(0)}>
                <Text style={{fontSize: 35}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleDigitContainer} activeOpacity={0.4} onPress={() => handlePress(-1)}>
                <Ionicons name="backspace" size={40} color="black" />
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        // marginVertical: 15
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    singleDigitContainer: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DialPad ;