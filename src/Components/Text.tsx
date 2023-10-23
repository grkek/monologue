import { Types } from '../StandardLibrary/Types';

import { Component } from '../StandardLibrary/Component';
import { NativeComponent } from '../StandardLibrary/NativeComponent';
import { Kind } from '../StandardLibrary/Enums/Kind';

class Text extends Component<Types.Any, Types.Any> {
  kind: Readonly<Kind> = Kind.Wrapper;

  constructor(value : String) {
    super({ value: value }, []);
  }

  mount(): NativeComponent {
    throw 'Not Implemented';
  }

  render(): Component<Types.Any, Types.Any> {
    throw 'Not Implemented';
  }
}

export { Text };