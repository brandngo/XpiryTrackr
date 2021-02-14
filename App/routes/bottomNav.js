import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens
import Fridge from "../views/Fridge";
import BarcodeEntry from "../views/BarcodeEntry";
import ManualEntry from "../views/ManualEntry";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Fridge"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
            name="BarcodeEntry"
            component={BarcodeEntry}
            options={{
            tabBarLabel: 'BarcodeEntry',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Fridge"
            component={Fridge}
            options={{
            tabBarLabel: 'Fridge',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="ManualEntry"
            component={ManualEntry}
            options={{
            tabBarLabel: 'ManualEntry',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            }}
        />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs