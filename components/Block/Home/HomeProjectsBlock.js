import ProjectsList from "../../Project/ProjectsList";
import Block from "../Block";
import SectionBlock from "../SectionBlock";

export default function HomeProjectsBlock({ block, projects }) {
    return (
        <SectionBlock classes="bg-secondary">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                    {block.data.map((b, bi) => <Block key={bi} block={b} />)}
                </div>
            </div>
            <div className="row row-cols-auto gy-5 row-cols-md-2 row-cols-lg-3 justify-content-center">
                <ProjectsList projects={projects} backgroundClass="bg-primary" />
            </div>
        </SectionBlock>
    )
}
