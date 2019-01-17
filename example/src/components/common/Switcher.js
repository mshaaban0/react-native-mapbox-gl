import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

import colors from '../../styles/colors';
import sheet from '../../styles/sheet';

const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
    width: 70,
  },
  iconWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  switchButtonText: {
    alignSelf: 'center',
    textAlign: 'right',
    fontSize: 36,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    color: colors.primary.grayDark,
  },
})

class Switcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.preSelectedIndex,
    }

    this.onPress = this.onPress.bind(this);
  }

  onPress(currentIndex, values) {
    this.setState({
      currentIndex
    }, () => {
      const currentValue = values[this.state.currentIndex];
      this.props.onChange(currentValue);
    })
  }

  render() {
    const {
      icon,
      switchValues,
      preSelectedIndex,
    } = this.props;
    const { currentIndex } = this.state;
    return(
      <TouchableWithoutFeedback
        onPress={this.onPress(currentIndex, switchValues)}>
        <View style={styles.switchWrapper}>
          {icon &&
            <View style={styles.iconWrapper}>
              <Image source={icon} />
            </View>
          }
          <View style={sheet.matchParent}>
            <Text style={styles.switchButtonText}>
              { switchValues[currentIndex] }
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Switcher.defaultProps = {
  preSelectedIndex: 0,
  onChange: () => {}
}

Switcher.propTypes = {
  switchValues: PropTypes.arrayOf(PropTypes.any).isRequired,
  preSelectedIndex: PropTypes.number,
  onChange: PropTypes.func,
}

export default Switcher;
