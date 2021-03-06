import React, { useState } from 'react';
import { View, StyleSheet, Image, FlatList, Switch } from 'react-native';
import { Text, ListItem, Avatar, Icon, Badge } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

import { LinearGradient } from '../components/LinearGradient';

import { Header } from './header';

import colors from '../config/colors';

const log = () => console.log('this is an example method');

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    name: 'Christy Thomas',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
];

const Lists2 = () => {
  const renderRow = ({ item }) => {
    return (
      <ListItem onPress={log} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  const [switch1, setSwitch1] = useState(true);
  const [checkbox1, setCheckbox1] = useState(true);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  return (
    <>
      <Header title="Lists 2" />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ paddingVertical: 8 }}>
              {list2.map((l, i) => (
                <ListItem
                  component={TouchableScale}
                  friction={90}
                  tension={100}
                  activeScale={0.95}
                  key={i}
                  linearGradientProps={{
                    colors: l.linearGradientColors,
                    start: [1, 0],
                    end: [0.2, 0],
                  }}
                  ViewComponent={LinearGradient}
                  containerStyle={{
                    marginHorizontal: 16,
                    marginVertical: 8,
                    borderRadius: 8,
                  }}
                >
                  <Avatar rounded source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title
                      style={{ color: 'white', fontWeight: 'bold' }}
                    >
                      {l.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={[{ color: 'white' }]}>
                      {l.subtitle}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron color="white" />
                </ListItem>
              ))}
            </View>

            <View style={styles.list}>
              {list2.map((l, i) => (
                <ListItem key={i} onPress={log} bottomDivider>
                  <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))}
            </View>
            <View style={styles.list}>
              {list2.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Icon name="user-circle-o" type="font-awesome" color="blue" />
                  <ListItem.Content>
                    <ListItem.Title style={{ color: 'red' }}>
                      {l.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Content right>
                    <ListItem.Title right style={{ color: 'green' }}>
                      11:00 am
                    </ListItem.Title>
                    <ListItem.Subtitle right>12:00 am</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
            <View style={styles.list}>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Name</ListItem.Title>
                </ListItem.Content>
                <ListItem.Input placeholder="Type your name" />
                <ListItem.Chevron />
              </ListItem>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Switch that please 😲</ListItem.Title>
                </ListItem.Content>
                <Switch
                  value={switch1}
                  onValueChange={(value) => setSwitch1(value)}
                />
              </ListItem>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Choose 🤯</ListItem.Title>
                </ListItem.Content>
                <ListItem.ButtonGroup
                  buttons={['Flower', 'Coco']}
                  selectedIndex={selectedButtonIndex}
                  onPress={(index) => setSelectedButtonIndex(index)}
                />
              </ListItem>
              <ListItem bottomDivider>
                <ListItem.CheckBox
                  checked={checkbox1}
                  onPress={() => setCheckbox1(!checkbox1)}
                />
                <ListItem.Content>
                  <ListItem.Title>Check that please 😢</ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem bottomDivider>
                <Badge value="12" />
                <ListItem.Content>
                  <ListItem.Title>With a Badge ! 😻</ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem bottomDivider>
                <Icon name="check" size={20} />
                <ListItem.Content>
                  <ListItem.Title>This thing is checked 😎</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
            <View style={styles.list}>
              <ListItem>
                <Avatar source={require('../../assets/images/avatar1.jpg')} />
                <ListItem.Content>
                  <ListItem.Title>
                    Limited supply! Its like digital gold!
                  </ListItem.Title>
                  <View style={styles.subtitleView}>
                    <Image
                      source={require('../images/rating.png')}
                      style={styles.ratingImage}
                    />
                    <Text style={styles.ratingText}>5 months ago</Text>
                  </View>
                </ListItem.Content>
              </ListItem>
            </View>
          </>
        }
        data={list1}
        keyExtractor={(a) => a.title}
        renderItem={renderRow}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Lists2;
