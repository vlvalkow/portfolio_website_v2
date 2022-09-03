import SectionBlock from './SectionBlock';
import Image from 'next/image'
import Link from 'next/link'

export default function Block({ block }) {
    switch (block.type) {
        case 'section':
            return (
                <SectionBlock
                    classes={block.classes}
                    variant={block.variant}
                >
                    {block.data.map((b, bi) => <Block key={bi} block={b} />)}
                </SectionBlock>
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
            return (
                <p className={block.classes}>
                    {
                        Array.isArray(block.data) ?
                            block.data
                                .map((b, bi) => <Block key={bi} block={b} />)
                                .reduce((a, b) => [a, ' ', b]) :
                            block.data
                    }</p>
            )
        case 'linebreak':
            return <br/>
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
        case 'text':
            return block.data
        case 'link':
            return (
                <Link href={block.href}>
                    <a>{block.label}</a>
                </Link>
            )
        case 'image':
            return (
                <Image
                    className={block.classes ?? 'img-fluid'}
                    src={block.data.sourceUrl}
                    alt={block.data.alternativeText}
                    width={block.data.width}
                    height={block.data.height}
                    layout={block.data.layout ?? 'intrinsic'}
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
