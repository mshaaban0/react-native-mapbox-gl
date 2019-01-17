import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import Page from './common/Page';
import InputWithSwitch from './common/InputWithSwitch';
import BaseExamplePropTypes from './common/BaseExamplePropTypes';

import sheet from '../styles/sheet';
import colors from '../styles/colors';
import { DEFAULT_CENTER_COORDINATE } from '../utils';

const HorizontalIcon = require('../assets/coords_horizontal.png');
const VerticalIcon = require('../assets/coords_vertical.png');

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: colors.secondary.white,
  },
  mapWrapper: {
    flex: 1,
  },
  fieldsWrapper: {
    height: 150,
  },
});

class SearchByCoords extends React.Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
      zoomLevel: 4
    }

  }

  render() {
    return(
      <Page {...this.props}>
        <KeyboardAvoidingView style={[styles.mainWrapper, sheet.matchParent]} behavior="padding" enabled>
          <View style={sheet.matchParent}>
            <MapboxGL.MapView
              centerCoordinate={DEFAULT_CENTER_COORDINATE}
              style={sheet.matchParent}
            />
          </View>
          <View style={styles.fieldsWrapper} shadowColor='rgba(0, 0, 0, 1)' >
            <View style={sheet.matchParent}>
              <InputWithSwitch
                switchValues={['N', 'S']}
                icon={VerticalIcon} />
            </View>
            <View style={sheet.matchParent}>
              <InputWithSwitch
                switchValues={['E', 'W']}
                icon={HorizontalIcon} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Page>
    )
  }
}

export default SearchByCoords;
