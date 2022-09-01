import Link from 'next/link'
import styles from '../../styles/Experiment.module.scss'

export default function Experiment({ slug, title, description, technologies }) {
    return (
        <div className="col slide-up">
            <Link href={`https://github.com/vlvalkow/${slug}`}>
                <a className={styles.link} rel="noreferrer" target="_blank">
                    <div className="card card-link">
                        <div className="card-body">
                            <h3 className={styles.title}>{title}</h3>
                            <p>{description}</p>
                            <ul className={`list-group list-group-horizontal ${styles['technology-list']}`}>
                                {technologies.map((technology, i) =>
                                    <li
                                        key={i}
                                        className={`${styles.technology} list-group-item`}
                                    >{technology}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
