import PropTypes from "prop-types";
import * as React from "react";
import { View as ViewM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/view
 * @uxpindescription The most fundamental component for building a UI, View is a container that supports layout
 */
function View(props) {
  return <ViewM {...props}>{props.children}</ViewM>;
}

View.propTypes = {
  /**
   * The content of View.
   */
  children: PropTypes.node,

  /**
   * Accessibility actions to invoke programmatically.
   */
  accessibilityActions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),

  /**
   * A value indicating whether the accessibility elements are hidden.
   */
  accessibilityElementsHidden: PropTypes.bool,

  /**
   * Accessibility hint for assistive technologies.
   */
  accessibilityHint: PropTypes.string,

  /**
   * Language for screen readers.
   */
  accessibilityLanguage: PropTypes.string,

  /**
   * Prevents inversion when color inversion is enabled.
   */
  accessibilityIgnoresInvertColors: PropTypes.bool,

  /**
   * Override text read by screen reader.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Indicates if user should be notified when view changes (Android only).
   */
  accessibilityLiveRegion: PropTypes.oneOf(["none", "polite", "assertive"]),

  /**
   * Communicates purpose of component to assistive technology.
   */
  accessibilityRole: PropTypes.oneOf([
    "none",
    "button",
    "link",
    "search",
    "image",
    "keyboardkey",
    "text",
    "adjustable",
    "imagebutton",
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
    "spinbutton",
    "switch",
    "tab",
    "tablist",
    "timer",
    "toolbar",
    "grid",
  ]),

  /**
   * Describes the current state of a component to assistive technology.
   */
  accessibilityState: PropTypes.shape({
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["mixed"])]),
    busy: PropTypes.bool,
    expanded: PropTypes.bool,
  }),

  /**
   * Represents the current value of a component.
   */
  accessibilityValue: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
    now: PropTypes.number,
    text: PropTypes.string,
  }),

  /**
   * Controls whether this View is an accessibility element.
   */
  accessible: PropTypes.bool,

  /**
   * Boolean to indicate if element is busy.
   */
  ariaBusy: PropTypes.bool,

  /**
   * State of a checkable element.
   */
  ariaChecked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["mixed"]),
  ]),

  /**
   * Indicates that the element is disabled but perceivable.
   */
  ariaDisabled: PropTypes.bool,

  /**
   * Whether an expandable element is currently expanded or collapsed.
   */
  ariaExpanded: PropTypes.bool,

  /**
   * Hides accessibility elements within this element.
   */
  ariaHidden: PropTypes.bool,

  /**
   * Labels an interactive element.
   */
  ariaLabel: PropTypes.string,

  /**
   * Specifies a label by reference ID.
   */
  ariaLabelledby: PropTypes.string,

  /**
   * Indicates that an element will update and describes the types of updates.
   */
  ariaLive: PropTypes.oneOf(["assertive", "off", "polite"]),

  /**
   * Specifies whether the view is modal in accessibility.
   */
  ariaModal: PropTypes.bool,

  /**
   * Indicates whether a selectable element is currently selected.
   */
  ariaSelected: PropTypes.bool,

  /**
   * Represents the maximum value for range-based components.
   */
  ariaValuemax: PropTypes.number,

  /**
   * Represents the minimum value for range-based components.
   */
  ariaValuemin: PropTypes.number,

  /**
   * Represents the current value for range-based components.
   */
  ariaValuenow: PropTypes.number,

  /**
   * Textual description of the component.
   */
  ariaValuetext: PropTypes.string,

  /**
   * When true, collapses view.
   */
  collapsable: PropTypes.bool,

  /**
   * Whether this view is focusable.
   */
  focusable: PropTypes.bool,

  /**
   * Expands touchable area of the component.
   */
  hitSlop: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }),

  /**
   * Used to locate this view from native classes.
   */
  id: PropTypes.string,

  /**
   * Controls view importance for accessibility (Android only).
   */
  importantForAccessibility: PropTypes.oneOf([
    "auto",
    "yes",
    "no",
    "no-hide-descendants",
  ]),

  /**
   * Native ID for locating view in native classes.
   */
  nativeID: PropTypes.string,

  /**
   * Renders view offscreen for correct color/alpha behavior.
   */
  needsOffscreenAlphaCompositing: PropTypes.bool,

  /**
   * Designates the next view to receive focus (Android only).
   */
  nextFocusDown: PropTypes.number,
  nextFocusForward: PropTypes.number,
  nextFocusLeft: PropTypes.number,
  nextFocusRight: PropTypes.number,
  nextFocusUp: PropTypes.number,

  /**
   * Invoked on accessibility action.
   */
  onAccessibilityAction: PropTypes.func,

  /**
   * Invoked on escape gesture (iOS only).
   */
  onAccessibilityEscape: PropTypes.func,

  /**
   * Invoked on accessibility tap gesture (iOS only).
   */
  onAccessibilityTap: PropTypes.func,

  /**
   * Invoked on mount and on layout changes.
   */
  onLayout: PropTypes.func,

  /**
   * Invoked on magic tap gesture (iOS only).
   */
  onMagicTap: PropTypes.func,

  /**
   * Controls responder behavior.
   */
  onMoveShouldSetResponder: PropTypes.func,
  onMoveShouldSetResponderCapture: PropTypes.func,
  onResponderGrant: PropTypes.func,
  onResponderMove: PropTypes.func,
  onResponderReject: PropTypes.func,
  onResponderRelease: PropTypes.func,
  onResponderTerminate: PropTypes.func,
  onResponderTerminationRequest: PropTypes.func,
  onStartShouldSetResponder: PropTypes.func,
  onStartShouldSetResponderCapture: PropTypes.func,

  /**
   * Pointer event settings.
   */
  pointerEvents: PropTypes.oneOf(["auto", "none", "box-none", "box-only"]),

  /**
   * Removes subviews outside view bounds.
   */
  removeClippedSubviews: PropTypes.bool,

  /**
   * Renders view as single texture on GPU (Android only).
   */
  renderToHardwareTextureAndroid: PropTypes.bool,

  /**
   * Specifies role, takes precedence over accessibilityRole.
   */
  role: PropTypes.string,

  /**
   * Rasterizes view as a bitmap before compositing (iOS only).
   */
  shouldRasterizeIOS: PropTypes.bool,

  /**
   * Style for view.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Focus setting for keyboard navigation (Android only).
   */
  tabIndex: PropTypes.oneOf([0, -1]),

  /**
   * Used to locate this view in tests.
   */
  testID: PropTypes.string,
};

export default View;
