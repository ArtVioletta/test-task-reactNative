import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Search from '../../images/search_light.svg';
import Add from '../../images/add_round_light.svg';
import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';

function Header() {
  const inset = useSafeAreaInsets();
  const styles = getStyles(inset);

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <Search style={styles.search} />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
      <Pressable style={styles.addSearch}>
        <Add style={styles.addImg} />
      </Pressable>
    </View>
  );
}

const getStyles = (inset: EdgeInsets) => {
  return StyleSheet.create({
    container: {
      paddingTop: inset.top,
      paddingBottom: inset.bottom,
      flexDirection: 'row',
      paddingHorizontal: 16,
    },
    textInputWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgba(164, 169, 174, 0.15)', // Прозрачный цвет

      // backgroundColor: '#e1e9f1',
      borderRadius: 10,
      flex: 1,
    },
    textInput: {
      marginLeft: 10,
      height: 50,
    },
    search: {
      marginLeft: 14,
    },
    addSearch: {
      padding: 10,
      height: 50,
      marginLeft: 10,

      justifyContent: 'center',
      backgroundColor: 'rgba(164, 169, 174, 0.15)',
      borderRadius: 25,
    },
  });
};

export default Header;
