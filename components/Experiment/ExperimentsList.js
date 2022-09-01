import Experiment from "./Experiment";

export default function ExperimentsList({ experiments }) {
    return (
        <>
            {experiments.map(experiment => {
                return <Experiment
                    key={experiment.id}
                    slug={experiment.slug}
                    title={experiment.title}
                    description={experiment.description}
                    technologies={experiment.technologies}
                />
            }
            )}
        </>
    )
}
