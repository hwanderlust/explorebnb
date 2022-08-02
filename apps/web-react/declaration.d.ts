// TODO: figure out how to do this at the ui package level
import { DOMAttributes } from "react";
import * as WiredElements from "ui";

export {}

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wired-button": CustomElement<WiredElements.WiredButton>;
      "wired-calendar": unknown; // TODO: figure out why not picking up export
      "wired-card": CustomElement<WiredElements.WiredCard>;
      "wired-checkbox": CustomElement<WiredElements.WiredCheckbox>;
      "wired-combo": CustomElement<WiredElements.WiredCombo>;
      "wired-dialog": CustomElement<WiredElements.WiredDialog>;
      "wired-divider": CustomElement<WiredElements.WiredDivider>;
      "wired-fab": CustomElement<WiredElements.WiredFab>;
      "wired-icon-button": CustomElement<WiredElements.WiredIconButton>;
      "wired-image": CustomElement<WiredElements.WiredImage>;
      "wired-input": CustomElement<WiredElements.WiredInput>;
      "wired-link": CustomElement<WiredElements.WiredLink>;
      "wired-listbox": CustomElement<WiredElements.WiredListbox>;
      "wired-progress": CustomElement<WiredElements.WiredProgress>;
      "wired-radio": CustomElement<WiredElements.WiredRadio>;
      "wired-search-input": CustomElement<WiredElements.WiredSearchInput>;
      "wired-slider": CustomElement<WiredElements.WiredSlider>;
      "wired-spinner": CustomElement<WiredElements.WiredSpinner>;
      "wired-tabs": CustomElement<WiredElements.WiredTabs>;
      "wired-textarea": CustomElement<WiredElements.WiredTextarea>;
      "wired-toggle": CustomElement<WiredElements.WiredToggle>;
      "wired-video": CustomElement<WiredElements.WiredVideo>;
    }
  }
}