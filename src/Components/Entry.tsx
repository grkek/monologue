import { State } from '../StandardLibrary/State';
import { Types } from '../StandardLibrary/Types';

import { Component } from '../StandardLibrary/Component';
import { NativeComponent } from '../StandardLibrary/NativeComponent';

import { Text } from './Text';
import { Kind } from '../StandardLibrary/Enums/Kind';

class Entry extends Component<Types.Any, State.EntryState> {
  kind: Readonly<Kind> = Kind.Entry;

  constructor(properties: Types.Any, ...children: String[]) {
    super(properties, []);

    if (children.length) {
      const value = children.pop();
      const text = new Text(value ? value.toString() : 'Hello, World!')

      this.children.push(text);
    }
  }

  didMount(): void {
    this.setText(this.children.map(child => { return child.properties.value }).join());
  }

  mount(): NativeComponent {
    if (this.parent === undefined) { throw 'Component must have a parent component' }

    return new NativeComponent({
      id: this.properties.id,
      className: this.properties.className,
      kind: this.kind,
      //@ts-expect-error
      widget: UserInterface__Entry(
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

  render(): Component<Types.Any, State.EntryState> {
    return this;
  }

  /* Modifiers */

  setText(value : String) {
    const { id } = this.properties as { id: String };
    globalThis[`${id}`].setText(value);
  }
}

export { Entry };