import "./MyLabel.css"

export interface MyLabelProps {
    /**
     * Text to display
     */
    label: string;
    /**
     * Text size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * All caps bool option
     */
    allCaps?: boolean;
    /**
     * Font color
     */
    color?: "text-primary" | "text-secondary" | "text-tertiary" | "blue" | "yellow";
    fontColor?: string;
}

export const MyLabel = ({label, size = "normal", allCaps, color, fontColor}: MyLabelProps) => {
    return (
        <span style={{color: fontColor}} className={`${size} ${color}`}>{allCaps ? label.toUpperCase() : label}</span>
    )
}
