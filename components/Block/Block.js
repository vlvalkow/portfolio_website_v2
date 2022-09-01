import SectionBlock from './SectionBlock';

export default function Block({ block }) {
    switch (block.type) {
        case 'section':
            return (
                <SectionBlock
                    classes={block.classes}
                    variant={block.variant}
                    children={block.data.map((b, bi) => <Block key={bi} block={b} />)}
                />
            )
        case 'row':
            return (
                <div className={block.classes ?? "row"}>
                    {block.data.map((b, bi) => <Block key={bi} block={b} />)}
                </div>
            )
        case 'column':
            return (
                <div className={block.classes ?? "col"}>
                    {block.data.map((b, bi) => <Block key={bi} block={b} />)}
                </div>
            )
        case 'paragraph':
            return <p className={block.classes}>{block.data}</p>
        case 'h1':
            return <h1 className={block.classes}>{block.data}</h1>
        case 'h2':
            return <h2 className={block.classes}>{block.data}</h2>
        case 'h3':
            return <h3 className={block.classes}>{block.data}</h3>
        case 'list':
            return (
                <ul>
                    {block.data.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
            )
        case 'image':
            return (
                <img
                    className={block.classes ?? 'img-fluid'}
                    src={block.data.sourceUrl}
                    alt={block.data.alternativeText}
                />
            )
        case 'testimonial':
            return (
                <>
                    <p>{block.content}</p>
                    <p>{block.from}</p>
                    <p>{block.jobTitle}</p>
                </>
            )
        default:
            throw new Error(`Block "${block.type}" is not supported.`)
    }
}
