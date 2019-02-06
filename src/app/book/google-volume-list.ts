export interface GoogleVolume {
    saleInfo: {
        retailPrice: {
            amount: number;
        }
    };
    volumeInfo: {
        id: string;
        title: string;
        authors: string[];
    };
}

export interface GoogleList<T> {
    totalItems: number;
    items: T[];
}

export type GoogleVolumeList = GoogleList<GoogleVolume>;
