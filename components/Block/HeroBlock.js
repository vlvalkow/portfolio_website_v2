import Block from "./Block";
import SectionBlock from "./SectionBlock";

export default function HeroBlock({ block }) {
    return (
        <SectionBlock
            variant="binary"
            classes="hero"
            opacity={100}
        >
            <div className="container">
                <div className="row">
                    <div className="col">
                        {block.data.map((block, bi) =>
                            <Block
                                key={bi}
                                block={block}
                            />
                        )}
                    </div>
                </div>
            </div>
        </SectionBlock>
    )
}
