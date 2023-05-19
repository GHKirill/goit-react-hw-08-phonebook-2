import { RotatingLines } from 'react-loader-spinner';

export const LoaderButton = () => {
  return (
    <RotatingLines
      //strokeColor="rgb(25, 118, 210)"
      strokeColor="white"
      strokeWidth="5"
      animationDuration="0.75"
      width="17"
      visible={true}
    />
  );
};
