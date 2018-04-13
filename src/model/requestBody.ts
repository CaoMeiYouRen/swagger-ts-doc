import { DataType } from "./dataType";
import { RequestArgument } from "./requestArgument";

export class RequestBody extends RequestArgument {
    public refModel: { new(): any };

    constructor(name: string, dataType: DataType, refModel?: { new(): any }) {
        super(name, dataType);
        this.refModel = refModel;
    }
}
