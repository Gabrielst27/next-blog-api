import { v4 } from 'uuid';

export type BaseProps = {
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class BaseEntity<Props extends BaseProps> {
  private readonly _id: string;
  private readonly _props: Props;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;

  constructor({ ...props }: Props, id?: string) {
    this._id = id || v4();
    this._createdAt = props.createdAt || new Date();
    this._updatedAt = props.updatedAt || new Date();
    this._props = props;
  }

  public get id(): string {
    return this._id;
  }

  public get props(): Props {
    return this._props;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  toJson(): Required<{ id: string } & Props> {
    return {
      id: this.id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}
