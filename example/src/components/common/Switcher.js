import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  StyleSheet,
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

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.preSelectedIndex,
      currentValue: props.switchValues[props.preSelectedIndex],
    }

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const newIndex = this.state.currentIndex === 0 ? 1 : 0;
    const newValue = this.props.switchValues[newIndex];
    this.setState({
      currentIndex: newIndex,
      currentValue: newValue,
    }, () => {
      this.props.onChange(newValue);
    })
  }

  render() {
    const {
      icon,
      switchValues,
      preSelectedIndex,
    } = this.props;
    const { currentIndex, currentValue } = this.state;
    return(
      <TouchableWithoutFeedback
        onPress={this.onPress}>
        <View style={styles.switchWrapper}>
          {icon &&
            <View style={styles.iconWrapper}>
              <Image source={icon} />
            </View>
          }
          <View style={sheet.matchParent}>
            <Text style={styles.switchButtonText}>
              {currentValue}
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
