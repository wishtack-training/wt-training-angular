export class HelloComponent {

    constructor() {
        this.name = '🌏';
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
    template: `
<h1>Hello {{ $ctrl.name }}</h1>
<form>
    <input ng-model="$ctrl.name" type="text">
</form>
<img ng-src="{{$ctrl.getPictureUrl()}}" alt="">
<button ng-click="$ctrl.toggle()">TOGGLE</button>
<wt-separator></wt-separator>

`
};
