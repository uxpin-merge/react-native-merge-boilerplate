import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity as TouchableOpacityM } from "react-native";
import Text from '../Text/Text';
import View from '../View/View';


/**
 * @uxpindocurl https://reactnative.dev/docs/touchableopacity
 */
const TouchableOpacity = (props) => {
    const [count, setCount] = React.useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

return (
    <View style={styles.container}>
        <View style={styles.countContainer}>
            <Text>Count: {count}</Text>
        </View>
        <TouchableOpacityM
            {...props}
            style={styles.button}
            onPress={onPress}
        >
        <Text>Press Here</Text>
        </TouchableOpacityM>
    </View>
);
};

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
}
});

TouchableOpacity.propTypes = {
    style: PropTypes.object,

    /**
     * Determines what the opacity of the wrapped view should be when touch is active. Defaults to 0.2.
     */
    activeOpacity: PropTypes.number,

    /** Andriod
     * Apple TV only) Object with properties to control Apple TV parallax effects.
     * @uxpinignoreprop
     */
    tvParallaxProperties: PropTypes.object,

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
     * @uxpinignoreprop
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
    
}

export default TouchableOpacity;