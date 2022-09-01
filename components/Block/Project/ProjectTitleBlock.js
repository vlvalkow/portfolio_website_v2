import BinaryCodeBackground from "../../BinaryCodeBackground";

export default function ProjectTitleBlock({ title }) {
    return (
        <section>
            <BinaryCodeBackground />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
