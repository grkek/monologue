import { Component } from "./Component";
import { Kind } from "./Enums/Kind";
import { Types } from "./Types";

class FunctionWrapper {
  createElement(classType: Types.Any, properties: Types.Any, ...children: Component<Types.Any, Types.Any>[]) : Component<Types.Any, Types.Any> {
    try {
      const initialElement = new classType(properties, children);
      return initialElement.render();
    } catch (err) {
      console.log("An error occured during createElement", err);
      throw err;
    }
  }

  createRootAndRender(component: Component<Types.Any, Types.Any>, parent: Component<Types.Any, Types.Any>) {
    component.parent = parent;
    this.recursiveMount(component);
  }

  recursiveMount(component: Component<Types.Any, Types.Any>) {
    try {
      if (component.kind == Kind.Wrapper) { return; }
      if (component.parent == undefined) { return; }

      const { id } = component.properties;

      component.nativeComponent = component.mount(id);
      component.didMount();

      component.properties = {...globalThis[`${id}`].properties, ...component.properties };
      component.state = { ...globalThis[`${id}`].state };


      component.children.forEach(child => {
        if(Array.isArray(child)) { child.forEach(subChild => { this.recursiveMount(subChild); })}
        else { this.recursiveMount(child); }
      });
    } catch (err) {
      console.log("An error occured during recursiveMount", err);
    }
  }

  randomIdentifier(): String {
    //@ts-expect-error
    return Cryptography__RandomBytes(32);
  }

  randomClassName(): String {
    //@ts-expect-error
    return Cryptography__RandomBytes(32);
  }

  functionName(functionDefinition: Types.Any): String {
    let definition = functionDefinition.toString();

    definition = definition.substr('function '.length);
    definition = definition.substr(0, definition.indexOf('('));

    return definition;
  }
}

const React = new FunctionWrapper();

export { React };