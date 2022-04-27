import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight as TouchableHighlightM } from "react-native";
import Text from '../Text/Text';
import View from '../View/View';
import { colorVariants } from '../../styles/Colors';

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


/**
 * @uxpindocurl https://reactnative.dev/docs/touchablehighlight 
 * */    
const TouchableHighlight = (props) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);

return (
    <View style={styles.container}>
        <TouchableHighlightM
            {...props}
            onPress={onPress}>
        <View style={styles.button}>
            <Text>Touch Here</Text>
        </View>
        </TouchableHighlightM>
        <View style={styles.countContainer}>
        <Text style={styles.countText}>
            {count || null}
        </Text>
        </View>
    </View>
    );
}

TouchableHighlight.propTypes = {
    /**
     * Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Defaults to 0.85. Requires underlayColor to be set.
     */
    activeOpacity: PropTypes.number,

    /** Andriod
     * TV next focus down (see documentation for the View component).
     * @uxpinignoreprop
     */
    nextFocusDown: PropTypes.number,

    /** Andriod
     * TV next focus forward (see documentation for the View component).
     * @uxpinignoreprop
     */
    nextFocusForward: PropTypes.number,

    /** Andriod
     * TV next focus left (see documentation for the View component).
     * @uxpinignoreprop
     */
    nextFocusLeft: PropTypes.number,

    /** Andriod
     * TV next focus right (see documentation for the View component).
     */
    nextFocusRight: PropTypes.number,

    /** Andriod
     * TV next focus up (see documentation for the View component).
     * @uxpinignoreprop
     */
    nextFocusUp: PropTypes.number,

    /** iOS
     * (Apple TV only) TV preferred focus (see documentation for the View component).
     * @uxpinignoreprop
     */
    hasTVPreferredFocus: PropTypes.bool,

    /**
     * Called immediately after the underlay is hidden.
     */
    onHideUnderlay: PropTypes.func,

    /**
     * Called immediately after the underlay is shown.
     */
    onShowUnderlay: PropTypes.func,
    
    style: PropTypes.object,

    /**
     * The color of the underlay that will show through when the touch is active.
     */
    underlayColor: PropTypes.oneOf(colorVariants),

}

export default TouchableHighlight;