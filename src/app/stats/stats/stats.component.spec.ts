import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';
import { StatsModule } from '../stats.module';
import { StatsHelper } from '../stats-helper';

describe('StatsComponent', () => {

    let component: StatsComponent;
    let fixture: ComponentFixture<StatsComponent>;
    let statsHelper: StatsHelper;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StatsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(() => statsHelper = TestBed.get(StatsHelper));

    it('should create', () => {
        /*
         * Prepare
         */
        const element = fixture.debugElement.nativeElement;

        spyOn(statsHelper, 'getSolution').and.returnValue(42);

        /*
         * Act.
         */

        element.querySelector('button').click();

        fixture.detectChanges();

        /*
         * Assert.
         */

        const statsText = element.querySelector('.wt-stats-result')
            .textContent;

        expect(statsText).toEqual('42');

        expect(statsHelper.getSolution).toHaveBeenCalledTimes(1);
        expect(statsHelper.getSolution).toHaveBeenCalledWith();

    });

});
