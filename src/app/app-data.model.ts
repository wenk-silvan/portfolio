import { Career } from "./career/career.model"
import { Introduction } from "./introduction/introduction.model"
import { Projects } from "./projects/projects.model"

export class AppData {
    career: Career = new Career()
    projects: Projects = new Projects()
    introduction: Introduction = new Introduction()
}