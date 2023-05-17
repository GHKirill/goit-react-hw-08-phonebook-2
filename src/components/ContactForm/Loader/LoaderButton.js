import { RotatingLines } from 'react-loader-spinner';

export const LoaderButton = () => {
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="17"
      visible={true}
    />
  );
};
