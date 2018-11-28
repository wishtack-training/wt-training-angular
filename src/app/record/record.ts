export class Record {

    constructor(
        public type: string,
        public host: string,
        public value: string
    ) {
    }

}

// export class Record {
//
//     host: string;
//     type: string;
//     value: string;
//
//     constructor(args: Partial<Record>) {
//         this.host = args.host;
//         this.type = args.type;
//         this.value = args.value;
//     }
//
// }
//
// const record1 = new Record({
//     host: '',
//     data: '',
//     value: 'VALUE'
// });
//
// const record2 = new Record(record1);
//
// const data = {
//     host: '',
//     data: '',
//     value: 'VALUE'
// };
//
// const record4 = new Record(data);
//
// const record3 = new Record(JSON.parse(rawData));
