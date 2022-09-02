import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Project.module.scss'

export default function Project({ slug, title, imageSrc, description }) {
    return (
        <div className="col slide-up">
            <Link href={{
                pathname: '/projects/[slug]',
                query: { slug: slug },
            }}>
                <a className={styles.link}>
                    <div className={`${styles.card} card card-link`}>
                        <div className="card-header">
                            <Image className={`${styles.image} img-fluid`} src={imageSrc} alt="" />
                        </div>
                        <div className={`${styles.body} card-body`}>
                            <h3 className={styles.title}>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
