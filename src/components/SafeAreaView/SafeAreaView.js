import * as React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView as SafeAreaViewM } from 'react-native';

/**
 * @uxpindocurl https://reactnative.dev/docs/safeareaview
 */
function SafeAreaView(props) {
    return <SafeAreaViewM {...props}>{props.children}</SafeAreaViewM>
}

SafeAreaView.propTypes = {

    /**
     * @uxpinignoreprop
     */
    children: PropTypes.node,  
    
    /**
     * Used to locate this view from native classes.
     */
    nativeID: PropTypes.string,
  
    /**
     * Overrides the text that's read by the screen reader when the user interacts with the element. 
     * By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
     */
    accessibilityLabel: PropTypes.string,   
  
    /**
     * An accessibility hint helps users understand what will happen when they perform an action 
     * on the accessibility element when that result is not clear from the accessibility label. 
     */  
    accessibilityHint: PropTypes.string,
  
    /**
     * When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.
     */
    accessible: PropTypes.bool,
  
    /** iOS
     * A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is false.
     * See the https://reactnative.dev/docs/accessibility#accessibilityelementshidden-ios for more information
     */  
    accessibilityElementsHidden: PropTypes.bool,
  
    /** iOS
     * A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is false.
     * see the https://reactnative.dev/docs/accessibility#accessibilityviewismodal-ios for more information
     */
    accessibilityViewIsModal: PropTypes.bool,
    
    /** iOS
     * A value indicating this view should or should not be inverted when color inversion is turned on. 
     * A value of true will tell the view to not be inverted even if color inversion is turned on.
     * see the https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolors for more information
     */
    accessibilityIgnoresInvertColors: PropTypes.bool,
  
    /** iOS
     * Whether this View should be rendered as a bitmap before compositing.
     * On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; 
     * for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap 
     * of a static view and quickly composite it during each frame.
     * Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.
     */
    shouldRasterizeIOS: PropTypes.bool,
  
    /** iOS
     * When accessible is true, the system will invoke this function when the user performs the escape gesture.
     */
    onAccessibilityEscape: PropTypes.func,
  
    /** iOS
     * When accessible is true, the system will invoke this function when the user performs the magic tap gesture.
     */
    onMagicTap: PropTypes.func,
  
    /**
     * Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. 
     * The accessibilityActions property should contain a list of action objects. 
     * Each action object should contain the field name and label.
     * See the https://reactnative.dev/docs/accessibility#accessibility-actions for more information.  
     */  
    accessibilityActions: PropTypes.array,
    
    /** Andriod
     * Indicates to accessibility services whether the user should be notified when this view changes. 
     * Works for Android API >= 19 only. Possible values:
     * 'none' - Accessibility services should not announce changes to this view.
     * 'polite'- Accessibility services should announce changes to this view.
     * 'assertive' - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.
     * See the https://developer.android.com/reference/android/view/View#attr_android:accessibilityLiveRegion for reference
     */
    accessibilityLiveRegion: PropTypes.oneOf(['none', 'polite', 'assertive']),
  
    /** Andriod
     * Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy 
     * as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.
     */
    collapsable: PropTypes.bool,
    
    /** Andriod
     * Whether this View should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.
     */
    focusable: PropTypes.bool,
  
    /** Andriod
     * Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.
     * On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: 
     * in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. 
     * The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, 
     * so this prop should be set back to false at the end of the interaction/animation.
     */
    renderToHardwareTextureAndroid: PropTypes.bool,
  
    /**  Andriod
     * Controls how view is important for accessibility which is if it fires accessibility events and if it is 
     * reported to accessibility services that query the screen. Works for Android only.
     * Possible values:
     * 'auto' - The system determines whether the view is important for accessibility - default (recommended).
     * 'yes' - The view is important for accessibility.
     * 'no' - The view is not important for accessibility.
     * 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.
     * see the https://developer.android.com/reference/android/R.attr#importantForAccessibility for reference.
     */
    importantForAccessibility: PropTypes.oneOf(['auto','yes', 'no', 'no-hide-descendants']),
  
    /** Andriod
     * Designates the next view to receive focus when the user navigates down
     * see the https://developer.android.com/reference/android/view/View#attr_android:nextFocusDown 
     */
    nextFocusDown: PropTypes.number,
  
    /** Andriod
     * Designates the next view to receive focus when the user navigates forward
     * see the https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward
     */
    nextFocusForward: PropTypes.number,
  
    /** Andriod
     * Designates the next view to receive focus when the user navigates left
     * See the https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft
     */
    nextFocusLeft: PropTypes.number,
  
    /** Andriod
     * Designates the next view to receive focus when the user navigates right.
     * See the https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight
     */
    nextFocusRight: PropTypes.number,
  
    /** Andriod
     * Designates the next view to receive focus when the user navigates up.
     * See the https://developer.android.com/reference/android/view/View#attr_android:nextFocusUp 
     */
    nextFocusUP: PropTypes.number,
  
    /**
     * accessibilityRole communicates the purpose of a component to the user of an assistive technology.
     * accessibilityRole can be one of the following:
     * 'none' - Used when the element has no role.
     * 'button' - Used when the element should be treated as a button.
     * 'link' - Used when the element should be treated as a link.
     * 'search' - Used when the text field element should also be treated as a search field.
     * 'image' - Used when the element should be treated as an image. Can be combined with button or link, for example.
     * 'keyboardkey' - Used when the element acts as a keyboard key.
     * 'text' - Used when the element should be treated as static text that cannot change.
     * 'adjustable' - Used when an element can be "adjusted" (e.g. a slider).
     * 'imagebutton' - Used when the element should be treated as a button and is also an image.
     * 'header' - Used when an element acts as a header for a content section (e.g. the title of a navigation bar).
     * 'summary' - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches.
     * 'alert' - Used when an element contains important text to be presented to the user.
     * 'checkbox' - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.
     * 'combobox' - Used when an element represents a combo box, which allows the user to select among several choices.
     * 'menu' - Used when the component is a menu of choices.
     * 'menubar' - Used when a component is a container of multiple menus.
     * 'menuitem' - Used to represent an item within a menu.
     * 'progressbar' - Used to represent a component which indicates progress of a task.
     * 'radio' - Used to represent a radio button.
     * 'radiogroup' - Used to represent a group of radio buttons.
     * 'scrollbar' - Used to represent a scroll bar.
     * 'spinbutton' - Used to represent a button which opens a list of choices.
     * 'switch' - Used to represent a switch which can be turned on and off.
     * 'tab' - Used to represent a tab.
     * 'tablist' - Used to represent a list of tabs.
     * 'timer' - Used to represent a timer.
     * 'toolbar' - Used to represent a tool bar (a container of action buttons or components).
     */
    accessibilityRole: PropTypes.oneOf([
        'none',
        'button',
        'link',
        'search',
        'image',
        'keyboardkey',
        'text',
        'adjustable',
        'imagebutton',
        'header',
        'summary',
        'alert',
        'checkbox',
        'combobox',
        'menu',
        'menubar',
        'menuitem',
        'progressbar',
        'radio',
        'radiogroup',
        'scrollbar',
        'spinbutton',
        'switch',
        'tab',
        'tablist',
        'timer',
        'toolbar'
    ]),

     /**
      * Describes the current state of a component to the user of an assistive technology.
      * see the https://reactnative.dev/docs/accessibility#accessibilitystate-ios-android for more information
      * object: {disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool}
      */
      accessibilityState: PropTypes.object,
  
      /**
       * Represents the current value of a component. It can be a textual description of a component's value, 
       * or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).
       * object: {min: number, max: number, now: number, text: string}
       */
      accessibilityValue: PropTypes.object,
  
      /**
       * This defines how far a touch event can start away from the view. 
       * Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.
       * For example, if a touchable view has a height of 20 the touchable height can be extended to 40 with
       * hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
       */
      hitSlop: PropTypes.object,
  
      /**
       * Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. 
       * The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering 
       * the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an 
       * opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).
       * Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. 
       * If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static 
       * (i.e. it doesn't need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, 
       * saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.
       */
      needsOffscreenAlphaCompositing: PropTypes.bool,
      
      /**
       * Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.
       * See the https://reactnative.dev/docs/accessibility#accessibility-actions
       */
      onAccessibilityAction: PropTypes.func,
  
      /**
       * When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture.
       */
      onAccessibilityTap: PropTypes.func,
  
      /**
       * Invoked on mount and on layout changes.
       * This event is fired immediately once the layout has been calculated, 
       * but the new layout may not yet be reflected on the screen at the time the event is received, 
       * especially if a layout animation is in progress.
       * ({ nativeEvent: LayoutEvent }) => void
       */
      onLayout: PropTypes.func,
  
      /**
       * Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.
       * ({ nativeEvent: PressEvent }) => boolean
       */
      onMoveShouldSetResponder: PropTypes.func,
  
      /**
       * If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.
       * ({ nativeEvent: PressEvent }) => boolean
       */
      onMoveShouldSetResponderCapture: PropTypes.func,
  
      /**
       * The View is now responding for touch events. This is the time to highlight and show the user what is happening.
       * ({ nativeEvent: PressEvent }) => void
       */
      onResponderGrant: PropTypes.func,
  
      /**
       * The user is moving their finger.
       * ({ nativeEvent: PressEvent }) => void
       */
      onResponderMove: PropTypes.func,
  
      /**
       * Another responder is already active and will not release it to that View asking to be the responder.
       * ({ nativeEvent: PressEvent }) => void
       */
      onResponderReject: PropTypes.func,
  
      /**
       * Fired at the end of the touch.
       * ({ nativeEvent: PressEvent }) => void
       */
      onResponderRelease: PropTypes.func,
  
      /**
       * The responder has been taken from the View. Might be taken by other views after a call to 
       * onResponderTerminationRequest, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)
       * ({ nativeEvent: PressEvent }) => void
       */
      onResponderTerminate: PropTypes.func,
  
      /**
       * Some other View wants to become responder and is asking this View to release its responder. Returning true allows its release.
       * ({ nativeEvent: PressEvent }) => void
       */
      onResponderTerminationRequest: PropTypes.func,
  
      /**
       * Does this view want to become responder on the start of a touch?
       * ({ nativeEvent: PressEvent }) => boolean
       */
      onStartShouldSetResponder: PropTypes.func,
  
      /**
       * If a parent View wants to prevent a child View from becoming responder on a touch start, it should have this handler which returns true.
       * ({ nativeEvent: PressEvent }) => boolean
       */
      onStartShouldSetResponderCapture: PropTypes.func,
  
      /**
       * Controls whether the View can be the target of touch events.
       * 'auto': The View can be the target of touch events.
       * 'none': The View is never the target of touch events.
       * 'box-none': The View is never the target of touch events but its subviews can be. It behaves like if the view had the following classes in CSS:
       * 'box-only': The view can be the target of touch events but its subviews cannot be. It behaves like if the view had the following classes in CSS:
       */
      pointerEvents: PropTypes.oneOf(['auto', 'none', 'box-none', 'box-only']),
  
       /**
        * This is a reserved performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. 
        * For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. 
        * The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).
        */
      removeClippedSubviews: PropTypes.bool,
  
      /**
       * Used to locate this view in end-to-end tests.
       */
      testID: PropTypes.string,
  
      /**
       * view style: https://reactnative.dev/docs/view-style-props
       */
      style: PropTypes.object,
  }

  export default SafeAreaView;