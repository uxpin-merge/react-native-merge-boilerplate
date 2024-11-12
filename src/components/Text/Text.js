import PropTypes from "prop-types";
import * as React from "react";
import { Text as TextM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/text
 * @uxpindescription A React component for displaying text.
 */
function Text(props) {
  return <TextM {...props}>{props.children}</TextM>;
}

Text.propTypes = {
  /**
   * The text content
   */
  children: PropTypes.node,

  /**
   * Provides an accessibility hint to describe what happens when an element is activated.
   */
  accessibilityHint: PropTypes.string,

  /**
   * Specifies the language for the screen reader, following BCP 47.
   */
  accessibilityLanguage: PropTypes.string,

  /**
   * Overrides the text read by the screen reader for this element.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Declares the role of this element to assistive technologies.
   */
  accessibilityRole: PropTypes.oneOf([
    "none",
    "button",
    "link",
    "image",
    "text",
    "search",
    "adjustable",
    "header",
    "summary",
    "alert",
    "checkbox",
    "combobox",
    "menu",
    "menubar",
    "menuitem",
    "progressbar",
    "radio",
    "radiogroup",
    "scrollbar",
    "switch",
    "tab",
    "tablist",
    "timer",
    "toolbar",
    "grid",
  ]),

  /**
   * Defines the accessibility state of the component.
   */
  accessibilityState: PropTypes.shape({
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["mixed"])]),
    busy: PropTypes.bool,
    expanded: PropTypes.bool,
  }),

  /**
   * List of actions that assistive technology can trigger.
   */
  accessibilityActions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),

  /**
   * Callback for accessibility actions.
   */
  onAccessibilityAction: PropTypes.func,

  /**
   * Indicates the view is accessible by assistive technology.
   */
  accessible: PropTypes.bool,

  /**
   * Adjusts font size to fit within bounds if true.
   */
  adjustsFontSizeToFit: PropTypes.bool,

  /**
   * Allows font scaling based on device settings.
   */
  allowFontScaling: PropTypes.bool,

  /**
   * Hyphenation frequency for text on Android.
   */
  android_hyphenationFrequency: PropTypes.oneOf(["none", "normal", "full"]),

  /**
   * Indicates if element is busy for ARIA support.
   */
  ariaBusy: PropTypes.bool,

  /**
   * Describes the checkable state of an element.
   */
  ariaChecked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["mixed"]),
  ]),

  /**
   * ARIA attribute to indicate an element is disabled.
   */
  ariaDisabled: PropTypes.bool,

  /**
   * ARIA attribute indicating whether the element is expanded.
   */
  ariaExpanded: PropTypes.bool,

  /**
   * ARIA label for the element.
   */
  ariaLabel: PropTypes.string,

  /**
   * ARIA selected state for selectable elements.
   */
  ariaSelected: PropTypes.bool,

  /**
   * Data detector type to recognize certain data patterns.
   */
  dataDetectorType: PropTypes.oneOf([
    "phoneNumber",
    "link",
    "email",
    "none",
    "all",
  ]),

  /**
   * Specifies if text element is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Dynamic type ramp to apply on iOS.
   */
  dynamicTypeRamp: PropTypes.oneOf([
    "caption2",
    "caption1",
    "footnote",
    "subheadline",
    "callout",
    "body",
    "headline",
    "title3",
    "title2",
    "title1",
    "largeTitle",
  ]),

  /**
   * Text truncation mode when numberOfLines is set.
   */
  ellipsizeMode: PropTypes.oneOf(["head", "middle", "tail", "clip"]),

  /**
   * ID for native code reference.
   */
  id: PropTypes.string,

  /**
   * Maximum font scale factor.
   */
  maxFontSizeMultiplier: PropTypes.number,

  /**
   * Minimum font scale factor when adjustsFontSizeToFit is enabled.
   */
  minimumFontScale: PropTypes.number,

  /**
   * ID for locating view in native code.
   */
  nativeID: PropTypes.string,

  /**
   * Limits the number of text lines displayed.
   */
  numberOfLines: PropTypes.number,

  /**
   * Called on layout change.
   */
  onLayout: PropTypes.func,

  /**
   * Triggered on a long press gesture.
   */
  onLongPress: PropTypes.func,

  /**
   * Determines if the view should respond to a move gesture.
   */
  onMoveShouldSetResponder: PropTypes.func,

  /**
   * Triggered when element is pressed.
   */
  onPress: PropTypes.func,

  /**
   * Triggered when the press is initiated.
   */
  onPressIn: PropTypes.func,

  /**
   * Triggered when the press is released.
   */
  onPressOut: PropTypes.func,

  /**
   * Triggers when view becomes the responder for touch events.
   */
  onResponderGrant: PropTypes.func,

  /**
   * Triggers on touch move gesture.
   */
  onResponderMove: PropTypes.func,

  /**
   * Triggered when touch interaction ends.
   */
  onResponderRelease: PropTypes.func,

  /**
   * Triggered if responder is taken by another element.
   */
  onResponderTerminate: PropTypes.func,

  /**
   * Determines if responder should terminate.
   */
  onResponderTerminationRequest: PropTypes.func,

  /**
   * Prevents child views from becoming responder on touch start.
   */
  onStartShouldSetResponderCapture: PropTypes.func,

  /**
   * Callback when text layout changes.
   */
  onTextLayout: PropTypes.func,

  /**
   * Adjusts press offset area.
   */
  pressRetentionOffset: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      right: PropTypes.number,
    }),
    PropTypes.number,
  ]),

  /**
   * Defines role of the element, overriding accessibilityRole.
   */
  role: PropTypes.string,

  /**
   * Enables text selection.
   */
  selectable: PropTypes.bool,

  /**
   * Highlight color of selected text on Android.
   * @uxpincontroltype color
   */
  selectionColor: PropTypes.string,

  /**
   * Style for text and view.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Suppresses highlighting when text is pressed (iOS only).
   */
  suppressHighlighting: PropTypes.bool,

  /**
   * Identifier for end-to-end tests.
   */
  testID: PropTypes.string,

  /**
   * Text break strategy for Android.
   */
  textBreakStrategy: PropTypes.oneOf(["simple", "highQuality", "balanced"]),

  /**
   * Line break strategy for iOS 14+.
   */
  lineBreakStrategyIOS: PropTypes.oneOf([
    "none",
    "standard",
    "hangul-word",
    "push-out",
  ]),
};

export default Text;
