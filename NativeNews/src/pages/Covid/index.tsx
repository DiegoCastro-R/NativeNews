/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { View, Text, Linking } from 'react-native';
import YouTube from 'react-native-youtube';
import { Card, Button } from 'react-native-elements';
import { covidApi } from '../../services/api';

const Covid: React.FC = () => {
  const [covidInfo, setCovidInfo] = useState({
    country: '',
    cases: '',
    deaths: '',
    recovered: '',
    todayCases: '',
    todayDeaths: '',
    todayRecovered: '',
  });
  useEffect(() => {
    covidApi.get('').then(response => {
      setCovidInfo(response.data);
    });
  }, []);
  return (
    <>
      <View style={{ flex: 1 }}>
        <YouTube
          style={{ width: '100%', height: '40%' }}
          showFullscreenButton
          videoId="FTSB-TRIfeY" // The YouTube video ID
          apiKey="AIzaSyDoIbm_zRUPHmunLxmrMN_2qMoT3_3OtEI"
          play // control playback of video with true/false
          loop={false} // control whether the video should loop when ended
        />
        <Card containerStyle={{ backgroundColor: '#fff' }}>
          <Card.Title style={{ color: 'black' }}>
            {covidInfo.country}
          </Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri:
                'https://www.prensalatina.com.br/images/2020/febrero/05/0-portugal.jpg',
            }}
          />
          <Text style={{ color: 'black', textAlign: 'center' }}>
            Total de Casos: {covidInfo.cases}
          </Text>
          <Text style={{ color: 'red', textAlign: 'center' }}>
            Total de Mortes: {covidInfo.deaths}
          </Text>
          <Text style={{ color: 'green', textAlign: 'center' }}>
            Recuperados: {covidInfo.recovered}
          </Text>
          <Text style={{ color: '#1167b1', textAlign: 'center' }}>
            Casos Hoje: {covidInfo.todayCases}
          </Text>
          <Text style={{ color: 'red', textAlign: 'center' }}>
            Mortes Hoje: {covidInfo.todayDeaths}
          </Text>
          <Text style={{ color: 'green', textAlign: 'center' }}>
            Recuperados Hoje: {covidInfo.todayRecovered}
          </Text>
          <Button
            title="Mantenha-se Seguro"
            onPress={() => {
              Linking.openURL('https://covid19.min-saude.pt/');
            }}
          />
        </Card>
      </View>
    </>
  );
};

export default Covid;
