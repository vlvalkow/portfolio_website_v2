import BinaryCodeBackground from "../../BinaryCodeBackground";
import styles from '../../../styles/ProjectTitleBlock.module.scss'

export default function ProjectTitleBlock({ title }) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
