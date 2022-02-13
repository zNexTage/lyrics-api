import IValidation from "./Provider/IValidation";
import { ValidationResultFailed, ValidationResultOk } from "./ValidationResult";



class Validator {
    constructor(
        private validations: IValidation[]
    ) { }

    addValidation(validation: IValidation) {
        this.validations.push(validation);
    }

    validate(): ValidationResultOk | ValidationResultFailed {
        for (const validation of this.validations) {
            const result = validation.validate();

            if (!result.isValid) {
                return result;
            }
        }

        return new ValidationResultOk();
    }
}

export default Validator;