import React from 'react';
import {StyleSheet, View} from 'react-native';
import CardList from '../components/Card/CardList';
import Header from '../components/Header/Header';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header />,
    });
  });

  return (
    <View>
      <CardList />
    </View>
  );
}

export default HomeScreen;
