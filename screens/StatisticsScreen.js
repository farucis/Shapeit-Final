import { React, useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { auth } from '../FireBase/Users/reduce';


import DayCalorieCircular from '../components/Statistics/DayCalorieCircular';
import Daynutritionalvalues from '../components/Statistics/DayNutritionalValues';
import MealsList from '../components/Statistics/MealsList';
import MealsListHeader from '../components/Statistics/MealsListHeader';


import { readUserData, writeUserData } from '../FireBase/rtdb';

const StatisticsScreen = ({ navigation, route }) => {

    const [BreakfastSelcted, setBreakfastSelcted] = useState(false);
    const [LunchSelcted, setLunchSelcted] = useState(false);
    const [DinnerSelcted, setDinnerSelcted] = useState(false);


    useEffect(() => {
        writeUserData('ucGu9HSJr1f47FibWNsQazHzY1k1', 'Faruch Ismailov', 'fa@fa.com', true, 1517);
        writeUserData('ucGngcggcjvjvjh1', 'mapal Ismailov', 'fa@fa.com', true, 1517);
        readUserData('ucGu9HSJr1f47FibWNsQazHzY1k1');

    }, [BreakfastSelcted, LunchSelcted, DinnerSelcted]);


    const selcetByTime = () => {
        var hours = new Date().getHours(); //Current Hours

        if (hours >= 6 || hours < 13)
            setBreakfastSelcted(true);
        else if (hours >= 13 || hours < 18)
            setLunchSelcted(true);
        else if (hours >= 18 || hours < 23)
            setDinnerSelcted(true);

    }

    return (
        <SafeAreaView style={styles.safearea} >
            <DayCalorieCircular navigation={navigation} />
            <Daynutritionalvalues />

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >

                <View key='1'>
                    <MealsListHeader navigation={navigation} name='Breakfast' isSelect={BreakfastSelcted} IsSelectedHandler={setBreakfastSelcted} />
                    {BreakfastSelcted ? <MealsList dataName={'Breakfast'} /> : null}
                </View>

                <View key='2'>
                    <MealsListHeader navigation={navigation} name='Lunch' isSelect={LunchSelcted} IsSelectedHandler={setLunchSelcted} />
                    {LunchSelcted ? <MealsList dataName={'Lunch'} /> : null}
                </View>

                <View key='3'>
                    <MealsListHeader navigation={navigation} name='Dinner' isSelect={DinnerSelcted} IsSelectedHandler={setDinnerSelcted} />
                    {DinnerSelcted ? <MealsList dataName={'Dinner'} /> : null}
                </View>



            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#eff5f5'
    },
})




export default StatisticsScreen;
