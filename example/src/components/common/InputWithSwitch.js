import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image
} from 'react-native';
import colors from '../../styles/colors';
import sheet from '../../styles/sheet';
import Switcher from './Switcher';

const styles = StyleSheet.create({
  groupWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // Interaction Seperator
    paddingBottom: 10,
    paddingRight: 10,
  },
  smallInputWrapper: {
    width: 80,
  },
  seperator: {
    width: 22,
    height: 55,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  seperatorText: {
    color: colors.primary.grayDark,
    fontSize: 36,
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary.grayDark,
    height: 50,
    fontSize: 36,
    paddingTop: 10,
    paddingBottom: 2,
  },
  smallInputField: {
    textAlign: 'center'
  },
});

const InputWithSwitch = (props) => {
  const {
    switchValues,
    smallInputProps,
    largeInputProps,
    title,
    icon
  } = props;

  return (
    <View style={[sheet.matchParent, styles.groupWrapper]}>
      <Switcher icon={icon} switchValues={switchValues} />

      <View style={styles.smallInputWrapper}>
        <TextInput
          style={[styles.inputField, styles.smallInputField]}
          {...smallInputProps} />
      </View>

      <View style={styles.seperator}>
        <Text style={styles.seperatorText}>,</Text>
      </View>

      <View style={sheet.matchParent}>
        <TextInput
          style={styles.inputField}
          {...largeInputProps} />
      </View>
    </View>
  )
};

const commonInputProps = {
  placeholder: '',
  focusOnMount: false,
  keyboardType: 'number-pad',
  keyboardAppearance: 'dark',
}

InputWithSwitch.defaultProps = {
  smallInputProps: {
    ...commonInputProps,
    maxLength: 3,
  },
  largeInputProps: {
    ...commonInputProps,
    maxLength: 10
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
