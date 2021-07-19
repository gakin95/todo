 export type Props = {
    bgColor: string,
    checked: boolean,
    text: string,
    //children: JSX.Element,
    onClick: () => void,
    onCheck: () => void,
    onDelete: () => void,
  };

  export type Item = {
    title: string,
    checked: boolean,
    id: string
  }

