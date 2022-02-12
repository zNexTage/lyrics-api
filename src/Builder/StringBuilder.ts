class StringBuilder {
    constructor(
        private value: string = ''
    ) { }

    append(value: string) {
        this.value = this.value.concat(value);
    }

    toString() {
        return this.value;
    }
}

export default StringBuilder;