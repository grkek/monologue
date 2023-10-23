import { State } from '../StandardLibrary/State';
import { Types } from '../StandardLibrary/Types';

import { Component } from '../StandardLibrary/Component';
import { NativeComponent } from '../StandardLibrary/NativeComponent';

import { Kind } from '../StandardLibrary/Enums/Kind';

class HorizontalSeparator extends Component<Types.Any, Types.Any> {
  kind: Readonly<Kind> = Kind.HorizontalSeparator;

  constructor(properties: Types.Any, ...children: String[]) {
    super(properties, []);
  }

  didMount(): void { }

  mount(): NativeComponent {
    if (this.parent === undefined) { throw 'Component must have a parent component' }

    return new NativeComponent({
      id: this.properties.id,
      className: this.properties.className,
      kind: this.kind,
      //@ts-expect-error
      widget: UserInterface__HorizontalSeparator(
        this.properties.id,
        this.properties.className,
        this.parent.nativeComponent.widget
      )
    } as NativeComponent);
  }

  render(): Component<Types.Any, Types.Any> {
    return this;
  }
}

export { HorizontalSeparator };