import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable as PressableM, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import View from '../View/View';

const Pressable = () => {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }

    return (
        <View style={styles.container}>
        <PressableM
            onPress={() => {
            setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
            },
            styles.wrapperCustom
            ]}>
            {({ pressed }) => (
            <Text style={styles.text}>
                {pressed ? 'Pressed!' : 'Press Me'}
            </Text>
            )}
        </PressableM>
        <View style={styles.logBox}>
            <Text testID="pressable_press_console">{textLog}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

Pressable.propTypes = {
  /**
   * Whether the press behavior is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Used only for documentation or testing (e.g. snapshot testing).
   * @uxpinignoreprop
   */
  testOnly_pressed: PropTypes.bool,

  /**
   * Either children or a function that receives a boolean reflecting whether the component is currently pressed.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /** Andriod
   * If true, doesn't play Android system sound on press.
   */
  android_disableSound: PropTypes.bool,

  /** Andriod
   * Enables the Android ripple effect and configures its properties.
   */
  android_ripple: PropTypes.object,

  /**
   * Duration (in milliseconds) to wait after press down before calling onPressIn.
   */
  unstable_pressDelay: PropTypes.number,

  /**
   * Sets additional distance outside of element in which a press can be detected.
   */
  hitSlop: PropTypes.number,

  /**
   * Duration (in milliseconds) from onPressIn before onLongPress is called.
   */
  delayLongPress: PropTypes.number,

  /**
   * Called if the time after onPressIn lasts longer than 500 milliseconds. 
   * This time period can be customized with delayLongPress.
   * ({ nativeEvent: PressEvent }) => void
   * @uxpinignoreprop
   */
  onLongPress: PropTypes.func,

  /**
   * Called after onPressOut.
   * ({ nativeEvent: PressEvent }) => void
   * @uxpinignoreprop
   */
  onPress: PropTypes.func,

  /**
   * Called immediately when a touch is engaged, before onPressOut and onPress.
   * ({ nativeEvent: PressEvent }) => void
   * @uxpinignoreprop
   */
  onPressIn: PropTypes.func,

  /**
   * Called when a touch is released.
   * ({ nativeEvent: PressEvent }) => void
   * @uxpinignoreprop
   */
  onPressOut: PropTypes.func,

  /**
   * Additional distance outside of this view in which a touch is considered a press before onPressOut is triggered.
   */
  pressRetentionOffset: PropTypes.number,

  /**
   * Either view styles or a function that receives a boolean reflecting 
   * whether the component is currently pressed and returns view styles.
   */
  style: PropTypes.object,


}

Pressable.defaultProps = {
  number: 500,
  pressRetentionOffset: { bottom: 30, left: 20, right: 20, top: 20 }
}

export default Pressable;