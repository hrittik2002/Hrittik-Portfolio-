// src/declarations/typewriter-effect.d.ts

declare module 'typewriter-effect' {
    import { ReactNode, Component } from 'react';
  
    interface TypewriterOptions {
      strings: string[];
      autoStart?: boolean;
      loop?: boolean;
      delay?: number;
      deleteSpeed?: number;
      typingSpeed?: number;
      onInit?: (typewriter: any) => void;
      onStart?: (self: any) => void;
      onUpdate?: (self: any) => void;
      onComplete?: (self: any) => void;
    }
  
    class Typewriter extends Component<{ options: TypewriterOptions }> {
      constructor(element: Element | string, options: TypewriterOptions);
      typeString(str: string): this;
      deleteAll(): this;
      start(): this;
      stop(): this;
      pauseFor(ms: number): this;
      callFunction(fn: () => void): this;
      changeDelay(speed: number): this;
      changeDeleteSpeed(speed: number): this;
      changeTypeSpeed(speed: number): this;
      changeCursor(newChar: string): this;
      addEventListener(eventName: string, callback: () => void): this;
    }
  
    export default Typewriter;
  }
  