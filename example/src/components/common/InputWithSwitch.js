import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  groupWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  switchWrapper: {
    height: 40,
    width: 70,
  },
  switchButton: {
    height: 40,
    width: 70,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'right',
    fontSize: 36,
    paddingLeft: 5,
    paddingRight: 5,
  },
  smallInputWrapper: {
    width: 80,
  },
  seperator: {
    width: 10,
    height: 40,
    color: colors.secondary.black,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  largeInputWrapper: {
    flex: 1,
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary.gray,
    height: 40,
    fontSize: 36,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center',
  },
});

const InputWithSwitch = ({smallInputProps, largeInputProps, title}) => {
  return (
    <View style={styles.groupWrapper}>
      <TouchableWithoutFeedback
        onPress={() => alert('Hello Input')}>
        <Text style={styles.switchButton}>{title}</Text>
      </TouchableWithoutFeedback>
      <View style={styles.smallInputWrapper}>
        <TextInput
          style={styles.inputField}
          {...smallInputProps} />
      </View>
      <View style={styles.seperator}>
        <Text>,</Text>
      </View>
      <View style={styles.largeInputWrapper}>
        <TextInput
          style={styles.inputField}
          {...smallInputProps} />
      </View>
    </View>
  )
};

InputWithSwitch.defaultProps = {
  smallInputProps: {
    placeholder: '',
    focusOnMount: false,
    keyboardType: 'number-pad',
  },
  largeInputProps: {
    placeholder: '',
    focusOnMount: false,
    keyboardType: 'number-pad',
  },
}

const commonInputPropTypes = {
  placeholder: PropTypes.string,
  focusOnMount: PropTypes.bool,
  keyboardType: PropTypes.oneOf([
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad'
  ])
};

InputWithSwitch.propTypes = {
  smallInputProps: PropTypes.shape(commonInputPropTypes),
  largeInputProps: PropTypes.shape(commonInputPropTypes),
};

export default InputWithSwitch;
