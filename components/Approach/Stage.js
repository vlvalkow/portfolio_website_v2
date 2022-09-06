export default function Stage({ title, description, icon }) {
    return (
        <div className="col-12 col-lg-3">
            <div className="card h-100">
                <div className="card-body">
                    <h2>{icon} {title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
