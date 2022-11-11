import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const MenuHeading = ({ title }) => {
    return <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {title}
            </Text>
            <TouchableOpacity
                activeOpacity={0.5}
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => ToastAndroid.show(`See all ${title}`, ToastAndroid.SHORT)}
            >
                <Text style={{color: '#063dfc', fontWeight: 'bold'}}>See all</Text>
                <MaterialIcons name="arrow-right-alt" size={24} color='#063dfc' />
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
    
    }
})

export default MenuHeading ;