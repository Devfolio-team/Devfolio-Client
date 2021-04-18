import TextArea from './TextArea';

export default {
  title: 'Component/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: '**TextArea** 컴포넌트는 여러 줄의 텍스트를 입력 받을 수 있는 컴포넌트입니다. ',
      },
    },
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    transform: { control: 'number' },
    marginLeft: { control: 'number' },
  },
};

const Template = args => <TextArea {...args}></TextArea>;

export const ExampleTextArea = Template.bind({});

ExampleTextArea.args = {
  width: 300,
  height: 95,
  id: 'text1',
  transform: 3.5,
  marginLeft: 0,
};
