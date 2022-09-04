import styles from '../../styles/Stage.module.scss'

export default function Stage({ title, description, icon }) {
    return (
        <div className="col-12 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h2 className={styles.title}>{icon} {title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}
