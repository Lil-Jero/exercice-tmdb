export class Movie {
    constructor(
        public id: string,
        public title: string,
        public release_date: string,
        public overview: string,
        public poster_path: string,
    ){}
}