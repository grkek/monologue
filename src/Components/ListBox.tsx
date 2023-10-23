import { State } from '../StandardLibrary/State';
import { Types } from '../StandardLibrary/Types';

import { Component } from '../StandardLibrary/Component';
import { NativeComponent } from '../StandardLibrary/NativeComponent';
import { Kind } from '../StandardLibrary/Enums/Kind';

class ListBox extends Component<Types.Any, State.ListBoxState> {
  kind: Readonly<Kind> = Kind.ListBox;

  constructor(properties: Types.Any, ...children: Component<Types.Any, Types.Any>[]) {
    super(properties, children);

    children.forEach(child => {
      if(Array.isArray(child)) {
        child.forEach(subChild => {
          subChild.parent = this;
          this.children.push(subChild);
        });
      } else {
        child.parent = this;
        this.children.push(child);
      }
    });
  }

  mount(): NativeComponent {
    if (this.parent === undefined) { throw 'Component must have a parent component' }

    return new NativeComponent({
      id: this.properties.id,
      className: this.properties.cssName,
      kind: this.kind,
      //@ts-expect-error
      widget: UserInterface__ListBox(
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

  render(): Component<Types.Any, State.ListBoxState> {
    return this;
  }
}

export { ListBox };