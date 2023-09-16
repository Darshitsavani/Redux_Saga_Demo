import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataRequest } from '../../Redux/Main/actions';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataRequest())
    }, [])

    const data = useSelector(state => state.mainReducer.dataList)
    console.log('mydata', data);
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})