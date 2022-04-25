import * as React from 'react';
import { 
    KeyboardAvoidingView as KeyboardAvoidingViewM,
    StyleSheet, 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native';
import PropTypes from 'prop-types';
import View from '../View/View';
import TextInput from '../TextInput/TextInput';
import Text from '../Text/Text';
import Button from '../Button/Button';

/**
 * @uxpindocurl https://reactnative.dev/docs/keyboardavoidingview
 */
const KeyboardAvoidingView = (props) => {
    return (
        <KeyboardAvoidingViewM
        {...props}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Text style={styles.header}>Header</Text>
                <TextInput placeholder="Username" style={styles.textInput} />
                <View style={styles.btnContainer}>
                <Button title="Submit" onPress={() => null} />
                </View>
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingViewM>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

KeyboardAvoidingView.propTypes = {
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