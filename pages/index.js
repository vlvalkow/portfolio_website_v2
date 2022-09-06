import Head from 'next/head'
import SettingRepository from "../lib/Repository/SettingRepository";
import ProjectRepository from "../lib/Repository/ProjectRepository";
import StageRepository from "../lib/Repository/StageRepository";
import ExperimentRepository from "../lib/Repository/ExperimentRepository";
import HeroBlock from "../components/Block/HeroBlock";
import PageRepository from "../lib/Repository/PageRepository";
import HomeAboutBlock from "../components/Block/Home/HomeAboutBlock";
import HomeWorkBlock from "../components/Block/Home/HomeWorkBlock";
import HomeProjectsBlock from "../components/Block/Home/HomeProjectsBlock";
import HomeExperimentsBlock from "../components/Block/Home/HomeExperimentsBlock";
import HomeContactBlock from "../components/Block/Home/HomeContactBlock";
import Layout from "../components/layout";

export default function Home({ page, settings, stages, projects, experiments }) {
    return (
        <Layout
            email={settings.email}
            username={settings.username}
        >
            <Head>
                <title>{page.title}</title>
            </Head>
            <HeroBlock
                block={page.content.find(b => b.type === 'hero')}
            />
            <HomeAboutBlock
                block={page.content.find(b => b.type === 'home_about')}
            />
            <HomeWorkBlock
                block={page.content.find(b => b.type === 'home_work')}
                stages={stages}
            />
            <HomeProjectsBlock
                block={page.content.find(b => b.type === 'home_projects')}
                projects={projects}
            />
            <HomeExperimentsBlock
                block={page.content.find(b => b.type === 'home_experiments')}
                experiments={experiments}
            />
            <HomeContactBlock
                block={page.content.find(b => b.type === 'home_contact')}
                email={settings.email}
            />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const pageRepository = new PageRepository
    const page = pageRepository.findBySlug('home');

    const settingRepository = new SettingRepository
    const settings = settingRepository.findAll()

    const projectRepository = new ProjectRepository
    const projects = projectRepository.findAll()

    const experimentRepository = new ExperimentRepository
    const experiments = experimentRepository.findAll()

    const stageRepository = new StageRepository
    const stages = stageRepository.findAll()

    return {
        props: {
            page,
            settings,
            stages,
            projects,
            experiments,
        },
    }
}
