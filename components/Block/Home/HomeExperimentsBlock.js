import ExperimentsList from "../../Experiment/ExperimentsList";
import Block from "../Block";
import SectionBlock from "../SectionBlock";

export default function HomeExperimentsBlock({ block, experiments }) {
    return (
        <SectionBlock variant="binary">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                    {block.data.map((b, bi) => <Block key={bi} block={b} />)}
                </div>
            </div>
            <div className="row gy-3 row-cols-auto gy-4 row-cols-lg-2">
                <ExperimentsList experiments={experiments} />
            </div>
        </SectionBlock>
    )
}
