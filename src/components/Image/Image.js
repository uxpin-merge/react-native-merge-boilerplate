import * as React from "react";
import PropTypes from "prop-types";
import { Image as ImageM } from "react-native";

/**
 * @uxpindocurl https://reactnative.dev/docs/image
 */
function Image(props) {
  return <ImageM {...props} />;
}

Image.propTypes = {
  /**
   * A unique identifier for this element to be used in UI Automation testing scripts.
   * */
  testID: PropTypes.string,

  /**
   * When true, indicates the image is an accessibility element.
   */
  accessible: PropTypes.bool,

  /**
   * The text that's read by the screen reader when the user interacts with the image.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * blurRadius: the blur radius of the blur filter added to the image.
   */
  blurRadius: PropTypes.number,

  /** iOS
   *  When the image is resized, the corners of the size specified by capInsets will stay a fixed size,
   * but the center content and borders of the image will be stretched.
   * This is useful for creating resizable rounded buttons, shadows, and other resizable assets.
   * More info in the official Apple documentation. https://developer.apple.com/documentation/uikit/uiimage#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets
   * */
  capInsets: PropTypes.object,

  /**
   * A static image to display while loading the image source.
   */
  defaultSource: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),

  /**
   * Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to cover.
   * cover: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height)
   * of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
   * contain: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height)
   * of the image will be equal to or less than the corresponding dimension of the view (minus padding).
   * stretch: Scale width and height independently, This may change the aspect ratio of the src.
   * repeat: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio,
   * unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.
   * center: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.
   */
  resizeMode: PropTypes.oneOf([
    "cover",
    "contain",
    "stretch",
    "repeat",
    "center",
  ]),

  /** Andriod
   * When true, enables progressive jpeg streaming - https://frescolib.org/docs/progressive-jpegs.
   */
  progressiveRenderingEnabled: PropTypes.bool,

  /** Andriod
   * Fade animation duration in miliseconds.
   */
  fadeDuration: PropTypes.number,

  /** Andriod
   * The mechanism that should be used to resize the image when the image's dimensions differ from the image view's dimensions. Defaults to auto.
   * auto: Use heuristics to pick between resize and scale.
   * resize: A software operation which changes the encoded image in memory before it gets decoded. This should be used instead of scale when the image is much larger than the view.
   * scale: The image gets drawn downscaled or upscaled. Compared to resize, scale is faster (usually hardware accelerated) and produces higher quality images. 
            This should be used if the image is smaller than the view. It should also be used if the image is slightly bigger than the view.
   * More details about resize and scale can be found at http://frescolib.org/docs/resizing
   */
  resizeMethod: PropTypes.oneOf(["auto", "resize", "scale"]),

  /**
   * The image source (either a remote URL or a local file resource).
   * This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments.
   * The native side will then choose the best uri to display based on the measured size of the image container.
   * A cache property can be added to control how networked request interacts with the local cache.
   * https://reactnative.dev/docs/images#cache-control-ios-only
   * The currently supported formats are png, jpg, jpeg, bmp, gif, webp, psd (iOS only).
   * In addition, iOS supports several RAW image formats. Refer to Apple's documentation for the current list of supported camera models
   * https://support.apple.com/en-ca/HT208967
   * @uxpincontroltype image
   */
  source: PropTypes.string,

  /**
   * Similarly to source, this property represents the resource used to render the loading indicator for the image.
   * The loading indicator is displayed until image is ready to be displayed, typically after the image is downloaded.
   */
  loadingIndicatorSource: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),

  /**
   * Invoked on load error.
   * ({ nativeEvent: { error } }) => void
   */
  onError: PropTypes.func,

  /**
   * Invoked on mount and on layout changes.
   * ({ nativeEvent: LayoutEvent }) => void
   */
  onLayout: PropTypes.func,

  /**
   * Invoked when load completes successfully.
   * { nativeEvent: ImageLoadEvent }) => void
   */
  onLoad: PropTypes.func,

  /**
   * Invoked when load either succeeds or fails.
   * () => void
   */
  onLoadEnd: PropTypes.func,

  /**
   * Invoked on load start.
   * onLoadStart={() => this.setState({loading: true})}
   */
  onLoadStart: PropTypes.func,

  /** iOS
   * Invoked when a partial load of the image is complete.
   * The definition of what constitutes a "partial load" is loader specific though this is meant for progressive JPEG loads.
   */
  onPartialLoad: PropTypes.func,

  /**
   * Invoked on download progress.
   * ({ nativeEvent: { loaded, total } }) => void
   */
  onProgress: PropTypes.func,

  /**
   * Image Style Props, Layout Props, Shadow Props, Transforms
   * @uxpincontroltype css
   */
  style: PropTypes.object,
};

export default Image;
