import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { SECONDARY_COLOR } from '../../data/constants'

const TransactionView = ({ details, hidePrice }) => {
    return <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <Image
                source={details.imageSource}
                style={styles.avatarStyle}
            />
        </View>
        <View style={styles.infoContainer}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{details.name}</Text>
            <View style={{height: 6}} />
            <Text style={styles.subTextContainer}>{details.time} · {details.remarks}</Text>
        </View>
        <View style={[styles.amountContainer, { alignItems: hidePrice ? 'flex-end' : null }]}>
            {
                hidePrice
                ?
                    <View style={{borderColor: '#cecece', borderWidth: 2, borderRadius: 4}}>
                        <Feather name="chevron-down" size={24} color={'#8e8e8e'} />
                    </View>
                :
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: details.amount[0] == '+' ? 'green' : '#d91616'}}>
                        {details.amount}
                    </Text>
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderColor: SECONDARY_COLOR,
        borderWidth: 1,
        borderRadius: 18,
        padding: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    avatarContainer: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 15,
        flex: 1
    },
    avatarStyle: {
        height: 60,
        width: 'auto',
        aspectRatio: 1
    },
    infoContainer: {
        flex: 2.5,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    amountContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    subTextContainer: {
        fontSize: 12,
        color: '#939393'
    }
})

export default TransactionView ;