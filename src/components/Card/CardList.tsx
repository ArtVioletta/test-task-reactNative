import React from 'react';
import {Text, ActivityIndicator, FlatList} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchMovies} from '../../services/tmdb';
import Card from './Card';
import {Movie} from '../../types/types';

const CardList = () => {
  const {data, error, isLoading} = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      style={{margin: 10}}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <Card
          imageSource={item.backdrop_path}
          title={item.title}
          description={item.overview}
          date={item.release_date}
        />
      )}
    />
  );
};

export default CardList;
