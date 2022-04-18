import * as Icon from 'react-feather';

export default function Socials() {
    return (
        <div className="social-links">
            <a href="/"><Icon.GitHub color="var(--TEXT_LABEL" /></a>
            <a href="/"><Icon.Linkedin color="var(--TEXT_LABEL" /></a>
            <a href="/"><Icon.Instagram color="var(--TEXT_LABEL" /></a>
            <a href="/"><Icon.Twitter color="var(--TEXT_LABEL" /></a>
            <a href="/"><Icon.Youtube color="var(--TEXT_LABEL" /></a>
            <div className="bottom-border"></div>
        </div>
    )
}