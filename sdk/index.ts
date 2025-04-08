import { renderHeader } from './render';

declare global {
  interface Window {
    PartaoSDK: {
      renderHeader: typeof renderHeader;
    };
  }
}

window.PartaoSDK = {
  renderHeader,
};