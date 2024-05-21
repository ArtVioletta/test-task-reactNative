import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CardList from '../Card/CardList';

function CustomInput() {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View
          style={{
            paddingTop: inset.top,
            paddingBottom: inset.bottom,
            flexDirection: 'row',
            borderRadius: 10,
            paddingHorizontal: 16,
          }}>
          <View style={styles.container}>
            <Image source={'./src/images/search_light.svg'} />
            <TextInput style={styles.textInput} placeholder="Search" />
          </View>
          <Pressable style={styles.addSearch}>
            <Image source={'./src/images/search_light.svg'} />
          </Pressable>
        </View>
      ),
    });
  }, []);

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#A4A9AE',
    borderRadius: 0,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#A4A9AE',
    padding: 10,
    width: 250,
    height: 50,
  },
  addSearch: {
    padding: 10,
    backgroundColor: '#A4A9AE',
    borderRadius: 25,
  },
});

export default CustomInput;
