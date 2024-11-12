import * as React from "react";
import PropTypes from "prop-types";
import { ScrollView as ScrollViewM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/scrollview
 * @uxpindescription Component that wraps platform ScrollView while providing integration with touch locking "responder" system
 */
function ScrollView(props) {
  return <ScrollViewM {...props}>{props.children}</ScrollViewM>;
}

ScrollView.propTypes = {
  /**
   * Content of ScrollView
   */
  children: PropTypes.node,
  /**
   * A React Component to render sticky headers.
   */
  StickyHeaderComponent: PropTypes.node,

  /**
   * Controls whether the scroll view bounces horizontally.
   */
  alwaysBounceHorizontal: PropTypes.bool,

  /**
   * Controls whether the scroll view bounces vertically.
   */
  alwaysBounceVertical: PropTypes.bool,

  /**
   * Automatically adjusts the content inset for navigation bars.
   */
  automaticallyAdjustContentInsets: PropTypes.bool,

  /**
   * Automatically adjusts the content inset when the keyboard changes.
   */
  automaticallyAdjustKeyboardInsets: PropTypes.bool,

  /**
   * Automatically adjusts the scroll indicator insets.
   */
  automaticallyAdjustsScrollIndicatorInsets: PropTypes.bool,

  /**
   * Enables/disables bouncing when reaching the end of the content.
   */
  bounces: PropTypes.bool,

  /**
   * Allows gestures to zoom past min/max scale limits.
   */
  bouncesZoom: PropTypes.bool,

  /**
   * Controls if touches should be cancelled when dragging.
   */
  canCancelContentTouches: PropTypes.bool,

  /**
   * Centers content when smaller than the scroll view.
   */
  centerContent: PropTypes.bool,

  /**
   * Styles applied to the scroll view content container.
   * @uxpincontroltype css
   */
  contentContainerStyle: PropTypes.object,

  /**
   * Insets for the scroll view content.
   */
  contentInset: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }),

  /**
   * Controls safe area inset adjustments on iOS.
   */
  contentInsetAdjustmentBehavior: PropTypes.oneOf([
    "automatic",
    "scrollableAxes",
    "never",
    "always",
  ]),

  /**
   * Sets the initial scroll offset.
   */
  contentOffset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),

  /**
   * Controls the deceleration rate after a drag.
   */
  decelerationRate: PropTypes.oneOfType([
    PropTypes.oneOf(["fast", "normal"]),
    PropTypes.number,
  ]),

  /**
   * Locks the scroll direction to vertical or horizontal.
   */
  directionalLockEnabled: PropTypes.bool,

  /**
   * Stops on the next index when releasing drag.
   */
  disableIntervalMomentum: PropTypes.bool,

  /**
   * Disables the default JS pan responder.
   */
  disableScrollViewPanResponder: PropTypes.bool,

  /**
   * Fills empty scrollview space with a color.
   * @uxpincontroltype color
   */
  endFillColor: PropTypes.string,

  /**
   * Fades out the edges of the scroll content.
   */
  fadingEdgeLength: PropTypes.number,

  /**
   * Arranges children horizontally.
   */
  horizontal: PropTypes.bool,

  /**
   * Style of the scroll indicators.
   */
  indicatorStyle: PropTypes.oneOf(["default", "black", "white"]),

  /**
   * Sets sticky headers to stick at the bottom.
   */
  invertStickyHeaders: PropTypes.bool,

  /**
   * Determines if drag should dismiss the keyboard.
   */
  keyboardDismissMode: PropTypes.oneOf(["none", "on-drag", "interactive"]),

  /**
   * Determines when the keyboard should stay visible after a tap.
   */
  keyboardShouldPersistTaps: PropTypes.oneOf(["always", "never", "handled"]),

  /**
   * Adjusts scroll position to keep visible content in place.
   */
  maintainVisibleContentPosition: PropTypes.shape({
    minIndexForVisible: PropTypes.number,
    autoscrollToTopThreshold: PropTypes.number,
  }),

  /**
   * Sets the maximum zoom scale.
   */
  maximumZoomScale: PropTypes.number,

  /**
   * Sets the minimum zoom scale.
   */
  minimumZoomScale: PropTypes.number,

  /**
   * Enables nested scrolling on Android.
   */
  nestedScrollEnabled: PropTypes.bool,

  /**
   * Callback when scrollable content size changes.
   */
  onContentSizeChange: PropTypes.func,

  /**
   * Callback when momentum scroll starts.
   */
  onMomentumScrollBegin: PropTypes.func,

  /**
   * Callback when momentum scroll ends.
   */
  onMomentumScrollEnd: PropTypes.func,

  /**
   * Fires at most once per frame during scrolling.
   */
  onScroll: PropTypes.func,

  /**
   * Called when user begins to drag.
   */
  onScrollBeginDrag: PropTypes.func,

  /**
   * Called when user stops dragging and scroll view stops or glides.
   */
  onScrollEndDrag: PropTypes.func,

  /**
   * Called when scroll view scrolls to the top (iOS only).
   */
  onScrollToTop: PropTypes.func,

  /**
   * Controls over-scroll mode on Android.
   */
  overScrollMode: PropTypes.oneOf(["auto", "always", "never"]),

  /**
   * Stops scrolling on multiples of scroll view's size.
   */
  pagingEnabled: PropTypes.bool,

  /**
   * Makes scrollbars persistent on Android.
   */
  persistentScrollbar: PropTypes.bool,

  /**
   * Enables pinch gestures for zooming (iOS only).
   */
  pinchGestureEnabled: PropTypes.bool,

  /**
   * A RefreshControl component for pull-to-refresh.
   */
  refreshControl: PropTypes.element,

  /**
   * Removes offscreen child views for optimization.
   */
  removeClippedSubviews: PropTypes.bool,

  /**
   * Enables or disables scroll interaction.
   */
  scrollEnabled: PropTypes.bool,

  /**
   * Throttle interval for scroll events in ms.
   */
  scrollEventThrottle: PropTypes.number,

  /**
   * Insets for the scroll indicators.
   */
  scrollIndicatorInsets: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }),

  /**
   * Tag used to log scroll performance.
   */
  scrollPerfTag: PropTypes.string,

  /**
   * Allows programmatic scrolling beyond content size (iOS only).
   */
  scrollToOverflowEnabled: PropTypes.bool,

  /**
   * Enables scrolling to the top when the status bar is tapped (iOS only).
   */
  scrollsToTop: PropTypes.bool,

  /**
   * Shows horizontal scroll indicator.
   */
  showsHorizontalScrollIndicator: PropTypes.bool,

  /**
   * Shows vertical scroll indicator.
   */
  showsVerticalScrollIndicator: PropTypes.bool,

  /**
   * Snap alignment when snapToInterval is set.
   */
  snapToAlignment: PropTypes.oneOf(["start", "center", "end"]),

  /**
   * Use in conjunction with snapToOffsets. Allows snapping to the end of the list.
   */
  snapToEnd: PropTypes.bool,

  /**
   * Stops at multiples of this value when scrolling.
   */
  snapToInterval: PropTypes.number,

  /**
   * Sets specific offsets where the scroll view stops.
   */
  snapToOffsets: PropTypes.arrayOf(PropTypes.number),

  /**
   * Disables snapping to the start of the list.
   */
  snapToStart: PropTypes.bool,

  /**
   * Hides sticky header on scroll down, docks on scroll up.
   */
  stickyHeaderHiddenOnScroll: PropTypes.bool,

  /**
   * Determines which children get docked to the top when scrolling.
   */
  stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number),

  /**
   * Sets the zoom scale for the scroll view content (iOS only).
   */
  zoomScale: PropTypes.number,
};

export default ScrollView;
