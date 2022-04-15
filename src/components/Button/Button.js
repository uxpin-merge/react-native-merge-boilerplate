import PropTypes from 'prop-types';
import * as React from 'react';
import { Button as ButtonM } from 'react-native';
import View from '../View/View';

/**
 * @uxpindocurl https://reactnative.dev/docs/button
 */
function Button(props) {
  return (
    <View>
     <ButtonM {...props} />
    </View>
  );
}

Button.propTypes = {
  /**
   * Text to display inside the button. On Android the given title will be converted to the uppercased form.
   */
  title: PropTypes.string,

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID: PropTypes.string,

  /**
   * If true, disable all interactions for this component.
   */
  disabled: PropTypes.bool,

  /**
   * If true, doesn't play system sound on touch.
   */
  touchSoundDisabled: PropTypes.bool, 

  /**
   * Designates the next view to receive focus when the user navigates down. 
   * see https://developer.android.com/reference/android/view/View#attr_android:nextFocusDown
   */
  nextFocusDown: PropTypes.number,

  /**
   * Designates the next view to receive focus when the user navigates forward. 
   * See https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward
   */
  nextFocusForward: PropTypes.number,

  /**
   * Designates the next view to receive focus when the user navigates left.
   * See https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft
   */
  nextFocusLeft: PropTypes.number,

  /**
   * Designates the next view to receive focus when the user navigates right. 
   * See https://developer.android.com/reference/android/view/View#attr_android:nextFocusRight
   */
  nextFocusRight: PropTypes.number,

  /**
   * Designates the next view to receive focus when the user navigates up.
   * See https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp
   */
  nextFocusUp: PropTypes.number,

  /**
   * TV preferred focus.
   */
  hasTVPreferredFocus: PropTypes.bool,

  /**
   * Text to display for blindness accessibility features.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. 
   * The accessibilityActions property should contain a list of action objects. 
   * Each action object should contain the field name and label.
   */
  accessibilityActions: PropTypes.array,

  /**
   * Handler to be called when the user taps the button.
   */
   onPress: PropTypes.func,

  /**
   * Invoked when the user performs the accessibility actions. 
   * The only argument to this function is an event containing the name of the action to perform.
   */
  onAccessibilityAction: PropTypes.func,
  
  /**
   * Color of the text (iOS), or background color of the button (Android).
   */
  color: PropTypes.oneOf(['royalblue', 'dodgerblue'])
};

export { Button as default };
