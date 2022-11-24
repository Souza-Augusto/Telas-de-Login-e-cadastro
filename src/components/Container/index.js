import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';

export default function Container(props) {
  return (
    <View style={[styles.Container, props?.ViewStyle]}>
      <SafeAreaView style={[styles.Container, props?.style]}>
        {props.children}
      </SafeAreaView>
    </View>
  );
}
