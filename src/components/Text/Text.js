import PropTypes from "prop-types";
import * as React from "react";
import { Text as TextM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/text
 */
function Text(props) {
  return <TextM {...props}>{props.children}</TextM>;
}

Text.propTypes = {
  /**
   * Used to locate this view from native code.
   */
  nativeID: PropTypes.string,
  /**
   *
   */
  children: PropTypes.node,

  /**
   * When set to true, indicates that the view is an accessibility element.
   */
  accessible: PropTypes.bool,

  /**
   * Lets the user select text, to use the native copy and paste functionality. */
  selectable: PropTypes.bool,

  /**
   * Specifies whether fonts should be scaled down automatically to fit given style constraints.
   */
  adjustsFontSizeToFit: PropTypes.bool,

  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings.
   */
  allowFontScaling: PropTypes.bool,

  /**
   * An accessibility hint helps users understand what will happen
   * when they perform an action on the accessibility element when that result is not clear from the accessibility label.
   */
  accessibilityHint: PropTypes.string,

  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element.
   * By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Tells the screen reader to treat the currently focused on element as having a specific role.
   * On iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality
   * as if the trait was set to both 'image' and 'button'. See the https://reactnative.dev/docs/accessibility#accessibilitytraits-ios for more information.
   * On Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS
   * https://reactnative.dev/docs/accessibility#accessibilityrole
   * @uxpinignoreprop
   */
  accessibilityRole: PropTypes.element,

  /**
   * Tells the screen reader to treat the currently focused on element as being in a specific state.
   * You can provide one state, no state, or multiple states. The states must be passed in through an object. Ex: {selected: true, disabled: true}.
   * https://reactnative.dev/docs/accessibility#accessibilitystate
   */
  accessibilityState: PropTypes.object,

  /**
   * Accessibility actions allow an assistive technology to programmatically invoke the actions of a component.
   * The accessibilityActions property should contain a list of action objects. Each action object should contain the field name and label.
   */
  accessibilityActions: PropTypes.array,

  /**
   * Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.
   */
  onAccessibilityAction: PropTypes.func,

  /** Andriod
   * Specifies the disabled state of the text view for testing purposes.
   */
  disabled: PropTypes.bool,

  /** Andriod
   * Sets the frequency of automatic hyphenation to use when determining word breaks on Android API Level 23+.
   */
  android_hyphenationFrequency: PropTypes.oneOf(["none", "normal", "full"]),

  /** Andriod
   * The highlight color of the text. */
  selectionColor: PropTypes.string,

  /**
   * Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced.
   */
  textBreakStrategy: PropTypes.oneOf(["simple", "highQuality", "balanced"]),

  /** iOS
   * Specifies the smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).
   */
  minimumFontScale: PropTypes.number,

  /** iOS
   * When true, no visual change is made when text is pressed down.
   * By default, a gray oval highlights the text on press down. */
  suppressHighlighting: PropTypes.bool,

  /**
   * Determines the types of data converted to clickable URLs in the text element. By default, no data types are detected.
   */
  dataDetectorType: PropTypes.oneOf([
    "none",
    "phoneNumber",
    "link",
    "email",
    "all",
  ]),

  /**
   * When numberOfLines is set, this prop defines how the text will be truncated. numberOfLines must be set in conjunction with this prop.
   * head - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
   * middle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
   * tail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
   * clip - Lines are not drawn past the edge of the text container.
   */
  ellipsizeMode: PropTypes.oneOf(["head", "middle", "tall", "clip"]),

  /**
   * Specifies the largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
   * null/undefined: inherit from the parent node or the global default (0)
   * 0: no max, ignore parent/global default
   * >= 1: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier: PropTypes.number,

  /**
   * Used to truncate the text with an ellipsis after computing the text layout,
   * including line wrapping, such that the total number of lines does not exceed this number.
   * Setting this property to 0 will result in unsetting this value, which means that no lines restriction will be applied.
   */
  numberOfLines: PropTypes.number,

  /**
   * Invoked on mount and on layout changes.
   * ({ nativeEvent: LayoutEvent }) => void
   */
  onLayout: PropTypes.func,

  /**
   * This function is called on long press.
   * ({ nativeEvent: PressEvent }) => void
   */
  onLongPress: PropTypes.func,

  /**
   * Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.
   * ({ nativeEvent: PressEvent }) => boolean
   */
  onMoveShouldSetResponder: PropTypes.func,

  /**
   * This function is called on press.
   * ({ nativeEvent: PressEvent }) => void
   */
  onPress: PropTypes.func,

  /**
   * The View is now responding to touch events. This is the time to highlight and show the user what is happening.
   * ({ nativeEvent: PressEvent }) => void
   */
  onResponderGrant: PropTypes.func,

  /**
   * The user is moving their finger.
   */
  onResponderMove: PropTypes.func,

  /**
   * Fired at the end of the touch.
   * */
  onResponderRelease: PropTypes.func,

  /**
   * The responder has been taken from the View.
   * Might be taken by other views after a call to onResponderTerminationRequest,
   * or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)
   * ({ nativeEvent: PressEvent }) => void
   */
  onResponderTerminate: PropTypes.func,

  /**
   * Some other View wants to become a responder and is asking this View to release its responder.
   * Returning true allows its release.
   * ({ nativeEvent: PressEvent }) => boolean
   */
  onResponderTerminationRequest: PropTypes.func,

  /**
   * If a parent View wants to prevent a child View from becoming a responder on a touch start,
   * it should have this handler which returns true.
   * ({ nativeEvent: PressEvent }) => boolean
   */
  onStartShouldSetResponderCapture: PropTypes.func,

  /**
   * Invoked on Text layout change.
   * (TextLayoutEvent) => mixed
   */
  onTextLayout: PropTypes.func,

  /**
   * When the scroll view is disabled, this defines how far your touch may move off of the button,
   * before deactivating the button. Once deactivated,
   * try moving it back and you'll see that the button is once again reactivated!
   * Move it back and forth several times while the scroll view is disabled.
   * Ensure you pass in a constant to reduce memory allocations. */
  pressRetentionOffset: PropTypes.object,
  /**
   * Style override
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID: PropTypes.string,
};

export default Text;
