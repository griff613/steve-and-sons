// src/declarations.d.ts
declare module 'react-slick' {
  import * as React from 'react';

  interface SliderProps {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    [key: string]: any;
  }

  class Slider extends React.Component<SliderProps> {}

  export default Slider;
}

