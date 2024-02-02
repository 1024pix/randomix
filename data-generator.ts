export type DataGenerator<Args extends any[] = any[], T = any> = {
  (args: { random: RandomFunction, data: any }): (...args: Args) => T
};

export type RandomFunction = () => number;
