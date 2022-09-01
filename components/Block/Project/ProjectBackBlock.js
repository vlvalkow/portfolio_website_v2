import Link from "next/link";
import BinaryCodeBackground from "../../BinaryCodeBackground";

export default function ProjectBackBlock({ title }) {
    return (
        <section>
            <BinaryCodeBackground opacity={50} />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link href="/">
                            <a>Back</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
