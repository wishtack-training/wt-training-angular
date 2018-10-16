export class HelloComponent {

    constructor() {
        this.name = '🌏';
        this.cityList = [
            'Lyon',
            'Nice',
            'Paris'
        ];
        this.rating = 3;
    }

    getPictureUrl() {
        return `https://robohash.org/${encodeURIComponent(this.name)}?set=set4`;
    }

    toggle() {
        this.name = this.name === '🌏' ? '🌎' : '🌏';
    }

    updateRating(rating) {
        if (rating > 10) {
            return;
        }
        this.rating = rating;
    }


}

HelloComponent.config = {
    controller: HelloComponent,
    template: require('./hello.component.html')
};
