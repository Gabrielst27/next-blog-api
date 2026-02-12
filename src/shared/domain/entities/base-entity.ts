import { v4 } from 'uuid';

export type BaseProps = {
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class BaseEntity<Props extends BaseProps> {
  private readonly _id: string;
  private readonly _props: Props;

  constructor({ ...props }: Props, id?: string) {
    this._id = id || v4();
    props.createdAt = props.createdAt || new Date();
    props.updatedAt = props.updatedAt || new Date();
    this._props = props;
  }

  public get id(): string {
    return this._id;
  }

  public get props(): Props {
    return this._props;
  }
}
