export class DnsRecord {

    host: string;
    type: string;
    value: string;

    constructor(args: Partial<DnsRecord>) {
        this.host = args.host;
        this.type = args.type;
        this.value = args.value;
    }

}
