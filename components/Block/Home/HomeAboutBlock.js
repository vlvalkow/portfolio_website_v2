import Block from "../Block";

export default function HomeAboutBlock({ block }) {
    return (
        <>
            {block.data.map((block, bi) => <Block key={bi} block={block} />)}
        </>
    )
}
