export class HelloComponent {

    constructor() {
        this.name = '🌏';
        this.cityList = [
            'Lyon',
            'Nice',
            'Paris'
        ]
    }

    getPictureUrl() {
        return `https://robohash.org/${encodeURIComponent(this.name)}?set=set4`;
    }

    toggle() {
        this.name = this.name === '🌏' ? '🌎' : '🌏';
    }

}

HelloComponent.config = {
    controller: HelloComponent,
    template: require('./hello.component.html')
};
