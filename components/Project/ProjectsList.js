import Project from "./Project";

export default function ProjectsList({projects}) {
    return (
        <>
            {projects.map(project => (
                <Project
                    key={project.id}
                    slug={project.slug}
                    title={project.title}
                    imageSrc={project.imageSrc}
                    description={project.description}
                />
            ))}
        </>
    )
}
