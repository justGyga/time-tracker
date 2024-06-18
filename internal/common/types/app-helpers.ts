export type ListView<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type DefaultMeta = "id" | "created";
