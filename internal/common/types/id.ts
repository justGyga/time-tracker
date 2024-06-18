export type ObjectID = string;

export type UUID = string;

export type ID = ObjectID | UUID | number;

export interface IPrimaryKey {
    id: ID;
}
