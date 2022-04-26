import PropTypes from 'prop-types';
import * as React from 'react';
import {
    Platform,
    SafeAreaView, StatusBar as StatusBarM, StyleSheet
} from 'react-native';
import { colorVariants } from '../../styles/Colors';
import Button from '../Button/Button';
import Text from '../Text/Text';
import View from '../View/View';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];


/**
 * @uxpindocurl https://reactnative.dev/docs/statusbar
 */
const StatusBar = (props) => {
    const [hidden, setHidden] = React.useState(false);
    const [statusBarStyle, setStatusBarStyle] = React.useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = React.useState(TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
        setStatusBarStyle(STYLES[0]);
    } else {
        setStatusBarStyle(STYLES[styleId]);
    }
};

    const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
        setStatusBarTransition(TRANSITIONS[0]);
    } else {
        setStatusBarTransition(TRANSITIONS[transition]);
    }
};

    return (
    <SafeAreaView style={styles.container}>
        <StatusBarM
            {...props}
            animated={true}
            backgroundColor="#61dafb"
            barStyle={statusBarStyle}
            showHideTransition={statusBarTransition}
            hidden={hidden} />
        <Text style={styles.textStyle}>
            StatusBar Visibility:{'\n'}
            {hidden ? 'Hidden' : 'Visible'}
        </Text>
        <Text style={styles.textStyle}>
            StatusBar Style:{'\n'}
            {statusBarStyle}
        </Text>
            {Platform.OS === 'ios' ? (
        <Text style={styles.textStyle}>
            StatusBar Transition:{'\n'}
            {statusBarTransition}
        </Text>
        ) : null}
        <View style={styles.buttonsContainer}>
        <Button
            title="Toggle StatusBar"
            onPress={changeStatusBarVisibility} />
        <Button
            title="Change StatusBar Style"
            onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' ? (
            <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition} />
        ) : null}
        </View>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
},
buttonsContainer: {
    padding: 10
},
textStyle: {
    textAlign: 'center',
    marginBottom: 8
}
});

StatusBar.propTypes = {
    /**
     * If the status bar is hidden.
     */
    hidden: PropTypes.bool,

    /**
     * If the transition between status bar property changes should be animated. 
     * Supported for backgroundColor, barStyle and hidden properties.
     */
    animated: PropTypes.bool,

    /** Andriod
     * If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. 
     * This is useful when using a semi transparent status bar color.
     */
    translucent: PropTypes.bool,

    /** iOS
     * If the network activity indicator should be visible.
     */
    networkActivityIndicatorVisible: PropTypes.bool,

    /** iOS
     * The transition effect when showing and hiding the status bar using the hidden prop.
     */
    showHideTransition: PropTypes.oneOf(['none', 'fade', 'slide']),

    /** Andriod
     * The background color of the status bar.
     * default system StatusBar background color, or 'black' if not defined
     */
    backgroundColor: PropTypes.oneOf(colorVariants),

    /**
     * Sets the color of the status bar text.
     * On Android, this will only have an impact on API versions 23 and above.
     */
    statusBarStyle: PropTypes.oneOf(['light-content', 'dark-content']),
    
}
export default StatusBar;