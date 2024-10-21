import { Blogs } from "./home/blogs/blogs.model"
import { Career } from "./home/career/career.model"
import { Photography } from "./home/photography/photography.model"
import { Projects } from "./home/projects/projects.model"

export class AppData {
    career: Career = new Career()
    projects: Projects = new Projects()
    photography: Photography = new Photography()
    blogs: Blogs = new Blogs()
    link_back_text: string = ""
}