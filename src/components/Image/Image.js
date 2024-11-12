import * as React from "react";
import PropTypes from "prop-types";
import { Image as ImageM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/image
 * @uxpindescription A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
 */
function Image(props) {
  return <ImageM {...props} />;
}

Image.propTypes = {
  /**
   * When true, indicates the image is an accessibility element.
   */
  accessible: PropTypes.bool,

  /**
   * Text read by the screen reader when interacting with the image.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Alternative text description of the image for accessibility.
   */
  alt: PropTypes.string,

  /**
   * Blur radius of the image.
   */
  blurRadius: PropTypes.number,

  /**
   * Specifies resizable corners for iOS.
   */
  capInsets: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }),

  /**
   * CORS mode for fetching the image resource.
   */
  crossOrigin: PropTypes.oneOf(["anonymous", "use-credentials"]),

  /**
   * Static image to display while loading the image source.
   */
  defaultSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * Fade animation duration in milliseconds (Android only).
   */
  fadeDuration: PropTypes.number,

  /**
   * Height of the image component.
   */
  height: PropTypes.number,

  /**
   * Resource for loading indicator while image is loading.
   */
  loadingIndicatorSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
    PropTypes.number,
  ]),

  /**
   * Callback invoked on load error.
   */
  onError: PropTypes.func,

  /**
   * Callback invoked on mount and layout changes.
   */
  onLayout: PropTypes.func,

  /**
   * Callback invoked when load completes successfully.
   */
  onLoad: PropTypes.func,

  /**
   * Callback invoked when load succeeds or fails.
   */
  onLoadEnd: PropTypes.func,

  /**
   * Callback invoked on load start.
   */
  onLoadStart: PropTypes.func,

  /**
   * Callback invoked on partial load completion (iOS only).
   */
  onPartialLoad: PropTypes.func,

  /**
   * Callback invoked on download progress.
   */
  onProgress: PropTypes.func,

  /**
   * Enables progressive JPEG streaming (Android only).
   */
  progressiveRenderingEnabled: PropTypes.bool,

  /**
   * Referrer policy for fetching the resource.
   */
  referrerPolicy: PropTypes.oneOf([
    "no-referrer",
    "no-referrer-when-downgrade",
    "origin",
    "origin-when-cross-origin",
    "same-origin",
    "strict-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url",
  ]),

  /**
   * Mechanism for resizing the image on Android.
   */
  resizeMethod: PropTypes.oneOf(["auto", "resize", "scale", "none"]),

  /**
   * Determines how to resize the image.
   */
  resizeMode: PropTypes.oneOf([
    "cover",
    "contain",
    "stretch",
    "repeat",
    "center",
  ]),

  /**
   * Multiplier for resizing images when resizeMethod is set to resize (Android only).
   */
  resizeMultiplier: PropTypes.number,

  /**
   * Image source (remote URL or local file).
   */
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
      scale: PropTypes.number,
      bundle: PropTypes.string,
      method: PropTypes.string,
      headers: PropTypes.object,
      body: PropTypes.string,
      cache: PropTypes.oneOf([
        "default",
        "reload",
        "force-cache",
        "only-if-cached",
      ]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
      })
    ),
    PropTypes.number,
  ]),

  /**
   * Remote URL for the image.
   * @uxpincontroltype image
   */
  src: PropTypes.string,

  /**
   * Comma-separated list of possible candidate image sources.
   */
  srcSet: PropTypes.string,

  /**
   * Style for image component.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Unique identifier for UI testing.
   */
  testID: PropTypes.string,

  /**
   * Tint color for all non-transparent pixels.
   * @uxpincontroltype color
   */
  tintColor: PropTypes.string,

  /**
   * Width of the image component.
   */
  width: PropTypes.number,
};

export default Image;
