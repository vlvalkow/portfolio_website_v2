import Stage from "./Stage";

export default function StagesList({stages}) {
    return (
        <>
            {stages.map(stage => (
                <Stage
                    key={stage.id}
                    title={stage.title}
                    description={stage.description}
                    image={stage.image}
                />
            ))}
        </>
    )
}
