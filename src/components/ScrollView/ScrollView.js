import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView as ScrollViewM } from 'react-native';
import { colorVariants } from '../../styles/Colors';

/**
 * @uxpindocurl https://reactnative.dev/docs/scrollview
 */
function ScrollView(props) {
    return <ScrollViewM {...props}>{props.children}</ScrollViewM>
}

ScrollView.propTypes = {
    /**
     * @uxpinignorepropp
     */
    children: PropTypes.node,

    /**
     * Use in conjunction with snapToOffsets. By default, the beginning of the list counts as a snap offset. 
     * Set snapToStart to false to disable this behavior and allow the list to scroll freely between its start and the first snapToOffsets offset.
     */
     snapToStart: PropTypes.bool,

    /**
     * Use in conjunction with snapToOffsets. By default, the end of the list counts as a snap offset. 
     * Set snapToEnd to false to disable this behavior and allow the list to scroll freely between its end and the last snapToOffsets offset.
     */
     snapToEnd: PropTypes.bool,

    /**
     * Experimental: When true, offscreen child views (whose overflow value is hidden) are removed from their native backing superview when offscreen. 
     * This can improve scrolling performance on long lists.
     */
     removeClippedSubviews: PropTypes.bool,

     /**
      * When set to true, sticky header will be hidden when scrolling down the list, and it will dock at the top of the list when scrolling up.
      */
     stickyHeaderHiddenOnScroll: PropTypes.bool,

     /**
      * When false, the view cannot be scrolled via touch interaction.
      * Note that the view can always be scrolled by calling scrollTo.
      */
     scrollEnabled: PropTypes.bool,

    /**
     * When true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.
     */
     horizontal: PropTypes.bool,

     /**
      * If sticky headers should stick at the bottom instead of the top of the ScrollView. This is usually used with inverted ScrollViews.
      */
     invertStickyHeaders: PropTypes.bool,

    /**
     * When true, the scroll view stops on the next index (in relation to scroll position at release) regardless of how fast the gesture is. 
     * This can be used for pagination when the page is less than the width of the horizontal ScrollView or the height of the vertical ScrollView.
     */
     disableIntervalMomentum: PropTypes.bool,

     /**
      * When true, the default JS pan responder on the ScrollView is disabled, and full control over touches inside the ScrollView is left to its child components. 
      * This is particularly useful if snapToInterval is enabled, since it does not follow typical touch patterns. 
      * Do not use this on regular ScrollView use cases without snapToInterval as it may cause unexpected touches to occur while scrolling.
      */
     disableScrollViewPanResponder: PropTypes.bool,

     /**
      * When true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.
      * Note: Vertical pagination is not supported on Android.
      */
     pagingEnabled: PropTypes.bool,

     /**
      * When true, shows a horizontal scroll indicator.
      */
     showsHorizontalScrollIndicator: PropTypes.bool,

     /**
      * When true, shows a vertical scroll indicator.
      */
     showsVerticalScrollIndicator: PropTypes.bool,

    /**
     * A React Component that will be used to render sticky headers, should be used together with stickyHeaderIndices. 
     * You may need to set this component if your sticky header uses custom transforms, for example, 
     * when you want your list to have an animated and hidable header. If component have not been provided, the default ScrollViewStickyHeader component will be used.
     */
     StickyHeaderComponent: PropTypes.element,

     /**
      * A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView. Only works for vertical ScrollViews (horizontal prop must be false).
      * https://reactnative.dev/docs/refreshcontrol
      */
     refreshControl: PropTypes.element, 

     /**
      * Called when scrollable content view of the ScrollView changes.
      * Handler function is passed the content width and content height as parameters: (contentWidth, contentHeight)
      * It's implemented using onLayout handler attached to the content container which this ScrollView renders.
      */
     onContentSizeChange: PropTypes.func,

     /**
      * Called when the momentum scroll starts (scroll which occurs as the ScrollView starts gliding).
      */
     onMomentumScrollBegin: PropTypes.func,

     /**
      * Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).
      */
     onMomentumScrollEnd: PropTypes.func,
     
     /**
      * Fires at most once per frame during scrolling. The frequency of the events can be controlled using the scrollEventThrottle prop. 
      * The event has the following shape (all values are numbers):
      */
     onScroll: PropTypes.func,

     /**
      * Called when the user begins to drag the scroll view.
      */
     onScrollBeginDrag: PropTypes.func,

     /**
      * Called when the user stops dragging the scroll view and it either stops or begins to glide.
      */
     onScrollEndDrag: PropTypes.func,

     /** iOS
      * The maximum allowed zoom scale.
      */
     maximumZoomScale: PropTypes.number,

     /** iOS
      * The minimum allowed zoom scale.
      */
     minimumZoomScale: PropTypes.number,

     /** iOS
      * This controls how often the scroll event will be fired while scrolling (as a time interval in ms). 
      * A lower number yields better accuracy for code that is tracking the scroll position,
      * but can lead to scroll performance problems due to the volume of information being sent over the bridge. 
      * You will not notice a difference between values set between 1-16 as the JS run loop is synced to the screen refresh rate. 
      * If you do not need precise scroll position tracking, set this value higher to limit the information being sent across the bridge. 
      * The default value is 0, which results in the scroll event being sent only once each time the view is scrolled.
      */
     scrollEventThrottle: PropTypes.number,

     /**
      * When set, causes the scroll view to stop at the defined offsets. 
      * This can be used for paginating through variously sized children that have lengths smaller than the scroll view. 
      * Typically used in combination with decelerationRate="fast". Overrides less configurable pagingEnabled and snapToInterval props.
      */
     snapToOffsets: PropTypes.arrayOf(PropTypes.number),

     /**
      * An array of child indices determining which children get docked to the top of the screen when scrolling. 
      * For example, passing stickyHeaderIndices={[0]} will cause the first child to be fixed to the top of the scroll view. 
      * You can also use like [x,y,z] to make multiple items sticky when they are at the top. 
      * This property is not supported in conjunction with horizontal={true}.
      */
     stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number),     

     /**
      * When set, causes the scroll view to stop at multiples of the value of snapToInterval. 
      * This can be used for paginating through children that have lengths smaller than the scroll view. 
      * Typically used in combination with snapToAlignment and decelerationRate="fast". Overrides less configurable pagingEnabled prop.
      */
     snapToInterval: PropTypes.number,

     /** iOS
      * When true, the scroll view can be programmatically scrolled beyond its content size.
      */
     scrollToOverflowEnabled: PropTypes.bool,

     /** iOS
      * When true, the scroll view scrolls to top when the status bar is tapped.
      */
     scrollsToTop: PropTypes.bool,

     /** iOS
      * When true, ScrollView allows use of pinch gestures to zoom in and out.
      */
     pinchGestureEnabled: PropTypes.bool, 

     /** iOS
      * When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself.
      * true when horizontal={true}
      * false otherwise
      */
     alwaysBounceHorizontal: PropTypes.bool,

     /** iOS
      * The current scale of the scroll view content.
      */
     zoomScale: PropTypes.number,

     /** iOS
      * When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself.
      * false when vertical={true}
      * true otherwise
      */
     alwaysBounceVertical: PropTypes.bool,

     /** iOS
      * Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/toolbar.
      */
     automaticallyAdjustContentInsets: PropTypes.bool,

     /** iOS
      * Controls whether iOS should automatically adjust the scroll indicator insets. See Apple's documentation on the property https://developer.apple.com/documentation/uikit/uiscrollview/3198043-automaticallyadjustsscrollindica.
      */
     automaticallyAdjustsScrollIndicatorInsets: PropTypes.bool,
     
     /** iOS
      * Controls whether iOS should automatically adjust the scroll indicator insets. See Apple's https://developer.apple.com/documentation/uikit/uiscrollview/3198043-automaticallyadjustsscrollindica
      */
     bounces: PropTypes.bool,
     
     /** iOS
      * When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.
      */
     bouncesZoom: PropTypes.bool,

     /** iOS
      * When false, once tracking starts, won't try to drag if the touch moves.
      */
     canCancelContentTouches: PropTypes.bool,
     
     /** iOS
      * When true, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect.
      */
     centerContent: PropTypes.bool,

     /** iOS
      * When true, the ScrollView will try to lock to only vertical or horizontal scrolling while dragging.
      */
     directionalLockEnabled: PropTypes.bool,
     
     /**
      * These styles will be applied to the scroll view content container which wraps all of the child views.
      */
     contentContainerStyle: PropTypes.object,
     
     /** iOS
      * The amount by which the scroll view content is inset from the edges of the scroll view.
      * object: {top: number, left: number, bottom: number, right: number}
      */
     contentInset: PropTypes.object,

     /** iOS
      * Fires when the scroll view scrolls to top after the status bar has been tapped.
      */
     onScrollToTop: PropTypes.func,

     /** iOS
      * When set, the scroll view will adjust the scroll position so that the first child that is currently visible and at or beyond minIndexForVisible 
      * will not change position. This is useful for lists that are loading content in both directions, e.g. a chat thread, 
      * where new messages coming in might otherwise cause the scroll position to jump. A value of 0 is common, 
      * but other values such as 1 can be used to skip loading spinners or other content that should not maintain position.
      * 
      * The optional autoscrollToTopThreshold can be used to make the content automatically scroll to the top after making the adjustment 
      * if the user was within the threshold of the top before the adjustment was made. 
      * This is also useful for chat-like applications where you want to see new messages scroll into place, 
      * but not if the user has scrolled up a ways and it would be disruptive to scroll a bunch.
      * 
      * Caveat 1: Reordering elements in the scrollview with this enabled will probably cause jumpiness and jank. 
      * It can be fixed, but there are currently no plans to do so. For now, don't re-order the content of any ScrollViews or Lists that use this feature.
      * 
      * Caveat 2: This uses contentOffset and frame.origin in native code to compute visibility. Occlusion, transforms, 
      * and other complexity won't be taken into account as to whether content is "visible" or not.
      * object: { minIndexForVisible: number, autoscrollToTopThreshold: number }
      */
     maintainVisibleContentPosition: PropTypes.object,

     /** iOS
      * The amount by which the scroll view indicators are inset from the edges of the scroll view. This should normally be set to the same value as the contentInset.
      * object: {top: number, left: number, bottom: number, right: number}
      */
     scrollIndicatorInsets: PropTypes.object,

     /** iOS
      * The style of the scroll indicators.
      * 'default' same as black.
      * 'black', scroll indicator is black. This style is good against a light background.
      * 'white', scroll indicator is white. This style is good against a dark background.
      */
     indicatorStyle: PropTypes.oneOf(['default', 'black', 'white']),

     /** iOS
      * When snapToInterval is set, snapToAlignment will define the relationship of the snapping to the scroll view.
      * 'start' will align the snap at the left (horizontal) or top (vertical).
      * 'center' will align the snap in the center.
      * 'end' will align the snap at the right (horizontal) or bottom (vertical).
      */
     snapToAlignment: PropTypes.oneOf(['start', 'center', 'end']),

     /** iOS
      * This property specifies how the safe area insets are used to modify the content area of the scroll view. Available on iOS 11 and later.
      */
     contentInsetAdjustmentBehavior: PropTypes.oneOf(['automatic', 'scrollableAxes', 'never', 'always']),

     /** Andriod
      * Tag used to log scroll performance on this scroll view. Will force momentum events to be turned on (see sendMomentumEvents). 
      * This doesn't do anything out of the box and you need to implement a custom native FpsListener for it to be useful.
      */
     scrollPerfTag: PropTypes.string,

     /** Andriod
      * Causes the scrollbars not to turn transparent when they are not in use.
      */
     persistentScrollbar: PropTypes.bool,
     
     /** Andriod
      * Enables nested scrolling for Android API level 21+.
      */
     nestedScrollEnabled: PropTypes.bool,
     /** Andriod
      * Fades out the edges of the the scroll content.
      * If the value is greater than 0, the fading edges will be set accordingly to the current scroll direction and position, indicating if there is more content to show.
      */
     fadingEdgeLength: PropTypes.number,

     /** Andriod
      * Sometimes a scrollview takes up more space than its content fills. When this is the case, 
      * this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. 
      * This is an advanced optimization that is not needed in the general case.
      */
     endFillColor: PropTypes.oneOf(colorVariants),

     /** Andriod
      * Used to override default value of overScroll mode.
      * 'auto' - Allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.
      * 'always' - Always allow a user to over-scroll this view.
      * 'never' - Never allow a user to over-scroll this view.
      */
     overScrollMode: PropTypes.oneOf(['auto', 'always', 'never']),

     /**
      * A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. 
      * You may also use string shortcuts "normal" and "fast" which match the underlying iOS settings for 
      * UIScrollViewDecelerationRateNormal and UIScrollViewDecelerationRateFast respectively.
      * normal' 0.998 on iOS, 0.985 on Android.
      * 'fast', 0.99 on iOS, 0.9 on Android.
      */
     decelerationRate: PropTypes.oneOf(['fast', 'normal']),

     /**
      * Determines whether the keyboard gets dismissed in response to a drag.
      * 'none', drags do not dismiss the keyboard.
      * 'on-drag', the keyboard is dismissed when a drag begins.
      * iOS Only
      * 'interactive', the keyboard is dismissed interactively with the drag and moves in synchrony with the touch, 
      * dragging upwards cancels the dismissal. On Android this is not supported and it will have the same behavior as 'none'.
      */
     keyboardDismissMode: PropTypes.oneOf(['none', 'on-drag', 'interactive']),

     /**
      * Determines when the keyboard should stay visible after a tap.
      * 'never' tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won't receive the tap.
      * 'always', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.
      * 'handled', the keyboard will not dismiss automatically when the tap was handled by children of the scroll view (or captured by an ancestor).
      */
     keyboardShouldPersistTaps: PropTypes.oneOf(['always', 'never', 'handled']),

     /**
      * Used to manually set the starting scroll offset.
      * {x: 0, y: 0}
      */
     contentOffset: PropTypes.object,
}

export default ScrollView;