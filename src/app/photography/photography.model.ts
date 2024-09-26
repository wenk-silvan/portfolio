export class Photography {
    title: string = ""
    galleries: Gallery[] = []
    link_text: string = ""
    link_back_text: string = ""
}

export class Gallery {
    title: string = ""
    description: string = ""
    thumbnail_path: string = ""
    image_paths: string[] = []
}