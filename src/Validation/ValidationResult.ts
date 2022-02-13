export abstract class ValidationResult {
    constructor(
        public isValid: boolean,
        private validationError?: string
    ) { }

    getError(): string {
        return !this.isValid ? this.validationError! : '';
    }
}

export class ValidationResultOk extends ValidationResult {
    constructor() {
        super(true);
    }
}


export class ValidationResultFailed extends ValidationResult {
    constructor(
        validationError: string
    ) {
        super(false, validationError);
    }
}

