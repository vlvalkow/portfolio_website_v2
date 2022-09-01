import Block from "../Block";

export default function ProjectContentBlock({ content }) {
    return (
        <main>
            {content.map((block, bi) => <Block key={bi} block={block} />)}
        </main>
    )
}
