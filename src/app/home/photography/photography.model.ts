export class Gallery {
    constructor(
        public id: string = "",
        public title: string = "",
        public description: string = "",
        public thumbnail_path: string = "",
        public image_paths: string[] = []
    ) {}
}