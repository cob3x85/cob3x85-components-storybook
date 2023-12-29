import { Meta, StoryObj} from "@storybook/react"
import { MyLabel } from "../../components/MyLabel"

const meta = {
    title: "MyLabel",
    component: MyLabel,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof MyLabel>


export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: "Link label",
    },
    tags:['autodocs'],
    argTypes: {
        size: {control: 'inline'},
        fontColor: {control: 'color' },
        color: {control: 'select' }
    },
}

export const AllCaps: Story = {
    args: {
        allCaps: true,
        label: "All Caps label",
        size: "h1"
    }
}
export const Secondary: Story = {
    args: {
        allCaps: false,
        label: "Secondary label",
        size: "h2"
    }
}
export const CustomColor: Story = {
    args: {
        allCaps: false,
        label: "Custom Color label",
        size: "h3",
    }
}

