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

export abstract class DefaultModel {
  protected constructor(obj: Model) {
    Object.assign(this, obj);
  }
}
