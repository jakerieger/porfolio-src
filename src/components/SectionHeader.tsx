export interface SectionHeaderProps {
    number: string;
    title: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'inline-flex',
                alignItems: 'baseline',
            }}>
                <p className="subtitle" style={{ fontSize: 22, marginRight: 10 }}>{props.number}.</p>
                <h3 style={{ alignSelf: 'baseline' }}>{props.title}</h3>
            </div>
            <div className="divider" />
        </div>
    )
}