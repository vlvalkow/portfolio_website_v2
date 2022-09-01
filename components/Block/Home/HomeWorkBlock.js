import StagesList from "../../Approach/StagesList";
import Block from "../Block";
import SectionBlock from "../SectionBlock";

export default function HomeWorkBlock({ block, stages }) {
    return (
        <>
            <SectionBlock variant="binary">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-8 mx-auto">
                        {block.data.map((b, bi) => <Block key={bi} block={b} />)}
                    </div>
                </div>
                <div className="row row-cols-4 g-2">
                    <StagesList stages={stages} />
                </div>
            </SectionBlock>
        </>
    )
}
