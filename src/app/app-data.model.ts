import { Blogs } from "./home/blogs/blogs.model"
import { Career } from "./home/career/career.model"
import { Photography } from "./home/photography/photography.model"

export class AppData {
    career: Career = new Career()
    photography: Photography = new Photography()
    blogs: Blogs = new Blogs()
    link_back_text: string = ""
}