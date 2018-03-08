export class Pds {
    private callStack: any;

    constructor() {
        this.callStack = {};
    }

    public get(entityName: string) {
        this.callStack['get'] = entityName;
        return this;
    }

    public where(propertyName: string, operator: string, value: string | number) {
        if (!this.callStack['conditions']) {
            this.callStack.conditions = [];
        }
        this.callStack.conditions.push({
            propertyName,
            operator,
            value
        });
        return this;
    }

    public execute() {
        return new Promise ((resolve, reject) => {
            resolve(this.callStack);
        });
    }

}
