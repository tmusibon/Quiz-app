import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

interface Header {
  title: string;
}

const HeaderClass: FC<Header> = ({title}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />
      <Text style={styles.textstyle}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default HeaderClass;
