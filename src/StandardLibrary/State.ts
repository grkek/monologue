namespace State {
  export interface GenericState {
    kind: string;
  }

  export interface ButtonState {

  };

  export interface ListBoxState {

  };

  export interface ScrolledWindowState {

  };

  export interface EntryState {

  };

  export interface ImageState {

  };

  export interface LabelState {
    horizontalAlignment: { id: number, name: string };
    verticalAlignment: { id: number, name: string };
    accessibleRole: { id: number, name: string };
    overflow: { id: number, name: string };
    canFocus: boolean;
    canTarget: boolean;
    cssClasses: boolean;
    focusOnClick: boolean;
    focusable: boolean;
    hasDefault: boolean;
    hasFocus: boolean;
    hasTooltip: boolean;
    horizontalExpand: boolean;
    horizontalExpandSet: boolean;
    heightRequest: number;
    marginBottom: number;
    marginEnd: number;
    marginStart: number;
    marginTop: number;
    cssName: string;
    name: string;
    opacity: string;
  };

  export interface BoxState {
    horizontalAlignment: { id: number, name: string };
    verticalAlignment: { id: number, name: string };
    accessibleRole: { id: number, name: string };
    baselinePosition: { id: number, name: string };
    orientation: { id: number, name: string };
    overflow: { id: number, name: string };
    canFocus: boolean;
    canTarget: boolean;
    focusOnClick: boolean;
    focusable: boolean;
    hasDefault: boolean;
    hasFocus: boolean;
    hasTooltip: boolean;
    visible: boolean;
    homogeneous: boolean;
    horizontalExpand: boolean;
    horizontalExpandSet: boolean;
    receivesDefault: boolean;
    sensitive: boolean;
    verticalExpand: boolean;
    verticalExpandSet: boolean;
    heightRequest: number;
    marginBottom: number;
    marginEnd: number;
    marginStart: number;
    marginTop: number;
    opacity: number;
    scaleFactor: number;
    spacing: number;
    widthRequest: number;
    cssClasses: string;
    cssName: string;
    children: string[];
    parent: string | undefined;
    name: string;
    tooltipMarkup: string;
    tooltipText: string;
  };
}

export { State };