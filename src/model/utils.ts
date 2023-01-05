export type BrandType<ID extends string, T> = T &
  {
    [key in ID]: never;
  };

export const brandType = <ID extends string, T>(v: T): BrandType<ID, T> => {
  return v as BrandType<ID, T>;
};
