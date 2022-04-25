import PropTypes from 'prop-types';
import * as React from "react";
import { Alert, Modal as ModalM, Pressable, StyleSheet } from "react-native";
import Text from '../Text/Text';
import View from '../View/View';

/**
 * @uxpindocurl https://reactnative.dev/docs/modal
 */
const Modal = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={styles.centeredView}>
        <ModalM
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
            </View>
        </ModalM>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

Modal.propTypes = {
    /**
     * The visible prop determines whether your modal is visible.
     */
    visible: PropTypes.bool,
    /**
     * The transparent prop determines whether your modal will fill the entire view. 
     * Setting this to true will render the modal over a transparent background.
     */
    transparent: PropTypes.bool,

    /** Andriod
     * The statusBarTranslucent prop determines whether your modal should go under the system statusbar.
     */
    statusBarTranslucent: PropTypes.bool, 
    /**
     * The animationType prop controls how the modal animates.
     * slide slides in from the bottom,
     * fade fades into view,
     * none appears without an animation.
     */
    animationType: PropTypes.oneOf(['none', 'slide', 'fade']),

    /** Andriod
     * The hardwareAccelerated prop controls whether to force hardware acceleration for the underlying window.
     */
    hardwareAccelerated: PropTypes.bool,

    /** iOS
     * The onDismiss prop allows passing a function that will be called once the modal has been dismissed.
     */
    onDismiss: PropTypes.func,
    
    /** iOS
     * The onOrientationChange callback is called when the orientation changes while the modal is being displayed. 
     * The orientation provided is only 'portrait' or 'landscape'. 
     * This callback is also called on initial render, regardless of the current orientation.
     */
    onOrientationChange: PropTypes.func,

    /**
     * function Required Android TV iOS
     * The onRequestClose callback is called when the user taps the hardware back button on Android or the menu button 
     * on Apple TV. Because of this required prop, be aware that BackHandler events will not be emitted 
     * as long as the modal is open. On iOS, this callback is called when a Modal is being dismissed using a drag gesture when presentationStyle is pageSheet or formSheet
     */
    onRequestClose: PropTypes.func,

    /** iOS
     * The supportedOrientations prop allows the modal to be rotated to any of the specified orientations. 
     * On iOS, the modal is still restricted by what's specified in your app's 
     * Info.plist's UISupportedInterfaceOrientations field.
     */
    supportedOrientations: PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']),

    /**
     * The onShow prop allows passing a function that will be called once the modal has been shown.
     */
    onShow: PropTypes.func,

    /** iOS
     * The presentationStyle prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). 
     * See https://developer.apple.com/reference/uikit/uimodalpresentationstyle for details.
     * fullScreen if transparent={false}
     * overFullScreen if transparent={true}
     */
    presentationStyle: PropTypes.oneOf(['fullScreen', 'pageSheet', 'formSheet', 'overFullScreen'])
}


export default Modal;