import { v4 } from 'uuid';

export type BaseEntityProps = {
  createdAt: Date;
  updatedAt: Date;
};

export abstract class BaseEntity<Props extends BaseEntityProps> {
  private readonly _id: string;
  private readonly _props: Props;

  constructor({ ...props }: Props, id?: string) {
    this._id = id || v4();
    this._props = props;
  }

  public get id(): string {
    return this._id;
  }

  public get props(): Props {
    return this._props;
  }
}
