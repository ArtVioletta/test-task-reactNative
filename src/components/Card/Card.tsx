// src/components/CustomCard.tsx

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import StyledText from '../../consts/StyledText';

interface CustomCardProps {
  imageSource: string;
  title: string;
  description: string;
  date: string;
}

//date
//data
const Card: React.FC<CustomCardProps> = ({
  imageSource,
  title,
  description,
  date,
}) => {
  console.log(imageSource, 'imageSource');
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w780${imageSource}`,
        }}
        style={styles.mapImage}
        resizeMode="cover"
      />
      <View style={styles.wrapper}>
        <StyledText variant="bold">{title}</StyledText>
        <StyledText variant="light">{description}</StyledText>
        <StyledText variant="extralight" style={styles.date}>
          {date}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    // marginTop: 200,
    marginBottom: 40,
  },
  wrapper: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mapContainer: {
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 16,
  },
  title: {
    marginTop: 10,
  },
  date: {
    marginTop: 5,
  },
});

export default Card;
