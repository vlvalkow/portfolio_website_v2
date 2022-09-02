import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import ProjectTitleBlock from '../../components/Block/Project/ProjectTitleBlock'
import ProjectBackBlock from '../../components/Block/Project/ProjectBackBlock'
import ProjectContentBlock from '../../components/Block/Project/ProjectContentBlock'
import SettingRepository from '../../lib/Repository/SettingRepository'
import PageRepository from '../../lib/Repository/PageRepository'
import ProjectRepository from '../../lib/Repository/ProjectRepository'
import Layout from '../../components/layout'

export default function ProjectSingle({ page, project, settings }) {
    const router = useRouter()
    if (!router.isFallback && !page?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout
            email={settings.email}
            username={settings.username}
        >
            <ProjectTitleBlock
                title={project.title}
            />
            <ProjectContentBlock
                content={project.content}
            />
            <ProjectBackBlock />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const pageRepository = new PageRepository
    const page = pageRepository.findBySlug(params.slug)

    const projectRepository = new ProjectRepository
    const project = projectRepository.findByIri(page.content)

    const settingRepository = new SettingRepository
    const settings = settingRepository.findAll()

    return {
        props: {
            page: page,
            project: project,
            settings: settings,
        },
    }
}

export async function getStaticPaths() {
    const pageRepository = new PageRepository
    const pages = pageRepository.findByType('project');

    return {
        paths: pages.map(page => {
            return {
                params: {
                    slug: page.slug,
                },
            }
        }),
        fallback: false,
    }
}
