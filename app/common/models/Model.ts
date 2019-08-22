export enum Operation {
  create = "create",
  update = "update",
  delete = "delete"
}

export interface Model {
  create?: () => void;
  delete?: () => void;
  update?: () => void;
  id: number;
  toString?: (instance: Model) => string;
}
