import { ValidationResultFailed, ValidationResultOk } from "../ValidationResult";

class RequiredFieldValidation {
    constructor(
        private readonly field: string,
        private readonly value: string
    ) { }

    validate(): ValidationResultOk | ValidationResultFailed {
        if (!this.value) {
            return new ValidationResultFailed(`O campo ${this.field} é obrigatório`);
        }

        return new ValidationResultOk();
    }
}


export default RequiredFieldValidation;