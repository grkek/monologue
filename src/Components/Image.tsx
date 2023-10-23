import { State } from '../StandardLibrary/State';
import { Types } from '../StandardLibrary/Types';

import { Component } from '../StandardLibrary/Component';
import { NativeComponent } from '../StandardLibrary/NativeComponent';

import { Kind } from '../StandardLibrary/Enums/Kind';

class Image extends Component<Types.Any, State.ImageState> {
  kind: Readonly<Kind> = Kind.Image;

  constructor(properties: Types.Any, ...children: String[]) {
    super(properties, []);
  }

  didMount(): void {
    this.setResourcePath(this.properties.resourcePath);
  }

  mount(): NativeComponent {
    if (this.parent === undefined) { throw 'Component must have a parent component' }

    return new NativeComponent({
      id: this.properties.id,
      className: this.properties.className,
      kind: this.kind,
      //@ts-expect-error
      widget: UserInterface__Image(
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

  render(): Component<Types.Any, State.ImageState> {
    return this;
  }

  /* Modifiers */

  setResourcePath(resourcePath: String) {
    const { id } = this.properties as { id: String };
    globalThis[`${id}`].setResourcePath(resourcePath);
  }
}

export { Image };