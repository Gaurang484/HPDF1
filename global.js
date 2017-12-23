import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default GLOBAL={
  TweetData:[ 
          {
            TitleName:'BMW',
            TimeStamp:'14h',
            Description:'Is that thunder rolling or is that just the #R1200RS engine purring? Share some RS love today!',
            ProfileImage:require('./Images/bmwlogo.jpg'),
            TweetImage:require('./Images/bmw.jpg'),
            TitleLink:'@BMWMotorrad',
            Comments:'56',
            Retweets:'102',
            Likes:'2033'
          },
          {
            TitleName:'PMO India',
            TimeStamp:'6h',
            Description:'Mr. Yang Jiechi, State Councillor of the People’s Republic of China, calls on PM',
            ProfileImage:require('./Images/pmopic.jpg'),
            TweetImage:require('./Images/pmotweet.jpg'),
            TitleLink:'@PMOIndia',
            Comments:'220',
            Retweets:'433',
            Likes:'2.4k'
          },
          {
            TitleName:'Narendra Modi',
            TimeStamp:'4h',
            Description:'Had a wonderful interaction with BJP MPs from Gujarat. @BJP4Gujarat',
            ProfileImage:require('./Images/namopic.jpg'),
            TweetImage:require('./Images/namotweet.jpg'),
            TitleLink:'@narendramodi',
            Comments:'2.3k',
            Retweets:'4.8k',
            Likes:'33k'
          },
      ]
}

