declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';

    export interface IconProps extends SVGProps<SVGSVGElement> {
        size?: string | number;
        color?: string;
        strokeWidth?: string | number;
    }

    export type Icon = FC<IconProps>;

    export const Github: Icon;
    export const ArrowLeft: Icon;
    export const ArrowRight: Icon;
    export const Check: Icon;
    export const ChevronDown: Icon;
    export const ChevronUp: Icon;
    export const ChevronLeft: Icon;
    export const ChevronRight: Icon;
    export const Circle: Icon;
    export const X: Icon;
    export const PanelLeft: Icon;
    export const Moon: Icon;
    export const Sun: Icon;
    export const Download: Icon;
    export const GraduationCap: Icon;
    export const ExternalLink: Icon;
    export const Lightbulb: Icon;
    export const Loader2: Icon;
    export const Sparkles: Icon;
    export const CodeXml: Icon;
    export const Menu: Icon;
    export const Linkedin: Icon;
    export const Bot: Icon;
    export const Send: Icon;
    export const User: Icon;
    export const CheckCircle2: Icon;
}
