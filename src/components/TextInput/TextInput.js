import PropTypes from 'prop-types';
import * as React from 'react';
import { colorVariants } from '../../styles/Colors';
import { TextInput as TextInputM } from 'react-native';
import { styles } from './styles/styles'
import View from '../View/View';

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function TextInput(props) {
 const { uxpinRef, ...other } = props;

 return (
 <View>
  <TextInputM {...other}
    ref={uxpinRef}
    style={styles.input}/>
 </View>
  )
}

TextInput.propTypes = {
  /**
   * The string that will be rendered before text input has been entered.
   */
   placeholder: PropTypes.string,

   /**
    * The value to show for the text input. TextInput is a controlled component, 
    * which means the native value will be forced to match this value prop if provided. 
    * For most uses, this works great, but in some cases this may cause flickering - 
    * one common cause is preventing edits by keeping value the same. In addition to setting the same value, 
    * either set editable={false}, or set/update maxLength to prevent unwanted edits without flicker.
    */
   value: PropTypes.string,

   /**
    * The text color of the placeholder string.
    */
   placeholderTextColor: PropTypes.oneOf(colorVariants),

  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.
   */
   allowFontScaling: PropTypes.bool,

   /**
    * If true, the text input obscures the text entered so that sensitive text like passwords stay secure. 
    * The default value is false. Does not work with multiline={true}.
    */
   secureTextEntry: PropTypes.bool,

   /**
    * If false, disables auto-correct. The default value is true.
    */
   autoCorrect: PropTypes.bool,

   /**
    * If true, focuses the input on componentDidMount or useEffect. The default value is false.
    */
   autoFocus: PropTypes.bool,

   /**
    * If true, the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. 
    * Note that for multiline fields, setting blurOnSubmit to true means that pressing return will 
    * blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.
    */
   blurOnSubmit: PropTypes.bool,

   /**
    * If true, caret is hidden. The default value is false.
    */
   caretHidden: PropTypes.bool,

  /**
   * If true, context menu is hidden. The default value is false.
   */
   contextMenuHidden: PropTypes.bool,

   /**
    * If false, text is not editable. The default value is true.
    */
   editable: PropTypes.bool,

   /**
    * If true, the text input can be multiple lines. The default value is false. 
    * It is important to note that this aligns the text to the top on iOS, and centers it on Android. 
    * Use with textAlignVertical set to top for the same behavior in both platforms.
    */
   multiline: PropTypes.bool,

   /**
    * If true, all text will automatically be selected on focus.
    */
   selectTextOnFocus: PropTypes.bool,

   /**
    * When false, it will prevent the soft keyboard from showing when the field is focused. The default value is true.
    */
   showSoftInputOnFocus: PropTypes.bool, 

   /**
    * The start and end of the text input's selection. Set start and end to the same value to position the cursor.
    * object: {start: number,end: number}
    */
   selection: PropTypes.object,

   /**
    * Align the input text to the left, center, or right sides of the input field.
    */
   textAlign: PropTypes.oneOf(['left', 'center', 'right']),

   /**
    * The highlight and cursor color of the text input.
    */
   selectionColor: PropTypes.oneOf(colorVariants),

   /**
    * Provides an initial value that will change when the user starts typing. 
    * Useful for use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.
    */
   defaultValue: PropTypes.string,

  /**
   * Tells TextInput to automatically capitalize certain characters. 
   * This property is not supported by some keyboard types such as name-phone-pad.
   * characters: all characters.
   * words: first letter of each word.
   * sentences: first letter of each sentence (default).
   * none: don't auto capitalize anything.
   * */
   autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),

   /** Andriod
    * Specifies autocomplete hints for the system, so it can provide autofill. 
    * On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content. 
    * To disable autocomplete, set autoComplete to off.
    */
   autoComplete: PropTypes.oneOf([
       'birthdate-day',
       'birthdate-full',
       'birthdate-month',
       'birthdate-year',
       'cc-csc',
       'cc-exp', 
       'cc-exp-day',
       'cc-exp-month',
       'cc-exp-year',
       'cc-number',
       'email', 
       'gender',
       'name', 
       'name-family', 
       'name-given',
       'name-middle', 
       'name-middle-initial', 
       'name-prefix', 
       'name-suffix', 
       'password', 
       'password-new', 
       'postal-address', 
       'postal-address-country', 
       'postal-address-extended', 
       'postal-address-extended-postal-code', 
       'postal-address-locality', 
       'postal-address-region', 
       'postal-code', 
       'street-address', 
       'sms-otp', 
       'tel', 
       'tel-country-code', 
       'tel-national', 
       'tel-device', 
       'username', 
       'username-new', 
       'off' 
    ]),

    /** Andriod
    * When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), 
    * the OS may choose to have the user edit the text inside of a full screen text input mode. 
    * When true, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to false.
    */
   disableFullscreenUI: PropTypes.bool,

   /** Andriod
    * Tells the operating system whether the individual fields in your app should be included in a view structure for autofill purposes on Android API Level 26+. 
    * Possible values are auto, no, noExcludeDescendants, yes, and yesExcludeDescendants. The default value is auto.
    * auto: Let the Android System use its heuristics to determine if the view is important for autofill.
    * no: This view isn't important for autofill.
    * noExcludeDescendants: This view and its children aren't important for autofill.
    * yes: This view is important for autofill.
    * yesExcludeDescendants: This view is important for autofill, but its children aren't important for autofill.
    */
   importantForAutofill: PropTypes.oneOf(['auto', 'no', 'noExcludeDescendants', 'yes', 'yesExcludeDescendants']),

   /** Andriod
    * If defined, the provided image resource will be rendered on the left. 
    * The image resource must be inside /android/app/src/main/res/drawable 
    */
   inlineImageLeft: PropTypes.string,

   /** Andriod
    * Padding between the inline image, if any, and the text input itself.
    */
   inlineImagePadding: PropTypes.number,

   /** Andriod
    * Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines.
    */
   numberOfLines: PropTypes.number,

   /** Andriod
    * Sets the return key to the label. Use it instead of returnKeyType.
    */
   returnKeylabel: PropTypes.string,

   /** Andriod
    * Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is simple.
    */
   textBreakStrategy: PropTypes.oneOf(['simple', 'highQuality', 'balanced']),

   /** Andriod
    * The color of the TextInput underline.
    */
   underlineColorAndroid: PropTypes.oneOf(colorVariants),

   /** iOS
    * When using textContentType as newPassword on iOS we can let the OS know the minimum requirements of the password so that it can 
    * generate one that will satisfy them. In order to create a valid string for PasswordRules take a look to the Apple Docs.
    */
   passwordRules: PropTypes.string,
   
    
  /** iOS
   * When the clear button should appear on the right side of the text view. 
   * This property is supported only for single-line TextInput component. The default value is never.
   */
   clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),

  /** iOS
   * If true, clears the text field automatically when editing begins.
   */
   clearTextOnFocus: PropTypes.bool,

   /** iOS
    * Determines the types of data converted to clickable URLs in the text input. 
    * Only valid if multiline={true} and editable={false}. By default no data types are detected.
    * You can provide one type or an array of many types.
    */
   dataDetectorTypes: PropTypes.oneOf(['phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all']),

   /** iOS
    * If true, the keyboard disables the return key when there is no text and automatically enables it when there is text. The default value is false.
    */
   enablesReturnKeyAutomatically: PropTypes.bool,

   /** iOS
    * An optional identifier which links a custom InputAccessoryView https://reactnative.dev/docs/inputaccessoryviewto this text input. 
    * The InputAccessoryView is rendered above the keyboard when this text input is focused.
    */
   inputAccessoryViewID: PropTypes.string,

   /** iOS
    * Determines the color of the keyboard.
    */
   keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),

   /** iOS
    * If true, allows TextInput to pass touch events to the parent component. This allows components such as SwipeableListView to be swipeable from the TextInput on iOS, 
    * as is the case on Android by default. If false, TextInput always asks to handle the input (except when disabled). The default value is true.
    */
   rejectResponderTermination: PropTypes.bool,

   /** iOS
    * If false, scrolling of the text view will be disabled. The default value is true. Only works with multiline={true}.
    */
   scrollEnabled: PropTypes.bool,

   /** iOS
    * If false, disables spell-check style (i.e. red underlines). The default value is inherited from autoCorrect.
    */
   spellCheck: PropTypes.bool,

   /**
    * Determines which keyboard to open, e.g.numeric.
    * See screenshots of all the types https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/
    * The following values work across platforms: 'default' 'number-pad' 'decimal-pad' 'numeric' 'email-address' 'phone-pad'
    * The following values work on iOS only: 'ascii-capable' 'numbers-and-punctuation' 'url' 'name-phone-pad' 'twitter' 'web-search'
    * The following values work on Android only: 'visible-password'
    */
    keyboardType: PropTypes.oneOf([
        'default', 
        'email-address', 
        'numeric', 
        'phone-pad', 
        'ascii-capable', 
        'numbers-and-punctuation',
        'url', 
        'number-pad', 
        'name-phone-pad', 
        'decimal-pad', 
        'twitter', 
        'web-search', 
        'visible-password']),

    /** iOS
     * Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
     */
    textContentType: PropTypes.oneOf([
        'none', 
        'URL', 
        'addressCity', 
        'addressCityAndState', 
        'addressState', 
        'countryName', 
        'creditCardNumber', 
        'emailAddress', 
        'familyName', 
        'fullStreetAddress', 
        'givenName', 
        'jobTitle', 
        'location', 
        'middleName', 
        'name', 
        'namePrefix', 
        'nameSuffix', 
        'nickname', 
        'organizationName', 
        'postalCode', 
        'streetAddressLine1', 
        'streetAddressLine2', 
        'sublocality', 
        'telephoneNumber', 
        'username', 
        'password'
    ]),

   /**
    * Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
    * null/undefined (default): inherit from the parent node or the global default (0)
    * 0: no max, ignore parent/global default
    * >= 1: sets the maxFontSizeMultiplier of this node to this value
    */
    maxFontSizeMultiplier: PropTypes.number,

    /**
     * Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.
     */
    maxLength: PropTypes.number,

    /**
     * Determines how the return key should look. On Android you can also use returnKeyLabel.
     * The following values work across platforms: 'done' 'go' 'next' 'search' 'send'
     * The following values work on Android only: 'none' 'previous'
     * The following values work on iOS only: 'default' 'emergency-call' 'google' 'join' 'route' 'yahoo'
     */
    returnKeyType: PropTypes.oneOf([
        'done', 
        'go', 
        'next', 
        'search', 
        'send', 
        'none', 
        'previous', 
        'default', 
        'emergency-call', 
        'google', 
        'join', 
        'route', 
        'yahoo'
    ]),

    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur: PropTypes.func,

    /**
     * Callback that is called when the text input's text changes.
     * ({ nativeEvent: { eventCount, target, text} }) => void
     */
    onChange: PropTypes.func,

    /**
     * Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.
     */
    onChangeText: PropTypes.func,
    
    /**
     * Callback that is called when the text input's content size changes.
     * ({ nativeEvent: { contentSize: { width, height } } }) => void
     */
    onContentSizeChange: PropTypes.func,

    /**
     * Callback that is called when text input ends.
     */
    onEndEditing: PropTypes.func,

    /**
     * Callback that is called when a touch is engaged.
     * ({ nativeEvent: PressEvent }) => void
     */
    onPressIn: PropTypes.func,

    /**
     * Callback that is called when a touch is released.
     * ({ nativeEvent: PressEvent }) => void
     */
    onPressOut: PropTypes.func,

    /**
     * Callback that is called when the text input is focused.
     * ({ nativeEvent: LayoutEvent }) => void
     */
    onFocus:PropTypes.func,

    /**
     * Callback that is called when a key is pressed. This will be called with object where keyValue is 'Enter' or 'Backspace' 
     * for respective keys and the typed-in character otherwise including ' ' for space. 
     * Fires before onChange callbacks. Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.
     * ({ nativeEvent: { key: keyValue } }) => void
     */
    onKeyPress: PropTypes.func, 

    /**
     * Invoked on mount and on layout changes.
     * ({ nativeEvent: LayoutEvent }) => void
     * */
    onLayout: PropTypes.func,

    /**
     * Invoked on content scroll. May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.
     * ({ nativeEvent: { contentOffset: { x, y } } }) => void
     */
    onScroll: PropTypes.func,

    /**
     * Callback that is called when the text input selection is changed.
     * ({ nativeEvent: { selection: { start, end } } }) => void
     */
    onSelectionChange: PropTypes.func,
    
    /**
     * Callback that is called when the text input's submit button is pressed.
     * Note that on iOS this method isn't called when using keyboardType="phone-pad".
     * ({ nativeEvent: { text, eventCount, target }}) => void
     */
    onSubmitEditing: PropTypes.func,

    /**
     * Note that not all Text styles are supported, an incomplete list of what is not supported includes:
     */
    style: PropTypes.object,
}

export default TextInput;