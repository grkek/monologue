import { Component } from "./Component";
import { Types } from "./Types";

const getComponentById = (id : String) : Component<Types.Any, Types.Any> => {
  const component = new Component<Types.Any, Types.Any>({ id: id }, []);
  component.nativeComponent = component.mount(id);

  return component;
};

export { getComponentById };