import PropTypes from "prop-types";
import * as React from "react";
import { TextInput as TextInputM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/textinput
 * @uxpindescription A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
 */

function TextInput(props) {
  const { uxpinRef, ...other } = props;

  return <TextInputM {...props} />;
}

TextInput.propTypes = {
  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings.
   */
  allowFontScaling: PropTypes.bool,

  /**
   * Tells TextInput to automatically capitalize certain characters.
   */
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),

  /**
   * Specifies autocomplete hints for the system to provide autofill.
   */
  autoComplete: PropTypes.oneOf([
    "additional-name",
    "address-line1",
    "address-line2",
    "birthdate-day",
    "birthdate-full",
    "birthdate-month",
    "birthdate-year",
    "cc-csc",
    "cc-exp",
    "cc-exp-day",
    "cc-exp-month",
    "cc-exp-year",
    "cc-number",
    "country",
    "current-password",
    "email",
    "family-name",
    "given-name",
    "honorific-prefix",
    "honorific-suffix",
    "name",
    "new-password",
    "off",
    "one-time-code",
    "postal-code",
    "street-address",
    "tel",
    "username",
    "cc-family-name",
    "cc-given-name",
    "cc-middle-name",
    "cc-name",
    "cc-type",
    "nickname",
    "organization",
    "organization-title",
    "url",
    "gender",
    "name-family",
    "name-given",
    "name-middle",
    "name-middle-initial",
    "name-prefix",
    "name-suffix",
    "password",
    "password-new",
    "postal-address",
    "postal-address-country",
    "postal-address-extended",
    "postal-address-extended-postal-code",
    "postal-address-locality",
    "postal-address-region",
    "sms-otp",
    "tel-country-code",
    "tel-device",
    "tel-national",
    "username-new",
  ]),

  /**
   * If false, disables auto-correct.
   */
  autoCorrect: PropTypes.bool,

  /**
   * Focuses the input on component mount or useEffect if true.
   */
  autoFocus: PropTypes.bool,

  /**
   * If true, the text field will blur when submitted.
   */
  blurOnSubmit: PropTypes.bool,

  /**
   * If true, caret is hidden.
   */
  caretHidden: PropTypes.bool,

  /**
   * Controls when the clear button appears on the right side of the text view (iOS only).
   */
  clearButtonMode: PropTypes.oneOf([
    "never",
    "while-editing",
    "unless-editing",
    "always",
  ]),

  /**
   * If true, clears the text field automatically when editing begins (iOS only).
   */
  clearTextOnFocus: PropTypes.bool,

  /**
   * If true, hides the context menu.
   */
  contextMenuHidden: PropTypes.bool,

  /**
   * Controls types of data converted to clickable URLs in multiline TextInput (iOS only).
   */
  dataDetectorTypes: PropTypes.oneOfType([
    PropTypes.oneOf([
      "phoneNumber",
      "link",
      "address",
      "calendarEvent",
      "none",
      "all",
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOf([
        "phoneNumber",
        "link",
        "address",
        "calendarEvent",
        "none",
        "all",
      ])
    ),
  ]),

  /**
   * Initial value that changes when the user starts typing.
   */
  defaultValue: PropTypes.string,

  /**
   * Sets the cursor (caret) color (Android only).
   */
  cursorColor: PropTypes.string,

  /**
   * If true, disables fullscreen UI in certain cases (Android only).
   */
  disableFullscreenUI: PropTypes.bool,

  /**
   * Specifies if text is editable.
   */
  editable: PropTypes.bool,

  /**
   * Automatically enables/disables the return key based on text presence (iOS only).
   */
  enablesReturnKeyAutomatically: PropTypes.bool,

  /**
   * Sets the text for the return key.
   */
  enterKeyHint: PropTypes.oneOf([
    "enter",
    "done",
    "next",
    "previous",
    "search",
    "send",
  ]),

  /**
   * Autofill options for Android API Level 26+.
   */
  importantForAutofill: PropTypes.oneOf([
    "auto",
    "no",
    "noExcludeDescendants",
    "yes",
    "yesExcludeDescendants",
  ]),

  /**
   * Inline image to display on the left (Android only).
   */
  inlineImageLeft: PropTypes.string,

  /**
   * Padding between inline image and text input (Android only).
   */
  inlineImagePadding: PropTypes.number,

  /**
   * Links a custom InputAccessoryView to this text input (iOS only).
   */
  inputAccessoryViewID: PropTypes.string,

  /**
   * Determines which keyboard to open.
   */
  inputMode: PropTypes.oneOf([
    "none",
    "text",
    "decimal",
    "numeric",
    "tel",
    "search",
    "email",
    "url",
  ]),

  /**
   * Color of the keyboard (iOS only).
   */
  keyboardAppearance: PropTypes.oneOf(["default", "light", "dark"]),

  /**
   * Type of keyboard to open.
   */
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
    "url",
    "ascii-capable",
    "numbers-and-punctuation",
    "name-phone-pad",
    "twitter",
    "web-search",
    "visible-password",
  ]),

  /**
   * Maximum font scale factor.
   */
  maxFontSizeMultiplier: PropTypes.number,

  /**
   * Limits the maximum number of characters.
   */
  maxLength: PropTypes.number,

  /**
   * If true, enables multiline input.
   */
  multiline: PropTypes.bool,

  /**
   * Sets the number of lines for multiline TextInput (Android only).
   */
  numberOfLines: PropTypes.number,

  /**
   * Callback when the text input loses focus.
   */
  onBlur: PropTypes.func,

  /**
   * Callback when text changes.
   */
  onChange: PropTypes.func,

  /**
   * Callback when text changes, passing changed text as a string.
   */
  onChangeText: PropTypes.func,

  /**
   * Callback when content size changes.
   */
  onContentSizeChange: PropTypes.func,

  /**
   * Callback when editing ends.
   */
  onEndEditing: PropTypes.func,

  /**
   * Callback when a key is pressed.
   */
  onKeyPress: PropTypes.func,

  /**
   * Callback when the layout changes.
   */
  onLayout: PropTypes.func,

  /**
   * Callback when content is scrolled.
   */
  onScroll: PropTypes.func,

  /**
   * Callback when selection changes.
   */
  onSelectionChange: PropTypes.func,

  /**
   * Callback when the submit button is pressed.
   */
  onSubmitEditing: PropTypes.func,

  /**
   * Placeholder text shown before input.
   */
  placeholder: PropTypes.string,

  /**
   * Color of the placeholder text.
   * @uxpincontroltype color
   */
  placeholderTextColor: PropTypes.string,

  /**
   * If true, text is read-only.
   */
  readOnly: PropTypes.bool,

  /**
   * Sets return key label (Android only).
   */
  returnKeyLabel: PropTypes.string,

  /**
   * Configures return key appearance.
   */
  returnKeyType: PropTypes.oneOf([
    "done",
    "go",
    "next",
    "search",
    "send",
    "none",
    "previous",
    "default",
    "emergency-call",
    "google",
    "join",
    "route",
    "yahoo",
  ]),

  /**
   * Controls responder termination on iOS.
   */
  rejectResponderTermination: PropTypes.bool,

  /**
   * Number of rows for multiline TextInput (Android only).
   */
  rows: PropTypes.number,

  /**
   * Disables scrolling for multiline TextInput (iOS only).
   */
  scrollEnabled: PropTypes.bool,

  /**
   * Masks text for secure entry (e.g., passwords).
   */
  secureTextEntry: PropTypes.bool,

  /**
   * Specifies selection range.
   */
  selection: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),

  /**
   * Color for selection highlight, handle, and cursor.
   * @uxpincontroltype color
   */
  selectionColor: PropTypes.string,

  /**
   * Color of the selection handle (Android only).
   * @uxpincontroltype color
   */
  selectionHandleColor: PropTypes.string,

  /**
   * Selects all text upon focus.
   */
  selectTextOnFocus: PropTypes.bool,

  /**
   * Suppresses the soft keyboard on focus.
   */
  showSoftInputOnFocus: PropTypes.bool,

  /**
   * Disables spell check (iOS only).
   */
  spellCheck: PropTypes.bool,

  /**
   * Aligns input text.
   */
  textAlign: PropTypes.oneOf(["left", "center", "right"]),

  /**
   * Provides semantic meaning for text content (iOS only).
   */
  textContentType: PropTypes.oneOf([
    "none",
    "addressCity",
    "addressCityAndState",
    "addressState",
    "birthdate",
    "birthdateDay",
    "birthdateMonth",
    "birthdateYear",
    "countryName",
    "creditCardExpiration",
    "creditCardExpirationMonth",
    "creditCardExpirationYear",
    "creditCardFamilyName",
    "creditCardGivenName",
    "creditCardMiddleName",
    "creditCardName",
    "creditCardNumber",
    "creditCardSecurityCode",
    "creditCardType",
    "emailAddress",
    "familyName",
    "fullStreetAddress",
    "givenName",
    "jobTitle",
    "location",
    "middleName",
    "name",
    "namePrefix",
    "nameSuffix",
    "newPassword",
    "nickname",
    "oneTimeCode",
    "organizationName",
    "password",
    "postalCode",
    "streetAddressLine1",
    "streetAddressLine2",
    "sublocality",
    "telephoneNumber",
    "URL",
    "username",
  ]),

  /**
   * Rules for password generation (iOS only).
   */
  passwordRules: PropTypes.string,

  /**
   * Style for TextInput.
   */
  style: PropTypes.object,

  /**
   * Text break strategy for Android.
   */
  textBreakStrategy: PropTypes.oneOf(["simple", "highQuality", "balanced"]),

  /**
   * Color of the underline (Android only).
   * @uxpincontroltype color
   */
  underlineColorAndroid: PropTypes.string,

  /**
   * Value displayed in the TextInput.
   * @uxpinbind onChangeText 0
   */
  value: PropTypes.string,

  /**
   * Line break strategy for iOS 14+.
   */
  lineBreakStrategyIOS: PropTypes.oneOf([
    "none",
    "standard",
    "hangul-word",
    "push-out",
  ]),
};

export default TextInput;
