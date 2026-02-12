import { FieldsErrors } from 'src/shared/domain/validators/class.validator';

export class EntityValidationError extends Error {
  constructor(public error: FieldsErrors) {
    super('Entity validation error');
    this.name = 'EntityValidationError';
  }
}
