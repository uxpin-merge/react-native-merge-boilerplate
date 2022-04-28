import * as React from 'react';
import SafeAreaView from '../SafeAreaView';
import Text from '../../Text/Text';

export default (
    <SafeAreaView 
        uxpId="safeareaview"
        style={{ flex: 1 }}>
        <Text
            uxpId="text"
            style={{ fontSize: 25, fontWeight: '500' }}>
        Page content
        </Text>
    </SafeAreaView>
)