export interface GoogleBook {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks: {
            thumbnail: string;
        }
    };
}

export interface GoogleBookListResponse {
    items: GoogleBook[];
}
