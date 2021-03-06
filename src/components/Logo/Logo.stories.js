import Logo from './Logo';

export default {
  title: 'Component/Logo',
  component: Logo,
  decorators: [
    Story => (
      <div style={{ backgroundColor: '#888' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '**Logo** 컴포넌트는 type을 받아서 Logo를 사용 할 수 있습니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['Black', 'White'],
      },
    },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = args => <Logo {...args} />;

export const LogoBlack = Template.bind({});
export const LogoWhite = Template.bind({});

LogoBlack.args = {
  type: 'Black',
  width: 130,
  height: 30,
};

LogoWhite.args = {
  type: 'White',
  width: 130,
  height: 30,
};
