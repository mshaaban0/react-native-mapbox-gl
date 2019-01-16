import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Page from './common/Page';
import InputWithSwitch from './common/InputWithSwitch';
import BaseExamplePropTypes from './common/BaseExamplePropTypes';

import sheet from '../styles/sheet';

const styles = StyleSheet.create({
  welcome: {
    color: 'red'
  },
  fieldsWrapper: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  fillRow: {
    flex: 1
  }
});

class SearchByCoords extends React.Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
      welcome: 'Welcome to the jungle'
    }
  }

  render() {
    const { welcome } = this.state;
    return(
      <Page {...this.props}>
        <View style={styles.fieldsWrapper}>
          <View style={styles.fillRow}>
            <InputWithSwitch title='S' />
          </View>
          <View style={styles.fillRow}>
            <InputWithSwitch title='W' />
          </View>
        </View>
      </Page>
    )
  }
}

export default SearchByCoords;
