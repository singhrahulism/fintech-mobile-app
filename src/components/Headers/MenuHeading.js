import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const MenuHeading = ({ title, handlePress }) => {
    return <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#063dfc', fontWeight: 'bold'}}>See all</Text>
                <MaterialIcons name="arrow-right-alt" size={24} color='#063dfc' />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
    
    }
})

export default MenuHeading ;