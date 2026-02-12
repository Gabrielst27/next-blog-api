import { validateSync } from 'class-validator';

export type FieldsErrors = {
  [field: string]: string[];
};

export class ClassValidator<Rules> {
  errors: FieldsErrors;
  validData: Rules;

  validate(data: any): boolean {
    const errors = validateSync(data);

    if (errors.length) {
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(
          error.constraints || 'Erro desconhecido',
        );
      }
      return false;
    }

    this.validData = data;
    return true;
  }
}
