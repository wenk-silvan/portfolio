import { Blogs } from "./blogs/blogs.model"
import { Career } from "./career/career.model"
import { Introduction } from "./introduction/introduction.model"
import { Photography } from "./photography/photography.model"
import { Projects } from "./projects/projects.model"

export class AppData {
    career: Career = new Career()
    projects: Projects = new Projects()
    introduction: Introduction = new Introduction()
    photography: Photography = new Photography()
    blogs: Blogs = new Blogs()
    link_back_text: string = ""
}