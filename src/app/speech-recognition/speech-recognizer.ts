import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpeechRecognizer {

    constructor(private _ngZone: NgZone) {
    }

    getTranscript({locale = 'en-US'}: { locale?: string } = {}): Observable<string> {

        return new Observable(observer => {

            const SpeechRecognition = window['webkitSpeechRecognition'];
            const speechRecognition = new SpeechRecognition();
            speechRecognition.continuous = true;
            speechRecognition.interimResults = true;
            speechRecognition.lang = locale;
            speechRecognition.onresult = (speechRecognitionEvent) => {

                const {results} = speechRecognitionEvent;

                const {transcript} = results[results.length - 1][0];

                this._ngZone.run(() => observer.next(transcript.trim()));

            };

            speechRecognition.start();

            return () => speechRecognition.abort();

        });

    }

}
