import * as React from 'react';
import ImageBackground from '../ImageBackground';
import View from '../../View/View';
import Text from '../../Text/Text';

export default (
    <View 
        uxpId="view1" 
        style={{ flex: 1 }}
    >
        <ImageBackground 
            uxpId="imageBg"
            style={{
                flex: 1,
                justifyContent: "center"
            }} 
            source={"https://reactjs.org/logo-og.png"}
        >
            <Text 
                uxpId="text" 
                style={{
                    color: "white",
                    fontSize: 42,
                    lineHeight: 84,
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#000000c0"
                    }}
            >
                Inside
        </Text>
        </ImageBackground>
    </View>
)