export class FieldStructure {
    Length: number;
    RefId: number;
    label: string;
    name: string;
    required : boolean;
    type: string;
    value: string;
    options:Array< {
        key: string;
        label: string;
    }>
}