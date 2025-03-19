declare module '@studio-freight/lenis' {
    class Lenis {
      constructor(options: { [key: string]: any });
      raf(time: number): void;
      destroy(): void;
    }
    export default Lenis;
  }