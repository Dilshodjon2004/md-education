import { Meta, StoryObj } from '@storybook/react'
import Button from './button'

const meta = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		appearance: {
			description: 'The appearance of the button',
			defaultValue: 'primary',
			options: ['primary', 'ghost', 'failure', 'success'],
			control: {
				type: 'radio',
			},
		},
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		appearance: 'primary',
		children: 'Button',
	},
}

export const Ghost: Story = {
	args: {
		appearance: 'ghost',
		children: 'Button',
	},
}

export const Failure: Story = {
	args: {
		appearance: 'failure',
		children: 'Button',
	},
}
export const Success: Story = {
	args: {
		appearance: 'success',
		children: 'Button',
	},
}

export const Arrow: Story = {
	args: {
		appearance: 'primary',
		children: 'Button',
		arrow: 'down',
	},
}
