export interface LogoProps {
    animated?: boolean;
};

export default function Logo(props: LogoProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 498" width="100%" height="100%">
            <title>Logo</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path style={{
                        fill: 'var(--PRIMARY)',
                    }} id={props.animated ? "logo-outline" : ""} transform="translate(34)" d="M215.64,46.19l175.64,101.4V350.41L215.64,451.81,40,350.41V147.59L215.64,46.19m0-46.19L0,124.5v249L215.64,498,431.28,373.5v-249L215.64,0Z"/>
                    <path style={{
                        fill: 'var(--PRIMARY)',
                    }} id={props.animated ? "logo-text" : ""} transform="translate(34)" d="M74.64,312l23.78-25.65c10.46,13,22.83,20.08,34.91,20.08,18.61,0,28.17-8.13,28.17-33.17V190.55H90.07V155.84H203V276.62c0,35.86-17.66,65.54-68.26,65.54C114.42,342.16,90.59,334.24,74.64,312Z"/>
                    <path style={{
                        fill: 'var(--PRIMARY)',
                    }} id={props.animated ? "logo-text" : ""} transform="translate(34)" d="M212.23,155.92h65c38.74,0,70.62,13.47,70.62,57,0,42-31.88,60.11-70.62,60.11H253.7v65.78H212.23Zm61.65,84.24c21.74,0,33.41-9.36,33.41-27.26,0-18.06-11.67-24.13-33.41-24.13H253.7v51.39Zm24.41-4.58,58.35,103.21h-46.3L269.65,262.1Z"/>
                </g>
            </g>
        </svg>
    )
}