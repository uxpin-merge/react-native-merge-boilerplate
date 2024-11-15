import * as React from "react";
import ScrollView from "../ScrollView";
import Text from "../../Text/Text";

export default (
  <ScrollView
    uxpId="scrollview"
    contentContainerStyle={{
      height: 300,
      backgroundColor: "pink",
      marginHorizontal: 20,
    }}
  >
    <Text
      uxpId="text"
      style={{
        fontSize: 20,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  </ScrollView>
);
