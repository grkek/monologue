import { State } from '../StandardLibrary/State';
import { Types } from '../StandardLibrary/Types';

import { Component } from '../StandardLibrary/Component';
import { NativeComponent } from '../StandardLibrary/NativeComponent';

import { Text } from './Text';
import { Kind } from '../StandardLibrary/Enums/Kind';

class Button extends Component<Types.Any, State.ButtonState> {
  kind: Readonly<Kind> = Kind.Button;

  constructor(properties: Types.Any, ...children: String[]) {
    super(properties, []);

    if (children.length) {
      const value = children.pop();
      const text = new Text(value ? value.toString() : 'Hello, World!')

      this.children.push(text);
    }
  }

  didMount(): void {
    const { id } = this.properties as { id: String };

    this.setText(this.children.map(child => { return child.properties.value }).join());

    /*
      TODO: Set-up event handling for every component
    */
    globalThis[`${id}`].properties.onPress = this.properties.onPress;
    globalThis[`${id}`].properties.motionNotify = this.properties.motionNotify;
    globalThis[`${id}`].properties.focusChange = this.properties.focusChange;
    globalThis[`${id}`].properties.onRelease = this.properties.onRelease;
    globalThis[`${id}`].properties.onKeyPress = this.properties.onKeyPress;
  }

  mount(): NativeComponent {
    if (this.parent === undefined) { throw 'Component must have a parent component' }

    return new NativeComponent({
      id: this.properties.id,
      className: this.properties.className,
      kind: this.kind,
      //@ts-expect-error
      widget: UserInterface__Button(
        this.properties.id,
        this.properties.className,
        this.parent.nativeComponent.widget,
        this.properties.containerLabel,
        this.properties.containerExpand,
        this.properties.containerFill,
        this.properties.containerPadding,
        this.properties.horizontalAlignment,
        this.properties.verticalAlignment,
        this.properties.orientation
      )
    } as NativeComponent);
  }

  render(): Component<Types.Any, State.ButtonState> {
    return this;
  }

  /* Modifiers */

  setText(value : String) {
    const { id } = this.properties as { id: String };
    globalThis[`${id}`].setText(value);
  }
}

export { Button };