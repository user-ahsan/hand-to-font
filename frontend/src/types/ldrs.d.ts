// Type declarations for LDRS components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-tailspin': {
        size?: string;
        stroke?: string;
        speed?: string;
        color?: string;
        children?: React.ReactNode;
      };
      'l-bouncy': {
        size?: string;
        speed?: string;
        color?: string;
        children?: React.ReactNode;
      };
    }
  }
}

export {};