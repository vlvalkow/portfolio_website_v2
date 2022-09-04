import Image from 'next/image'
import styles from '../../styles/Stage.module.scss'

export default function Stage({ title, description, image }) {
    return (
        <div className="col-12">
            <div className="row mb-5 align-items-center d-flex">
                <div className="col-12 col-md-6">
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className="col-12 col-md-6">
                <Image
                    className={image.classes ?? 'img-fluid'}
                    src={image.sourceUrl}
                    alt={image.alternativeText}
                    width={image.width}
                    height={image.height}
                    layout={image.layout ?? 'intrinsic'}
                />
                </div>
            </div>
        </div>
    )
}
