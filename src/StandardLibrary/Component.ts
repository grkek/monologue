import { React } from './React';

import { Kind } from './Enums/Kind';
import { NativeComponent } from './NativeComponent';

import { State } from './State';
import { Types } from './Types';

import { Align } from './Enums/Align';
import { Orientation } from './Enums/Orientation';

class Component<P, S>{
  state: S = {} as S;
  properties: P = {} as P;

  kind: Readonly<Kind> = Kind.Generic;

  parent?: Component<Types.Any, Types.Any>;
  children: Component<P, S>[] = [];

  nativeComponent: NativeComponent = new NativeComponent({} as NativeComponent);

  constructor(properties: P, children: Component<P, S>[]) {
    properties = {
      id: React.randomIdentifier(),
      className: React.randomClassName(),
      containerLabel: 'Untitled',
      containerExpand: false,
      containerFill: false,
      containerPadding: 0,
      horizontalAlignment: Align.Fill,
      verticalAlignment: Align.Fill,
      orientation: Orientation.Horizontal,
      ...properties
    };

    this.properties = properties;
  }

  mount(id: String): NativeComponent {
    const internalComponent = globalThis[`${id}`];

    if (internalComponent !== undefined) {
      return this.fetchMount(id);
    }

    throw 'Not Implemented';
  }

  didMount() { /* Not implemented, but no need to raise an error */}

  private fetchMount(id: String): NativeComponent {
    /* Every component should implement this function */
    const state = globalThis[`${id}`].state as State.GenericState;
    const className = globalThis[`${id}`].className as String;

    switch (state.kind) {
      case "BOX":
        this.kind = Kind.Box;

        return new NativeComponent({
          id: id,
          className: className,
          kind: Kind.Box,
          //@ts-expect-error
          widget: UserInterface__GetWidget(id)
        });
      case "LABEL":
        this.kind = Kind.Label;

        return new NativeComponent({
          id: id,
          className: className,
          kind: Kind.Label,
          //@ts-expect-error
          widget: UserInterface__GetWidget(id)
        });
      default:
        throw `Not implemented for ${state.kind}`;
    }
  }

  render(): Component<P, S> {
    /* Every component should implement this function */
    throw 'Not implemented';
  }
};

export { Component };