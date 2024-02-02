export { default as RingModel } from "./RingModel";
export { default as NavButton } from "./NavButton";
export { default as Title } from "./Title";
export { default as Subtitle } from "./Subtitle";
export { default as Container } from "./Container";
export { default as Button } from "./Button";
export { default as Text } from "./Text";
export { default as Input } from "./Input";
export { default as CardGrid } from "./CardGrid";
export { default as Select } from "./Select";
export { default as GollumModel } from "./GollumModel";

/*

Module pattern

Module pattern is used to create a module of related methods and properties.
It is used to create private and public methods and properties.
It is used to avoid polluting the global namespace.
In this example, the module pattern is used to export components from the atom folder.
Following the module pattern, the components are imported and exported in the index.ts file.


==============================

Atomic Design

Atomic design is a methodology for creating design systems.
It is based on the idea that a design system should be composed of smaller, reusable components.
In this example, the components are organized into atoms, cells, and organisms. and extra folders compounds and HOC.

*/
