import { Kind } from "./Enums/Kind";

class NativeComponent {
  id: String;
  className: String;
  kind: Kind;
  widget: ArrayBuffer;

  constructor(properties: NativeComponent = {} as NativeComponent) {
    this.id = properties.id;
    this.className = properties.className;
    this.kind = properties.kind;
    this.widget = properties.widget;
  }
};

export { NativeComponent }