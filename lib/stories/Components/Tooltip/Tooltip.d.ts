import { ReactNode } from 'react';
import 'tippy.js/dist/tippy.css';
export declare type TooltipProps = {
    children: ReactNode;
    content: ReactNode;
};
export declare const Tooltip: ({ children, content, ...props }: TooltipProps) => import("theme-ui/jsx-runtime").JSX.Element;
export default Tooltip;
