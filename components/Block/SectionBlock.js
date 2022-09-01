import BinaryCodeBackground from "../BinaryCodeBackground";

export default function SectionBlock({ classes, variant, children, opacity }) {
    return (
        <section className={classes}>
            {
                variant === 'binary' &&
                <BinaryCodeBackground
                    opacity={opacity ?? 50}
                />
            }
            <div className="container">
                {children}
            </div>
        </section>
    )
}
