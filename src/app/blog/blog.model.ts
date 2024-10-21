export class Blog {
    constructor(    
        public id: string = "",
        public title: string = "",
        public date: string = "",
        public author: string = "",
        public image_path: string = "",
        public lead: string = "",
        public md_path: string = ""
    ) {}
}