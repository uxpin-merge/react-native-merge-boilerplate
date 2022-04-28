import * as React from 'react';
import { 
    KeyboardAvoidingView as KeyboardAvoidingViewM,
} from 'react-native';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://reactnative.dev/docs/keyboardavoidingview
 */
const KeyboardAvoidingView = (props) => {
    return (
        <KeyboardAvoidingViewM
        {...props}
        >
        {props.children}
        </KeyboardAvoidingViewM>
);
};

KeyboardAvoidingView.propTypes = {
    /**
     * @uxpinignoreprop
     */
    children: PropTypes.node,

    /**
     * Enabled or disabled KeyboardAvoidingView.
     */
    enabled: PropTypes.bool,

    /**
     * This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases.
     */
    keyboardVerticalOffset: PropTypes.number,

    /**
     * Specify how to react to the presence of the keyboard.
     */
    behavior: PropTypes.oneOf(['height', 'position', 'padding']),

    /**
     * The style of the content container (View) when behavior is 'position'.
     */
    contentContainerStyle: PropTypes.object,
}

export default KeyboardAvoidingView;