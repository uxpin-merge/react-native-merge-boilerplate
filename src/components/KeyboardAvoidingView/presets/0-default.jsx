import * as React from 'react';
import KeyboardAvoidingView from '../KeyboardAvoidingView';
import TouchableWithoutFeedback from '../../TouchableWithoutFeedback/TouchableWithoutFeedback';
import View from '../../View/View';
import Text from '../../Text/Text';
import TextInput from "../../TextInput/TextInput";
import Button from '../../Button/Button';

export default (
    <KeyboardAvoidingView uxpId='KeyboardAvoidViewing' >
        <TouchableWithoutFeedback uxpId="touchableWithout">
            <View uxpId="view1" 
            style={{
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    }}>
                <Text uxpId="text1" 
                style={{
        fontSize: 36,
        marginBottom: 48
    }}>Header</Text>
                <TextInput uxpId="textInput1" placeholder="Username" 
                style={{
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    }} />
                <View uxpId="view2" 
                style={{
        backgroundColor: "white",
        marginTop: 12
    }}>
                <Button uxpId="button1" title="Submit" onPress={() => null} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)