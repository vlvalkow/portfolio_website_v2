import SectionBlock from "../SectionBlock";
import ProjectsList from "../../Project/ProjectsList"

export default function ProjectOtherProjectsBlock({ title, subtitle, otherProjects }) {
    return (
        <SectionBlock variant="binary">
            <div className="row">
                <div className="col">
                    <h1>{title}</h1>
                    <p className="lead">{subtitle}</p>
                </div>
            </div>
            <div className="row row-cols-auto gy-5 row-cols-md-3 justify-content-center d-flex">
                <ProjectsList projects={otherProjects} backgroundClass="bg-primary" />
            </div>
        </SectionBlock>
    )
}
