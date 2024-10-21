import { Blogs } from "./home/blogs/blogs.model"
import { Career } from "./home/career/career.model"

export class AppData {
    career: Career = new Career()
    blogs: Blogs = new Blogs()
}