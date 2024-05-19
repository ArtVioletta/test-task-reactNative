import React from 'react';
import {Button, Pressable, Text, TextInput, View} from 'react-native';
import CardList from '../components/Card/CardList';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function HomeScreen() {
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
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              backgroundColor: 'red',
            }}>
            <Text>Search</Text>
            <TextInput
              style={{flex: 1, backgroundColor: 'red', padding: 10}}
              placeholder="hello"
            />
          </View>
          <Pressable style={{padding: 10, backgroundColor: 'yellow'}}>
            <Text>Press</Text>
          </Pressable>
        </View>
      ),
    });
  }, []);
  return (
    <View>
      {/* <Button variant="dangarous" disabled /> */}
      {/* <Card
          imageSource={require('./src/images/scientists.png')}
          title="Custom Card"
          header="Header Text"
          data="2st"
        /> */}
      <CardList />
    </View>
  );
}

export default HomeScreen;
