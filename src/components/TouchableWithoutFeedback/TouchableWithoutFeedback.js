import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback as TouchableWithoutFeedbackM } from "react-native";
import Text from '../Text/Text';
import View from '../View/View';


/**
 * @uxpindocurl https://reactnative.dev/docs/touchablewithoutfeedback
 */
const TouchableWithoutFeedback = () => {
const [count, setCount] = React.useState(0);

const onPress = () => {
    setCount(count + 1);
};

return (
    <View style={styles.container}>
        <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
        </View>
        <TouchableWithoutFeedbackM onPress={onPress}>
        <View style={styles.button}>
            <Text>Touch Here</Text>
        </View>
        </TouchableWithoutFeedbackM>
    </View>
);
}

TouchableWithoutFeedback.propTypes = {
    nativeID: PropTypes.string,

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: PropTypes.string,
    /**
     * If true, disable all interactions for this component.
     */
    disabled: PropTypes.bool,

    /** Andriod
     * If true, doesn't play a system sound on touch.
     */
    touchSoundDisabled: PropTypes.bool,

    /**
     * Duration (in milliseconds) from onPressIn before onLongPress is called.
     */
    delayLongPress: PropTypes.number,

    /**
     * Duration (in milliseconds), from the start of the touch, before onPressIn is called.
     */
    delayPressIn: PropTypes.number,

    /**
     * Duration (in milliseconds), from the release of the touch, before onPressOut is called.
     */
    delayPressOut: PropTypes.number,

    /**
     * This defines how far your touch can start away from the button. This is added to pressRetentionOffset when moving off of the button.
     */
    hitSlop: PropTypes.number,

    /**
     * When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. 
     * Once deactivated, try moving it back and you'll see that the button is once again reactivated! 
     * Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
    pressRetentionOffset: PropTypes.number,

    /**
     * Overrides the text that's read by the screen reader when the user interacts with the element. 
     * By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
     */
    accessibilityLabel: PropTypes.string,
    
    /**
     * An accessibility hint helps users understand what will happen when they perform 
     * an action on the accessibility element when that result is not clear from the accessibility label.
     */
    accessibilityHint: PropTypes.string,

    accessibilityIgnoresInvertColors: PropTypes.bool,

    /**
     * accessibilityRole communicates the purpose of a component to the user of an assistive technology.
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
        'toolbar',
]),

    /**
     * Describes the current state of a component to the user of an assistive technology.
     * object: {disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool}
     */
    accessibilityState: PropTypes.object,
    
    /**
     * Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. 
     * The accessibilityActions property should contain a list of action objects. 
     * Each action object should contain the field name and label.
     * https://reactnative.dev/docs/accessibility#accessibility-actions
     */
    accessibilityActions: PropTypes.array,

    /**
     * Represents the current value of a component. It can be a textual description of a component's value, 
     * or for range-based components, such as sliders and progress bars, 
     * it contains range information (minimum, current, and maximum).
     * object: {min: number, max: number, now: number, text: string}
     */
    accessibilityValue: PropTypes.object,

    /**
     * Invoked when the user performs the accessibility actions. 
     * The only argument to this function is an event containing the name of the action to perform.
     * https://reactnative.dev/docs/accessibility#accessibility-actions
     */
    onAccessibilityAction: PropTypes.func,

    /**
     * Invoked when the item loses focus.
     */
    onBlur: PropTypes.func,

    /**
     * Invoked when the item receives focus.
     */
    onFocus: PropTypes.func,

    /**
     * Invoked on mount and on layout changes.
     * ({ nativeEvent: LayoutEvent }) => void
     * @uxpinignoreprop
     */
    onLayout: PropTypes.func,

    /**
     * Called if the time after onPressIn lasts longer than 370 milliseconds. This time period can be customized with delayLongPress.
     */
    onLongPress: PropTypes.func,

    /**
     * Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).
     * The first function argument is an event in form of PressEvent.
     */
    onPress: PropTypes.func,

    /**
     * Called as soon as the touchable element is pressed and invoked even before onPress. 
     * This can be useful when making network requests. The first function argument is an event in form of PressEvent.
     */
    onPressOut: PropTypes.func,



    /**
     * When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.
     */
    accessible: PropTypes.bool,
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
},
button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
},
countContainer: {
    alignItems: "center",
    padding: 10
},
countText: {
    color: "#FF00FF"
}
});

export default TouchableWithoutFeedback;