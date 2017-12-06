import { Component, ElementRef, OnInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
    selector: 'wt-signature',
    templateUrl: './signature.component.html',
    styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

    private _signaturePad;

    constructor(private _element: ElementRef) {
    }

    ngOnInit() {

        const canvas = this._element.nativeElement.querySelector('canvas');

        this._signaturePad = new SignaturePad(canvas);

    }

    submit() {
        console.log(this._signaturePad.toDataURL());
    }

    clear() {
        this._signaturePad.clear();
    }


}
