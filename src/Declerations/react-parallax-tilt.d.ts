// src/declarations/react-parallax-tilt.d.ts

declare module 'react-parallax-tilt' {
    import React, { CSSProperties } from 'react';
  
    interface ParallaxTiltProps {
      tiltMaxAngleX?: number;
      tiltMaxAngleY?: number;
      tiltReverse?: boolean;
      tiltEnable?: boolean;
      tiltAxis?: null | 'x' | 'y';
      perspective?: number;
      glareEnable?: boolean;
      glareMaxOpacity?: number;
      glareColor?: string;
      glarePosition?: 'top' | 'right' | 'bottom' | 'left';
      scale?: number;
      transitionSpeed?: number;
      gyroscope?: boolean;
      gyroscopeMinAngleX?: number;
      gyroscopeMaxAngleX?: number;
      gyroscopeMinAngleY?: number;
      gyroscopeMaxAngleY?: number;
      gyroscopeSamples?: number;
      gyroscopeUpdateInterval?: number;
      gyroscopeXMaxAngle?: number;
      gyroscopeYMaxAngle?: number;
      gyroscopeMinAngleXr?: number;
      gyroscopeMaxAngleXr?: number;
      gyroscopeMinAngleYr?: number;
      gyroscopeMaxAngleYr?: number;
      onMove?: (tiltState: TiltState) => void;
      onEnter?: () => void;
      onLeave?: () => void;
      onReveal?: () => void;
      className?: string;
      style?: CSSProperties;
      children: React.ReactNode;
    }
  
    interface TiltState {
      tiltValue: number;
      percentageX: number;
      percentageY: number;
      angleX: number;
      angleY: number;
      posX: number;
      posY: number;
      mouseX: number;
      mouseY: number;
    }
  
    const ParallaxTilt: React.FC<ParallaxTiltProps>;
  
    export default ParallaxTilt;
  }
  