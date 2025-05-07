// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image 
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.heroTitle}>
          START Your Success Story
        </Text>
      </View>
      
      <View style={styles.services}>
        {/* Quick access to main services */}
      </View>

      <TouchableOpacity 
        style={styles.ctaButton}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.ctaText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};