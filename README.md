# UXPin Merge & React Native – Experimental Mode Boilerplate Repository

UXPin Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor (https://uxpin.com). The imported components are 100% identical to components used by developers during the development process. It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users.

Thanks to the power of [React Native for Web](https://github.com/necolas/react-native-web) it is now possible to build components using react native! 
In this boilerplate you will find simple component examples using some of React Native's [core components](https://reactnative.dev/docs/components-and-apis)

## Installation

This boilerplate needs node and npm installed to run. Once you're ready clone the repository and install all the dependencies (`npm install`).

## What is Merge Experimental Mode

![alt text](https://preview.ibb.co/fsq20L/merge-exp.png)

Merge Experimental Mode let's you render your React.js components in a dev version of UXPin Design Editor directly from your local environment. 
You can test your components and see how they're going to behave in UXPin Design Editor!

## Rendering Components in the browser

Among the dependencies of this boilerplate you'll find `uxpin-merge` this tool prepares components for integration with UXPin. It has a built in development server that you can use to see the rendered components in the browser. To start the dev server use the following command:

```bash
npm run uxpin

When you're changing anything in the components files and you want to re-render components, don't forget to kill the process. Otherwise you'll get a `ELIFECYCLE` error. A handy way to kill all the node processes including the dev server is to run in your terminal:

```bash
killall -9 node
```

## Adding new components

Adding components to Merge is no different than creating normal React.js components. Merge accepts any standard approach to React. The only limitations that you should be aware of are:

- Components have to have default exports
- Components need to exist in separate directories
- Only one component is allowed per file and directory e.g. `./src/Button/Button.js`
- You have to add the component to uxpin.config.js file
- You have to prepare presets for every component (temporary restrictions to be replaced by jsx presets)

## Creating presets

Preset is a JSX file that describes components in a structured way.

- For `./src/Button/Button.js` component we require one preset in `./src/Button/presets/0-default.jsx`

Example preset:

```jsx
<Button
    uxpId="button"
    disabled={false}
    title="Merge">
  </Button>
</Button>
```

As you can see we are defining the default props and the structure of the Button component. When dragged onto the UXPin canvas, the initial render of the component will appear with the above structure. One thing to note is that every component set in a preset file must have a unique UXPin ID attribute `uxpId`. This allows Merge to properly render every component and track overrides of components. 

If you would like to learn more about managing JSX presets and Merge integration. Please see our [Merge documentation](https://www.uxpin.com/docs/merge/what-is-uxpin-merge/).

## Adding react-native-web to your own project

Assuming you already have a react component library with our uxpin cli package and files already installed OR using one of our uxpin merge boilerplate repos.

1. If reposotiry is React based install react native via:
```
 yarn add react-native
```
or 
```
npm install react-native
```
2. If repository is react-native based:
```
yarn add react
```
or 
```
npm install react
```
3. install react-native-web
```
yarn add react-native-web
```
or 
```
npm install react-native-web
```
4. in uxpin.webpack.config.js add the following to the resolve field:
```
alias: {
      'react-native': 'react-native-web',
    },
```
5. add .web.js to extensions field:
```
extensions: ['.web.js', '*', '.js', '.jsx']
```
6.  wrap a component from react-native package as you normally would for a standard integration.