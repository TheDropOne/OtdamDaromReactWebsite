import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export const borderRadius = '10px';
export const borderColor = 'hsl(0, 0%, 90%)';

export const fontColor = 'hsl(0, 0%, 25%)';

export const fontSizeLogo = '36px';
export const fontSizeHuge = '30px';
export const fontSizeBig = '24px';
export const fontSizeMedium = '21px';
export const fontSizeSmall = '18px';
export const fontSizeTiny = '15px';

export const fontTitle = '32px';
export const fontDescription = '24px';
export const fontMeta = '20px';


export const hoverBackground = 'hsl(0, 0%, 90%)';

export const CommonStyle = createGlobalStyle`
  a {
    transition-property: color, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;

    text-decoration: none;
  }

  a:hover {
    color: ${lighten(0.3, fontColor)};
    opacity: 0.9;
  }
`;
