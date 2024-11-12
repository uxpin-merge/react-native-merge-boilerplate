import PropTypes from "prop-types";
import * as React from "react";
import { Button as ButtonM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/button
 * @uxpindescription
 */
function Button(props) {
  return <ButtonM {...props} />;
}

Button.propTypes = {
  /**
   * Handler to be called when the user taps the button.
   */
  onPress: PropTypes.func.isRequired,

  /**
   * Text to display inside the button.
   */
  title: PropTypes.string.isRequired,

  /**
   * Text to display for accessibility features.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Language for screen reader, following BCP 47 specification (iOS only).
   */
  accessibilityLanguage: PropTypes.string,

  /**
   * Accessibility actions for assistive technology.
   */
  accessibilityActions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),

  /**
   * Invoked when an accessibility action is performed.
   */
  onAccessibilityAction: PropTypes.func,

  /**
   * Color of the text (iOS) or background color of the button (Android).
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Disables all interactions for this component.
   */
  disabled: PropTypes.bool,

  /**
   * Preferred focus on TV.
   */
  hasTVPreferredFocus: PropTypes.bool,

  /**
   * Sets the next view to receive focus when navigating down on Android TV.
   */
  nextFocusDown: PropTypes.number,

  /**
   * Sets the next view to receive focus when navigating forward on Android TV.
   */
  nextFocusForward: PropTypes.number,

  /**
   * Sets the next view to receive focus when navigating left on Android TV.
   */
  nextFocusLeft: PropTypes.number,

  /**
   * Sets the next view to receive focus when navigating right on Android TV.
   */
  nextFocusRight: PropTypes.number,

  /**
   * Sets the next view to receive focus when navigating up on Android TV.
   */
  nextFocusUp: PropTypes.number,

  /**
   * Identifier for end-to-end tests.
   */
  testID: PropTypes.string,

  /**
   * Disables touch sound on Android.
   */
  touchSoundDisabled: PropTypes.bool,
};

export { Button as default };
