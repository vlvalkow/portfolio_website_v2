import Link from "next/link";
import Block from "../Block";
import SectionBlock from "../SectionBlock";

export default function HomeContactBlock({ block, email }) {
    return (
        <SectionBlock classes="bg-secondary">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
                    {block.data.map((b, bi) => <Block key={bi} block={b} />)}
                    <Link
                        href={`mailto:${email}`}>
                        <a
                            className="btn btn-warning"
                        >Let's talk</a>
                    </Link>
                </div>
            </div>
        </SectionBlock>
    )
}
