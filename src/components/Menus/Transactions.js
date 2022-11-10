import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import TransactionType from '../Items/TransactionType'
import { PRIMARY_COLOR } from '../../data/constants'
import TransactionView from './TransactionView'

import { data } from '../../data/dummyData'

const Transactions = () => {

    const [all, setAll] = useState(true)
    const [rent, setRent] = useState(false)
    const [shopping, setShopping] = useState(false)
    const [food, setFood] = useState(false)

    const handleAll = () => {
        setAll(true)
        setRent(false)
        setShopping(false)
        setFood(false)
    }
    
    const handleRent = () => {
        setAll(false)
        setRent(true)
        setShopping(false)
        setFood(false)
    }
    
    const handleShopping = () => {
        setAll(false)
        setRent(false)
        setShopping(true)
        setFood(false)
    }
    
    const handleFood = () => {
        setAll(false)
        setRent(false)
        setShopping(false)
        setFood(true)
    }

    return <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TransactionType title={'All'} isActive={all} handlePress={handleAll} />
            <TransactionType title={'Rent'} isActive={rent} handlePress={handleRent} />
            <TransactionType title={'Shopping'} isActive={shopping} handlePress={handleShopping} />
            <TransactionType title={'Food'} isActive={food} handlePress={handleFood} />
        </View>
        <View style={{marginTop: 20}}>
            {
                all &&
                data.map((item) => {
                    return <TransactionView key={item.id} details={item} />
                })
            }
            {
                rent &&
                (data.filter(item => item.type === 'rent')).map((item) => {
                    return <TransactionView key={item.id} details={item} />
                })
            }
            {
                shopping &&
                (data.filter(item => item.type === 'shopping')).map((item) => {
                    return <TransactionView key={item.id} details={item} />
                })
            }
            {
                food &&
                (data.filter(item => item.type === 'food')).map((item) => {
                    return <TransactionView key={item.id} details={item} />
                })
            }

        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    }
})

export default Transactions ;